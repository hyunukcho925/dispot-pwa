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
  title: "디스팟",
  description: "Dispot Progressive Web App",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "디스팟",
  },
  icons: {
    apple: "/icons/icon-192x192.png",
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
      </head>
      <body className={`${geist.className} antialiased`}>
        <div className="min-h-screen flex flex-col max-w-[480px] mx-auto bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
