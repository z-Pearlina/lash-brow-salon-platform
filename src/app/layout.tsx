import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import IntroAnimation from "@/components/IntroAnimation";
import Providers from "@/components/Providers";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-headline",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modern Muse | Premium Beauty Studio",
  description: "Bespoke lash extensions, brow lifts, and threading in a sanctuary of clinical luxury.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${manrope.variable}`}>
      <body className="bg-background text-text-main antialiased">
        <Providers>
          <IntroAnimation />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}