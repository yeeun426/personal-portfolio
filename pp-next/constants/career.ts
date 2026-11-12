/** 경력/활동 항목 하나에 들어가는 정보 */
export interface ExperienceItem {
  period: string;
  /** 회사/단체 이름 */
  company: string;
  /** 역할 */
  description: string;
  techStack?: string[];
  tasks: string[];
  /** 분류 태그 (#Club 등) */
  tag: string;
  /** 상세 팝업으로 연결할 프로젝트 id (data/project.json) */
  projectId?: number;
  /** 경력기술서 팝업 slug (constants/careerDetail.ts) — 있으면 projectId 대신 이쪽으로 연결 */
  careerSlug?: string;
}

export const careers: ExperienceItem[] = [
  {
    period: "2025.12 ~ 현재",
    company: "월급날",
    description: "프론트엔드 개발자",
    techStack: ["React", "TanStack Query", "Monorepo", "Java"],
    tasks: [
      "프론트엔드 전면 리뉴얼 : 3개 레포를 모노레포로 통합하고 레거시 코드 파일 419개를 도메인 단위 구조로 전부 이전",
      "디자인 시스템 · 에러 처리 : 12일 만에 공용 컴포넌트 21개 구축(인라인 style -93%), 에러 경계 0건 → 3단 구조 도입",
      "HTMS 세무 시스템 : 레거시 Java 시스템에서 근로소득 간이지급명세서 월별 전환 (실데이터 검증 오류 0건)",
    ],
    tag: "#Career",
    careerSlug: "payday",
  },
  {
    period: "2023.09 ~ 2023.12",
    company: "테크랩스",
    description: "AI 개발실 · 프론트엔드 인턴",
    techStack: ["React", "TypeScript", "Redux Toolkit"],
    tasks: [
      "온보딩 과제 프로젝트 : 신규 직원이 빠르게 적응할 수 있도록 설계된 초기 과제 수행",
      "웹 페이지 리뉴얼 : 고객이 공감할 수 있는 신뢰 기반 추천 서비스를 구현하기 위해 PERSONA 페이지 개편 참여",
      "카페24 데모 사이트 구축 : B2B 세일즈용 큐봇(대화형 큐레이션 봇) 시연을 위한 데모 사이트 개발",
    ],
    tag: "#Career",
    projectId: 13,
  },
];
