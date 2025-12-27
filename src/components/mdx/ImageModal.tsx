// components/ImageModal.tsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
export type PreviewContent = 
  | { type: 'image'; data: string }
  | { type: 'svg'; data: string }
  | null;

interface ModalProps {
  content: PreviewContent;
  onClose: () => void;
}

export function UniversalPreviewModal({ content, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (content) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [content, onClose]);

  if (!content) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity"
      onClick={onClose}
    >
      {/* 容器：针对 SVG 需要特殊处理宽度，防止过大 */}
      <div 
        className="relative max-w-[95vw] max-h-[95vh] bg-white dark:bg-zinc-900 p-2 rounded-lg shadow-2xl overflow-auto flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} 
      >
        <button
          className="absolute top-2 right-2 z-10 p-2 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-gray-200 transition-colors"
          onClick={onClose}
        >
          ✕
        </button>

        {content.type === 'image' ? (
          // 图片模式
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={content.data}
            alt="Preview"
            className="max-w-full max-h-[90vh] object-contain"
          />
        ) : (
          // Mermaid/SVG 模式
          <div 
            className="w-full h-full min-w-[50vw] min-h-[50vh] flex items-center justify-center p-4 [&_svg]:max-w-full [&_svg]:max-h-[85vh] [&_svg]:h-auto"
            // 直接注入 SVG 代码
            dangerouslySetInnerHTML={{ __html: content.data }}
          />
        )}
      </div>
    </div>,
    document.body
  );
}