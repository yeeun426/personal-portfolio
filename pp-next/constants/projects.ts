import projectJson from '@/data/project.json';
import pageJson from '@/data/page.json';
import type {
  Project,
  ProjectPageImage,
  ProjectPages,
  ProjectSummary,
} from '@/types/project';

// ⚠️ 서버 컴포넌트(app/**/page.tsx)에서만 import 할 것.
// 클라이언트 컴포넌트에서 import 하면 json 전체가 브라우저 번들에 포함됨.

const projects = projectJson as Project[];
const pages = pageJson as ProjectPages[];

export const getProjectIds = () => projects.map((p) => p.id);

/** 프로젝트 목록 카드에 필요한 값만 */
export const getProjectSummaries = (): ProjectSummary[] =>
  projects.map(({ id, date, name, detail, img, team }) => ({
    id,
    date,
    name,
    detail,
    img,
    team,
  }));

export const getProject = (id: number) => projects.find((p) => p.id === id);

/** 프로젝트 상세 화면 이미지 목록 (page1, page2, ... 순서) */
export const getProjectPageImages = (id: number): ProjectPageImage[] => {
  const found = pages.find((p) => p.id === id);
  if (!found) return [];
  return Object.values(found).filter(
    (v): v is ProjectPageImage => typeof v === 'object'
  );
};
