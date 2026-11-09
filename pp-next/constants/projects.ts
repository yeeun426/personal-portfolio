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

// project.json 의 기술 이름 표기를 통일 (REACT → React 등)
const STACK_NAMES: Record<string, string> = {
  REACT: 'React',
  JAVASCRIPT: 'JavaScript',
  RECOIL: 'Recoil',
  'SOCKET.IO': 'Socket.IO',
  TS: 'TypeScript',
};
const formatStack = (name: string) => STACK_NAMES[name.toUpperCase()] ?? name;
const pages = pageJson as ProjectPages[];

export const getProjectIds = () => projects.map((p) => p.id);

/** 프로젝트 목록 카드에 필요한 값만 (hideFromList 제외) */
export const getProjectSummaries = (): ProjectSummary[] =>
  projects.filter((p) => !p.hideFromList).map(({ id, date, name, detail, img, team, clone, skills }) => ({
    id,
    date,
    name,
    detail,
    img,
    team,
    clone,
    stack: (skills?.skill ?? '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .map(formatStack),
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
