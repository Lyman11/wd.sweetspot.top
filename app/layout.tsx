import type { Metadata } from "next";
import { Montserrat, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

// 配置拉丁字体 - 只加载必要权重,加快下载
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600"], // 减少到2个权重:正常和粗体
  display: "optional", // optional: 避免字体切换闪烁
  variable: "--font-montserrat",
});

// 配置中文字体 - 减少权重,使用 optional 避免闪烁
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"], // 只加载2个权重,减少文件大小
  display: "optional", // optional: 字体未及时加载则使用后备字体,避免闪烁
  variable: "--font-noto-sans-sc",
  preload: true,
  adjustFontFallback: true,
});

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
    <html lang="zh-CN" className={`${montserrat.variable} ${notoSansSC.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
