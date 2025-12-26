import Link from "next/link";

export default function NotAvailable({
  searchParams,
}: {
  searchParams: { redirect?: string };
}) {
  const targetPath = searchParams.redirect || "/";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">🌐 内容暂未翻译</h1>
      <p className="text-gray-600 mb-6 text-center">
        该页面目前仅提供英文版本，阅读更多请前往 EN 页面
      </p>
      <div className="flex gap-4">
        <Link
          href={targetPath}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View in English →
        </Link>
        <Link
          href="/zh"
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}