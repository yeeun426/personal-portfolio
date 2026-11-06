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
}

export const careers: ExperienceItem[] = [
  {
    period: "2025.12 ~ 현재",
    company: "월급날",
    description: "프론트엔드 개발자",
    techStack: ["React", "Next.js", "TypeScript"],
    tasks: ["주요 업무내역 (업데이트중)"],
    tag: "#Career",
  },
  {
    period: "2023.09 ~ 2023.12",
    company: "테크랩스",
    description: "프론트엔드 인턴",
    techStack: ["React", "JavaScript"],
    tasks: [
      "온보딩 과제 프로젝트 : 신규 직원이 빠르게 적응할 수 있도록 설계된 초기 과제 수행",
      "웹 페이지 리뉴얼 : 고객이 공감할 수 있는 신뢰 기반 추천 서비스를 구현하기 위해 PERSONA 페이지 개편 참여",
      "카페24 데모 사이트 구축 : B2B 세일즈용 큐봇(대화형 큐레이션 봇) 시연을 위한 데모 사이트 개발",
    ],
    tag: "#Career",
  },
];
