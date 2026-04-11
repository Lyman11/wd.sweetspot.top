import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, Noto_Sans_SC } from "next/font/google";
import "./globals.css";

// 标题字体 - 优雅的衬线体，具有独特风格
const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  display: "optional",
  variable: "--font-dm-serif",
});

// 正文字体 - 现代几何无衬线，清晰易读
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "optional",
  variable: "--font-outfit",
});

// 中文字体
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
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
    <html lang="zh-CN" className={`${dmSerifDisplay.variable} ${outfit.variable} ${notoSansSC.variable}`}>
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
