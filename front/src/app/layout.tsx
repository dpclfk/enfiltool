import type { Metadata } from "next";
import "./globals.css";
import GNB from "@/components/global-nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { notoSansKr } from "@/style/fonts";

export const metadata: Metadata = {
  title: "endfield tool",
  description: "명일방주: 엔드필드 관련 여러 도구 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${notoSansKr.className} font-normal antialiased min-h-screen bg-zinc-100 dark:bg-gray-800 w-full`}
      >
        <ThemeProvider>
          <GNB />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
