# 이예은 포트폴리오

프론트엔드 개발자 이예은의 포트폴리오 사이트입니다.

**https://yeeun426.vercel.app**

## 기술 스택

- Next.js (App Router), React, TypeScript
- Tailwind CSS
- GSAP (스크롤·등장 애니메이션)
- Vercel 배포 (`main` 브랜치에 푸시하면 자동 배포)

## 폴더 구조

```
pp-next/
├─ app/                  # 페이지와 라우트
│  ├─ page.tsx           # 메인 (About · Career · Activity · Education · Project)
│  ├─ project/[id]/      # 프로젝트 상세 (주소로 직접 들어왔을 때)
│  └─ @modal/            # 메인에서 프로젝트를 누르면 뜨는 상세 팝업
├─ components/           # 화면 컴포넌트
├─ constants/            # 경력·활동·교육 등 화면에 들어가는 내용
├─ data/                 # 프로젝트 정보 (project.json, page.json)
└─ public/               # 이미지·영상
```

## 내용 수정

| 바꿀 내용 | 파일 |
|---|---|
| 경력 | `pp-next/constants/career.ts` |
| 활동 | `pp-next/constants/activity.ts` |
| 교육 | `pp-next/constants/education.ts` |
| 스킬 | `pp-next/components/main/MainEducation.tsx` |
| 프로젝트 (설명, My Role, Q&A) | `pp-next/data/project.json` |
| 프로젝트 화면 이미지 | `pp-next/data/page.json` |

## 로컬 실행

```bash
cd pp-next
npm install
npm run dev
```
