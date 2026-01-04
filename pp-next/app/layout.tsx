import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이예은 포트폴리오",
  description: "프론트엔드 개발자 이예은의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
