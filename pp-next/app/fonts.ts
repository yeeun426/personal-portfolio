import localFont from "next/font/local";
import { Noto_Sans_KR } from "next/font/google";

// 기존 App.css 의 @font-face / @import 를 next/font 로 대체
// (빌드 시 폰트를 자체 호스팅해서 외부 CSS 요청 없이 로드됨)

/**
 * Pretendard 가변 폰트 (굵기 45~920 을 파일 하나로).
 * 기존에는 Regular 한 굵기만 있어서 font-bold 등이 보통 굵기로 보였음.
 * 라이선스: fonts/Pretendard-LICENSE.txt (SIL OFL 1.1)
 */
export const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  weight: "45 920",
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
