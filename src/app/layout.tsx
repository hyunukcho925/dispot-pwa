import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const viewport = {
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: "디스팟 - 해외직구 할인코드 & 쇼핑 프로모션 모음",
  description: "해외직구 및 국내쇼핑몰 할인코드, 프로모션코드, 쿠폰 정보를 한눈에! 마이테레사, COS, 테무, 알리익스프레스, 아고다, 부킹닷컴, 마이리얼트립 등 인기 쇼핑몰의 최신 핫딜 정보를 제공합니다.",
  manifest: "/manifest.json",
  keywords: "해외직구, 할인코드, 프로모션코드, 쿠폰, 핫딜, 마이테레사, COS, 테무, 알리익스프레스, 아고다, 부킹닷컴, 마이리얼트립",
  authors: [{ name: "디스팟" }],
  creator: "디스팟",
  publisher: "디스팟",
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "디스팟",
  },
  openGraph: {
    type: "website",
    title: "디스팟 - 해외직구 할인코드 & 쇼핑 프로모션 모음",
    description: "해외직구 및 국내쇼핑몰 할인코드, 프로모션코드, 쿠폰 정보를 한눈에! 인기 쇼핑몰의 최신 핫딜 정보를 제공합니다.",
    siteName: "디스팟",
    images: [
      {
        url: '/assets/images/meta.webp',
        width: 1200,
        height: 630,
        alt: '디스팟 - 해외직구 할인코드 & 쇼핑 프로모션 모음',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "디스팟 - 해외직구 할인코드 & 쇼핑 프로모션 모음",
    description: "해외직구 및 국내쇼핑몰 할인코드, 프로모션코드, 쿠폰 정보를 한눈에!",
    images: ['/assets/images/meta.webp'],
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192" },
      { url: "/icons/icon-512x512.png", sizes: "512x512" },
    ],
    apple: "/icons/icon-192x192.png",
    shortcut: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta name="application-name" content="디스팟" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="디스팟" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${geist.className} antialiased`}>
        <div className="min-h-screen flex flex-col max-w-[480px] mx-auto bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
