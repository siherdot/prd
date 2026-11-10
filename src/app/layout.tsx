import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter_Tight } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RSU Mahkota Bidadari — Layanan Kesehatan Modern & Terpadu",
  description:
    "Rumah Sakit Umum Mahkota Bidadari (Bidadari Medikal Nusantara Group) — IGD 24 Jam, 16 Poliklinik Spesialis, 34 Dokter Ahli, Cathlab, Hemodialisis, dan Rawat Inap Terpadu.",
  icons: {
    icon: "/assets/icon_bidadari.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${interTight.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-dpai-chrome text-dpai-ink font-sans">
        {children}
      </body>
    </html>
  );
}
