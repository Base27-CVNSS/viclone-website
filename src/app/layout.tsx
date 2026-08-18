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
  title: "ViClone Website — Tái dựng website bằng AI",
  description:
    "Template Next.js và workflow AI giúp khảo sát, phân tích và tái dựng giao diện website thành mã nguồn hiện đại, có cấu trúc và dễ bảo trì.",
  keywords: [
    "ViClone Website",
    "AI website cloner",
    "Next.js",
    "reverse engineering frontend",
    "Vietnamese",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
