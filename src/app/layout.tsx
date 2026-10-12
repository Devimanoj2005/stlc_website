import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "STLC 2026 | IEEE ComSoc Student Tech Leadership Conference",
  description:
    "Where Technology Meets Leadership. A two-day residential conference organized by IEEE ComSoc SBC SJCET in association with IEEE ComSoc Kerala Chapter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${syne.variable} scroll-smooth antialiased bg-[#3E1C0D]`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#3E1C0D] text-slate-900 selection:bg-[#E8C5A8] selection:text-[#2B1408]">
        {children}
      </body>
    </html>
  );
}