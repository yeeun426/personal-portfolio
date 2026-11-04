import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";

// 기존 React 버전과 같은 CSS 적용 순서
// 1) index.html 에서 CDN 으로 불러오던 bootstrap 4.6.2
// 2) src/App.css
// 3) src/index.js 에서 import 하던 bootstrap 5
import "bootstrap4/dist/css/bootstrap.min.css";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <body>
        <StyledComponentsRegistry>
          {/* 기존 #root > .App 구조. react-modal 이 aria-hidden 처리하는 영역 */}
          <div id="app-root" className="App">
            {children}
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
