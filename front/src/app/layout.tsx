import type { Metadata } from "next";
import "./globals.css";
import GNB from "@/components/global-nav-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
        className={`${notoSansKr.className} antialiased min-h-screen bg-zinc-50 font-sans dark:bg-gray-800 w-full`}
      >
        <ThemeProvider>
          <GNB />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
