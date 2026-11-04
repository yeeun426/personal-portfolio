import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import { notoSansKr, pretendard } from "./fonts";

// 기존 React 버전과 같은 CSS 적용 순서
// 1) index.html 에서 CDN 으로 불러오던 bootstrap 4.6.2
// 2) src/App.css
// 3) src/index.js 에서 import 하던 bootstrap 5
import "bootstrap4/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

// OG 이미지 등 절대 주소의 기준. 배포 환경 변수 SITE_URL (없으면 Netlify 가 넣어주는 URL) 사용
const siteUrl = process.env.SITE_URL ?? process.env.URL;

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
        <StyledComponentsRegistry>
          {/* 기존 #root > .App 구조. react-modal 이 aria-hidden 처리하는 영역 */}
          <div id="app-root" className="App">
            {children}
          </div>
          {modal}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
