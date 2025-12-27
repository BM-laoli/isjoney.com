// // app/books/components/BookDirectory.tsx
// import Link from "next/link";

// // 1. 模拟全局数据结构 (在实际项目中这可能来自 context 或 constant)
// export const GLOBAL_DATA = {
//   UE: [
//     {
//       title: "Unreal Engine C++ 编程文档",
//       slug: "ue-cpp-guide",
//       children: [
//         { title: "前言", slug: "preface" },
//         { title: "工程结构", slug: "project-structure" },
//         { 
//           title: "对象系统", 
//           slug: "object-system", 
//           children: [
//             { title: "结构", slug: "structs" },
//             { title: "反射系统", slug: "reflection" }
//           ] 
//         },
//       ]
//     }
//   ]
// };

// // 2. 简单的递归 Tree 组件
// export function BookDirectoryTree({ items, currentSlug }: { items: any[], currentSlug: string }) {
//   return (
//     <ul className="space-y-2 text-sm">
//       {items.map((item, index) => {
//         const isActive = item.slug === currentSlug;
//         return (
//           <li key={index} className="pl-3">
//             {/* 这里的 href 需要根据你的实际路由规则拼接 */}
//             <Link 
//               href={`/books/${item.slug}`} 
//               className={`block py-1 hover:text-blue-500 transition-colors ${
//                 isActive ? "text-blue-600 font-bold" : "text-gray-600 dark:text-gray-400"
//               }`}
//             >
//               {item.title}
//             </Link>
            
//             {/* 递归渲染子节点 */}
//             {item.children && item.children.length > 0 && (
//               <div className="border-l border-gray-200 dark:border-zinc-800 ml-2 mt-1">
//                 <BookDirectoryTree items={item.children} currentSlug={currentSlug} />
//               </div>
//             )}
//           </li>
//         );
//       })}
//     </ul>
//   );
// }


import Link from "next/link";
import { cn } from "@/lib/utils"; // 假设你有这个

// 递归组件
interface BookDirectoryTreeProps {
  items: any[];
  currentSlug: string;
  onItemClick?: () => void; // 新增：点击回调
  level?: number; // 新增：用于缩进控制
}

export function BookDirectoryTree({ 
  items, 
  currentSlug, 
  onItemClick, 
  level = 0 
}: BookDirectoryTreeProps) {
  return (
    <ul className={cn("space-y-1 text-sm", level > 0 && "ml-3 border-l border-border/50 pl-3")}>
      {items.map((item, index) => {
        // 判断当前节点是否激活（简单判断 slug，复杂场景可能需要判断 href）
        const isActive = item.slug === currentSlug;
        
        return (
          <li key={index}>
            {/* 这里的 href 生成逻辑根据你的实际情况调整 */}
            <Link
              href={`/books/${item.slug}`}
              onClick={onItemClick}
              className={cn(
                "block py-1.5 transition-colors hover:text-primary",
                isActive 
                  ? "font-semibold text-primary" 
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </Link>

            {/* 递归子节点 */}
            {item.children && item.children.length > 0 && (
              <BookDirectoryTree 
                items={item.children} 
                currentSlug={currentSlug} 
                onItemClick={onItemClick}
                level={level + 1}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
