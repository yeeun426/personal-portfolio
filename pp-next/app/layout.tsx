import type { Metadata } from "next";
import { notoSansKr, pretendard } from "./fonts";

// 전역 리셋 + Tailwind (구성은 globals.css 상단 주석 참고)
import "./globals.css";

// OG 이미지 등 절대 주소의 기준.
// Vercel 배포 시에는 설정하지 않아도 Next 가 프로덕션 주소를 자동으로 사용함.
// 직접 연결한 도메인을 쓰고 싶을 때만 환경 변수 SITE_URL (예: https://leeyeeun.dev) 을 설정.
const siteUrl = process.env.SITE_URL;

const description = "프론트엔드 개발자 이예은의 포트폴리오입니다.";

export const metadata: Metadata = {
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
  title: {
    default: "이예은 포트폴리오",
    template: "%s | 이예은 포트폴리오",
  },
  description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "이예은 포트폴리오",
    title: "이예은 포트폴리오",
    description,
  },
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  /** app/@modal 슬롯 (프로젝트 상세 모달) */
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${notoSansKr.variable}`}>
      <body>
        {/* 기존 #root > .App 구조. react-modal 이 aria-hidden 처리하는 영역 */}
        <div id="app-root" className="App">
          {children}
        </div>
        {modal}
      </body>
    </html>
  );
}
