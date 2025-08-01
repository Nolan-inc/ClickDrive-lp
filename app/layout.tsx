import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClickDrive | プロフェッショナルなウェブデザイン",
  description: "ClickDriveは、ビジネスの成長を加速させるプロフェッショナルなウェブデザインサービスを提供します。レスポンシブデザイン、SEO対策、高速パフォーマンスを実現。",
  keywords: "ウェブデザイン, ホームページ制作, レスポンシブデザイン, SEO対策, ClickDrive",
  openGraph: {
    title: "ClickDrive | プロフェッショナルなウェブデザイン",
    description: "ビジネスの成長を加速させるプロフェッショナルなウェブデザインサービス",
    type: "website",
    locale: "ja_JP",
    siteName: "ClickDrive",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickDrive | プロフェッショナルなウェブデザイン",
    description: "ビジネスの成長を加速させるプロフェッショナルなウェブデザインサービス",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
