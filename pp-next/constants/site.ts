/**
 * 사이트 절대 주소 (sitemap / robots 용).
 * 1. 환경 변수 SITE_URL (직접 연결한 도메인)
 * 2. Vercel 이 빌드 때 넣어주는 프로덕션 주소
 * 3. 로컬 개발
 */
export const SITE_URL =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000');
