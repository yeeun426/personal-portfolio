import type { ExperienceItem } from "./career";

/** 활동 (최근 순) */
export const activities: ExperienceItem[] = [
  {
    period: "2025.07 ~ 2026.08",
    company: "렛츠커리어",
    description: "프론트엔드 개발 (사이드 프로젝트 참여)",
    techStack: ["Next.js", "TypeScript", "Zustand"],
    tasks: [
      "Next.js를 활용한 코드 개선 및 SEO 강화",
      "프로덕트 런칭 이후 발생한 긴급 이슈 대응",
      "운영팀과 협업하여 백오피스 시스템 개선",
    ],
    tag: "#Side Project",
    projectId: 14,
  },
  {
    period: "2023.04 ~ 2023.07",
    company: "고용노동 공공데이터 활용 공모전",
    description: "프론트엔드 개발",
    tasks: ["산재 보상 정보 플랫폼 NDGD 프론트엔드 개발"],
    tag: "#Contest",
    projectId: 7,
  },
  {
    period: "2022.10",
    company: "2022 관광데이터 활용 공모전",
    description: "우수상 수상",
    tasks: ["미디어 촬영지 기반 여행 서비스 MAPLIX 프론트엔드 개발"],
    tag: "#Award",
    projectId: 3,
  },
  {
    period: "2022.09 ~ 2023.06",
    company: "중앙동아리 gnuvil",
    description: "웹 개발팀 (프론트엔드)",
    techStack: ["React", "JavaScript"],
    tasks: [
      "동아리 웹사이트(GNUVILAGE) 전체 퍼블리싱 주도",
      "메인·동아리 소개·히스토리·활동 사진·스터디 페이지 개발",
    ],
    tag: "#Club",
  },
  {
    period: "2022.04 ~ 2023.01",
    company: "HUFS SW 봉사단",
    description: "봉사단 활동",
    tasks: [],
    tag: "#Volunteer",
  },
];
