import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

// 기존 App.css 의 @font-face / @import 를 next/font 로 대체
// (빌드 시 폰트를 자체 호스팅해서 외부 CSS 요청 없이 로드됨)

/** 기존 jsdelivr Pretendard-Regular.woff 와 같은 파일 */
export const pretendard = localFont({
  src: "./fonts/Pretendard-Regular.woff",
  weight: "500",
  style: "normal",
  variable: "--font-pretendard",
  adjustFontFallback: false,
});

export const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
  adjustFontFallback: false,
  preload: false, // 한글 폰트는 용량이 커서 미리 로드하지 않음
});
