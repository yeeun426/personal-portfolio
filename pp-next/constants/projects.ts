import projectJson from '@/data/project.json';
import pageJson from '@/data/page.json';
import type { Project, ProjectPageImage, ProjectPages } from '@/types/project';

export const projects = projectJson as Project[];

const pages = pageJson as ProjectPages[];

export const getProject = (id: number) => projects.find((p) => p.id === id);

/** 프로젝트 상세 화면 이미지 목록 (page1, page2, ... 순서) */
export const getProjectPageImages = (id: number): ProjectPageImage[] => {
  const found = pages.find((p) => p.id === id);
  if (!found) return [];
  return Object.values(found).filter(
    (v): v is ProjectPageImage => typeof v === 'object'
  );
};
