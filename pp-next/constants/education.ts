export interface EducationItem {
  period: string;
  name: string;
  description: string;
  details: string[];
}

export const educations: EducationItem[] = [
  {
    period: "2025.01.20 ~ 2025.08.12",
    name: "[LG유플러스] 유레카 SW 교육",
    description: "2기 프론트엔드 개발자 과정 수료",
    details: [
      "JavaScript, React, Spring 기반 웹 애플리케이션 개발 역량 습득",
      "알고리즘 문제 해결 및 데이터 구조 학습 (Java 활용)",
      "협업 프로젝트 총 4건",
    ],
  },
  {
    period: "2019.03 ~ 2024.02",
    name: "한국외국어대학교 글로벌캠퍼스",
    description: "정보통신공학과 · 통계학과 졸업 (이중전공)",
    details: [
      "학점 3.7 / 4.5",
      "운영체제 조교 활동 (과제 평가 및 학생 지도)",
      "확률과 통계 조교 활동 (과제 평가 및 학생 지도)",
    ],
  },
];

/** 자격증 */
export const certifications: string[] = [
  "정보처리기사",
  "SQLD",
  "컴퓨터활용능력 1급",
  "OPIc IM2",
];
