"use client";

import { useEffect, useRef, useId, useState, memo, useCallback } from "react";
import mermaid from "mermaid";
import { PreviewContent, UniversalPreviewModal } from "./ImageModal";

interface MdxContentProps {
  html: string;
  className?: string;
}

function decodeBase64Utf8(base64: string): string {
  // atob 只能处理 Latin1，需要手动处理 UTF-8
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new TextDecoder("utf-8").decode(bytes);
}


// 关键：使用 memo 包裹，防止父组件 state 变化导致重渲染
interface InnerContentProps {
  html: string;
  className?: string;
}

const MermaidDrawioContent = memo(({ html, className = "" }: InnerContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const uniqueId = useId();

  // 这里是你原来的核心逻辑，完全保留
  useEffect(() => {
    if (!ref.current) return;

    // 1. Mermaid 初始化
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose", // 有时需要调整安全级别
    });

    // 2. 渲染 Mermaid
    const mermaidNodes = ref.current.querySelectorAll<HTMLElement>("[data-mermaid]");
    mermaidNodes.forEach(async (el, i) => {
      // 检查是否已经渲染过，防止重复处理
      if (el.getAttribute("data-processed")) return;
      
      const code = decodeBase64Utf8(el.getAttribute("data-mermaid") || "");
      // 移除冒号等特殊字符，防止选择器报错
      const id = `mermaid-${uniqueId.replace(/[^a-zA-Z0-9]/g, "")}-${i}`;

      try {
        // 先清空内容，防止原来的 loading 文字残留
        el.innerHTML = "";
        const { svg } = await mermaid.render(id, code);
        el.innerHTML = svg;
        el.setAttribute("data-processed", "true"); // 标记已处理
      } catch (e) {
        console.error("Mermaid Render Error:", e);
        el.innerHTML = `<pre class="text-red-500 text-xs p-2 border border-red-200 bg-red-50 rounded">Mermaid Error: ${(e as Error).message}</pre>`;
      }
    });

    // 3. 加载 diagrams.net viewer
    const drawioElements = ref.current.querySelectorAll<HTMLElement>("[data-drawio-xml]");
    
    if (drawioElements.length > 0) {
      const renderDrawio = (elements: NodeListOf<HTMLElement>) => {
        elements.forEach((el) => {
           if (el.getAttribute("data-processed")) return;

          const xml = decodeBase64Utf8(el.getAttribute("data-drawio-xml") || "");
          const container = document.createElement("div");
          container.className = "mxgraph";
          container.setAttribute("data-mxgraph", JSON.stringify({
            highlight: "#0000ff",
            nav: true,
            resize: true,
            toolbar: "zoom layers lightbox",
            xml: xml,
          }));
          
          el.innerHTML = "";
          el.appendChild(container);
          el.setAttribute("data-processed", "true");
          
          if (window.GraphViewer) {
            window.GraphViewer.createViewerForElement(container);
          }
        });
      };

      if (!document.getElementById("drawio-viewer-script")) {
        const script = document.createElement("script");
        script.id = "drawio-viewer-script";
        script.src = "https://viewer.diagrams.net/js/viewer-static.min.js";
        script.onload = () => renderDrawio(drawioElements);
        document.body.appendChild(script);
      } else {
        renderDrawio(drawioElements);
      }
    }

    //4.数据
    const tables = ref.current.querySelectorAll("table");
    tables.forEach((table) => {
      // A. 检查是否已经包裹过，防止 React 重渲染导致无限嵌套
      if (table.parentElement?.classList.contains("overflow-x-auto")) return;

      // B. 排除 Mermaid 或 Drawio 内部可能生成的 table (防御性编程)
      // 有些图表库内部也会用 table 布局，那些不需要我们需要处理
      if (table.closest("[data-mermaid]") || table.closest(".mxgraph")) return;

      // C. 创建包裹容器
      const wrapper = document.createElement("div");
      // 关键样式：overflow-x-auto 实现横向滚动
      // my-4 是为了保持垂直间距
      wrapper.className = "overflow-x-auto my-4 w-full"; 
      
      // D. DOM 操作：将 table 移动到 wrapper 中
      table.parentNode?.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    });

    // 清理函数：不需要移除 innerHTML，因为 memo 保证了只有 html 变了才会重新 mount
  }, [html, uniqueId]);

  return (
    <div
      ref={ref}
      //className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}
      className={`prose prose-neutral dark:prose-invert max-w-none break-words ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
// 这里的 props 比较函数很重要，确保只有 html 真正变了才重渲染
}, (prev, next) => prev.html === next.html && prev.className === next.className);

MermaidDrawioContent.displayName = "MermaidDrawioContent";


export function MdxContent({ html, className = "" }: MdxContentProps) {
  // 状态改为存储对象：{ type, data }
  const [modalContent, setModalContent] = useState<PreviewContent>(null);

  const handleContainerClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    // 1. 处理 Mermaid 点击
    // 使用 closest 向上查找，因为用户可能点击的是 SVG 里的 <path> 或 <text>
    const mermaidWrapper = target.closest('[data-mermaid]');
    if (mermaidWrapper) {
      // Mermaid 容器里的 innerHTML 就是渲染好的 <svg>
      // 这里的 mermaidWrapper 是包含了 svg 的那个 div
      setModalContent({ 
        type: 'svg', 
        data: mermaidWrapper.innerHTML 
      });
      return;
    }

    // 2. 处理图片 点击 (排除 Drawio 里的图片)
    // Drawio 渲染的 DOM 比较复杂，通常包含 mxgraph 类
    if (target.tagName === "IMG" && !target.closest('.mxgraph')) {
        const img = target as HTMLImageElement;
        // 只有当图片不是特别小的时候才预览（可选）
        if(img.naturalWidth > 50) {
            setModalContent({ 
              type: 'image', 
              data: img.src 
            });
        }
    }
  }, []);

  return (
    <>
      <div onClick={handleContainerClick} className="cursor-default">
        {/* Mermaid 图表添加 cursor-zoom-in 样式提示用户可点击 */}
        <div className="[&_[data-mermaid]]:cursor-zoom-in [&_img]:cursor-zoom-in">
          <MermaidDrawioContent html={html} className={className} />
        </div>
      </div>

      <UniversalPreviewModal 
        content={modalContent}
        onClose={() => setModalContent(null)} 
      />
    </>
  );
}


// TypeScript 类型声明
declare global {
  interface Window {
    GraphViewer?: {
      createViewerForElement: (el: HTMLElement) => void;
    };
  }
}