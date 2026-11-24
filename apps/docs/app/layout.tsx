import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./docs/theme-panel/theme-context";
import { ThemeCSSInjector } from "./docs/theme-panel/theme-css-injector";
import { THEME_BOOT_SCRIPT } from "./docs/theme-panel/theme-boot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiftKit",
  description: "The UI framework for perfectionists. Components built on Base UI with golden-ratio scaling, optical correction, and Material-based color.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Puts a returning visitor's saved theme on the page before first paint, so a full page load doesn't flash the default one */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOT_SCRIPT }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* The Theme Generator's theme (saved in localStorage) applies to every page, not just /playground */}
        <ThemeProvider>
          <ThemeCSSInjector />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
