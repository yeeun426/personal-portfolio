export interface ProjectQnA {
  id: string;
  question: string;
  answer: string;
}

export interface Project {
  id: number;
  date: string;
  name: string;
  detail: string;
  img: string;
  icon?: string;
  video?: string;
  youtube?: string;
  team: boolean;
  skills?: {
    skill?: string;
    organization?: string;
    detail?: string;
    github?: string;
    video?: string;
    roles?: string[];
  };
  QnA?: ProjectQnA[];
}

export interface ProjectPageImage {
  num: string;
  img: string;
  desc: string;
}

/** data/page.json 한 항목: { id, page1: {...}, page2: {...}, ... } */
export type ProjectPages = { id: number } & Record<string, ProjectPageImage | number>;

/** json에 저장된 상대 경로(images/...)를 public 기준 절대 경로로 변환 */
export const toPublicPath = (path?: string) =>
  !path ? '' : path.startsWith('/') || path.startsWith('http') ? path : `/${path}`;
