import { Tag } from '@/components/Tags';
import './globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="border-yellow-600 border-solid border-spacing-4 border-2 m-4 p-4">
        <Tag twClass="bg-yellow-400">React server component: RootLayout</Tag>
        <div className="bg-purple-200 p-4 m-2">
          <Link href="/" className="text-blue-900 text-lg px-4">
            Home
          </Link>
          <Link href="/blog" className="text-blue-900 text-lg px-4">
            Blog
          </Link>
        </div>
        <div className="m-4">{children}</div>
      </body>
    </html>
  );
}
