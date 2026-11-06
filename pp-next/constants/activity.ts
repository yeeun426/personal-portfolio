import type { ExperienceItem } from "./career";

// TODO: 동아리/봉사 항목은 테스트 값. 실제 내용으로 바꿀 것
export const activities: ExperienceItem[] = [
  {
    period: "2025.08 ~ 2026.08",
    company: "렛츠커리어",
    description: "프론트엔드 개발 (사이드 프로젝트 참여)",
    techStack: ["React", "Next.js", "TypeScript"],
    tasks: [
      "Next.js를 활용한 코드 개선 및 SEO 강화",
      "프로덕트 런칭 이후 발생한 긴급 이슈 대응",
      "운영팀과 협업하여 백오피스 시스템 개선",
    ],
    tag: "#Side Project",
  },
  {
    period: "2020.03 ~ 2021.02",
    company: "(테스트) 개발 동아리",
    description: "(테스트) 프론트엔드 파트",
    techStack: ["HTML/CSS", "JavaScript"],
    tasks: ["(테스트) 활동 내용 1", "(테스트) 활동 내용 2"],
    tag: "#Club",
  },
  {
    period: "2019.07 ~ 2019.12",
    company: "(테스트) 봉사 활동",
    description: "(테스트) 역할",
    tasks: ["(테스트) 활동 내용 1", "(테스트) 활동 내용 2"],
    tag: "#Volunteer",
  },
];
