export interface ProjectQnA {
  id: string;
  question: string;
  answer: string;
}

/** 트러블슈팅 카드 한 장 (PDF 포트폴리오 구성) */
export interface Troubleshooting {
  /** 왼쪽: 기능 이름과 한 줄 설명 */
  feature: string;
  featureDesc?: string;
  /** 왼쪽: 이 기능에서 한 일 */
  actions?: string[];
  /** 왼쪽 아래 이미지 (label: UI / Flow / Table 등) */
  image?: { src: string; label?: string };
  /** 오른쪽: 형광펜 제목 */
  title: string;
  /** 오른쪽 ① ② ③ — 마크다운처럼 작성 (RichText) */
  why: string;
  how: string;
  /** HOW 아래 다이어그램 이미지 */
  diagram?: string;
  result: string;
  /** 세 번째 단계 이름 (기본 RESULT) */
  resultLabel?: string;
  /** 카드 맨 아래 덧붙임 (블로그 링크 등) */
  note?: string;
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
  /** '형태' 줄에 보여줄 구성 설명 (없으면 팀/개인 프로젝트) */
  teamInfo?: string;
  /** 클론코딩 프로젝트 (목록에서 따로 모아 보여줌) */
  clone?: boolean;
  /** Project 목록에서 숨김 (Career/Activity 의 "자세히 보기"로만 열리는 상세) */
  hideFromList?: boolean;
  skills?: {
    skill?: string;
    organization?: string;
    detail?: string;
    github?: string;
    video?: string;
    roles?: string[];
  };
  QnA?: ProjectQnA[];
  troubleshooting?: Troubleshooting[];
}

export type ProjectSummary = Pick<
  Project,
  'id' | 'date' | 'name' | 'detail' | 'img' | 'team' | 'clone'
> & {
  /** 사용 기술 (skills.skill 을 나눈 것) */
  stack: string[];
};

export interface ProjectPageImage {
  num: string;
  img: string;
  /** 이미지 설명 (title 이 있으면 캡션으로도 표시) */
  desc: string;
  /** 화면 이름. 있으면 이미지 아래에 캡션으로 표시 */
  title?: string;
}

/** data/page.json 한 항목: { id, page1: {...}, page2: {...}, ... } */
export type ProjectPages = { id: number } & Record<string, ProjectPageImage | number>;

/** json에 저장된 상대 경로(images/...)를 public 기준 절대 경로로 변환 */
export const toPublicPath = (path?: string) =>
  !path ? '' : path.startsWith('/') || path.startsWith('http') ? path : `/${path}`;
