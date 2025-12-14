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
        {/* Animated blur background - Purple gradient */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Top section - Purple */}
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-br from-purple-300 to-pink-300 animate-float-slow" />
          <div className="absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-25 bg-gradient-to-br from-pink-300 to-purple-300 animate-float-reverse" />
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-15 bg-gradient-to-r from-purple-200 to-pink-200 animate-float" />

          {/* Middle section - Purple */}
          <div className="absolute top-[45%] right-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-15 bg-gradient-to-br from-purple-300 to-pink-300 animate-float-delayed" />

          {/* Bottom section - Purple */}
          <div className="absolute top-[55%] left-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-purple-300 to-pink-300 animate-float-slow" />
          <div className="absolute top-[70%] right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 bg-gradient-to-br from-purple-400 to-pink-400 animate-float-reverse" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-purple-300 to-pink-300 animate-float-delayed" />
          <div className="absolute bottom-40 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-purple-400 to-pink-400 animate-float-slow-reverse" />
        </div>
        {children}
      </body>
    </html>
  );
}
