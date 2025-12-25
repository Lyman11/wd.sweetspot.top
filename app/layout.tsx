import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sweet Spot株式会社 - AI智能网页设计与企业级解决方案",
  description: "面向未来的全包式网页设计与企业级AI解决方案。专注中小企业、市场调研、证券分析与电商行业的数字化转型。",
  keywords: "AI网页设计, 企业级AI, 智能网站, 数字化转型, Sweet Spot",
  openGraph: {
    title: "Sweet Spot株式会社",
    description: "面向未来的全包式网页设计与企业级AI解决方案",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
