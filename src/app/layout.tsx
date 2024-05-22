import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://nextjs-lms-taupe.vercel.app"),
  title: "LMS",
  description:
    "Place where you can use this website as Learning Management System",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen w-screen">
      <body
        className={
          `${inter.variable}` + " flex h-full w-full flex-col bg-white"
        }
      >
        <main className="flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}
