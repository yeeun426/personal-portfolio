import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';

/** /robots.txt — 전체 허용 + sitemap 위치 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
