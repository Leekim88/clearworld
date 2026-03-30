import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ClearWorld 清晰世界 - AI 图片超分辨率',
  description: '帮助摄影师、设计师快速将低分辨率图片提升为高清图',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
