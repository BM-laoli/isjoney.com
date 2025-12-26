"use client";

import { useEffect, useRef, useId } from "react";
import mermaid from "mermaid";

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

export function MdxContent({ html, className = "" }: MdxContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  // 使用 React 的 useId 生成唯一前缀，确保每次组件实例都不同
  const uniqueId = useId();

  useEffect(() => {
    if (!ref.current) return;

    // Mermaid 初始化
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
    });

    // 渲染 Mermaid 
    ref.current
      .querySelectorAll<HTMLElement>("[data-mermaid]")
      .forEach(async (el, i) => {
        //解码
        const code = decodeBase64Utf8(el.getAttribute("data-mermaid") || "");
        const id = `mermaid-${uniqueId.replace(/:/g, "")}-${i}-${Date.now()}`;

        try {
          const { svg } = await mermaid.render(id, code);
          el.innerHTML = svg;
        } catch (e) {
          el.innerHTML = `<pre class="text-red-500">Mermaid Error: ${e}</pre>`;
        }
      });

       // 加载 diagrams.net viewer
    const drawioElements = ref.current.querySelectorAll<HTMLElement>(
      "[data-drawio-xml]"
    );

    if (drawioElements.length > 0) {
      // 检查是否已加载
      if (!document.getElementById("drawio-viewer-script")) {
        const script = document.createElement("script");
        script.id = "drawio-viewer-script";
        script.src =
          "https://viewer.diagrams.net/js/viewer-static.min.js";
        script.onload = () => renderDrawio(drawioElements);
        document.body.appendChild(script);
      } else {
        renderDrawio(drawioElements);
      }
    }

    function renderDrawio(elements: NodeListOf<HTMLElement>) {
      elements.forEach((el) => {
        //解码
         const xml = decodeBase64Utf8(el.getAttribute("data-drawio-xml") || "");
        
        // 创建 mxgraph 容器 - diagrams.net viewer 需要的格式
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
        
        // 触发 viewer 渲染
        if (window.GraphViewer) {
          window.GraphViewer.createViewerForElement(container);
        }
      });
    }

   return () => {
      // 清理 Mermaid 渲染内容
      ref.current?.querySelectorAll<HTMLElement>("[data-mermaid]").forEach((el) => {
        el.innerHTML = "";
      });
   }
  }, [html, uniqueId]);

  return (
    <div
      ref={ref}
      className={`prose prose-neutral dark:prose-invert max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
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