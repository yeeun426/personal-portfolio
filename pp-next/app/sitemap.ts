import type { MetadataRoute } from 'next';
import { getProjectIds } from '@/constants/projects';
import { SITE_URL } from '@/constants/site';

/** /sitemap.xml — 메인과 프로젝트 상세 페이지 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: 'monthly', priority: 1 },
    ...getProjectIds().map((id) => ({
      url: `${SITE_URL}/project/${id}`,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
