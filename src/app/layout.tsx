import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://locaplus.cn"),
  title: "LOCA+ | 益邻家 Community Life Plus",
  description:
    "LOCA+ 是益邻家旗下社区生活服务品牌，连接出行、公益、邻里互助、宠物友好与社区品牌合作。",
  openGraph: {
    title: "LOCA+ | Community Life Plus",
    description: "让更好的社区生活，就在家门口发生。",
    url: "https://locaplus.cn",
    siteName: "LOCA+",
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
