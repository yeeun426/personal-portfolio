# 포트폴리오 이미지 교체 목록

PDF 포트폴리오(`test.pdf`) 기준으로 사이트에 넣어야 할 이미지 목록입니다.
아래 22개는 현재 **연보라 임시 이미지**(○○ 이미지 준비 중)가 들어가 있습니다.

- 위치: `pp-next/public/images/portfolio/` 아래 (표의 경로 기준)
- 형식: `.webp` — 같은 파일명으로 덮어쓰면 바로 반영됩니다.
- 비율: 약 16:9 (1709×944) 기준이지만, 다른 비율도 잘리지 않고 그대로 표시됩니다.
- PDF 페이지 = PDF 뷰어의 쪽 번호

## 1. 테크랩스 (PDF 4~6쪽)

| 파일 | PDF | 가져올 이미지 | 사이트 위치 |
|---|---|---|---|
| `techlabs/techlabs.webp` | 4쪽 | 오른쪽 대표 화면 목업 | 대표 이미지 |
| `techlabs/techlabs-onboarding.webp` | 5쪽 | 온보딩 과제 UI 화면 | 트러블슈팅 #01 UI · Screens |
| `techlabs/techlabs-proxy-flow.webp` | 5쪽 | Vite 프록시 요청 흐름도 | 트러블슈팅 #01 HOW |
| `techlabs/techlabs-persona.webp` | 6쪽 | PERSONA 페이지 UI 화면 | 트러블슈팅 #02 UI · Screens |
| `techlabs/techlabs-state-diagram.webp` | 6쪽 | TanStack Query + Redux 상태 구조도 | 트러블슈팅 #02 HOW |

## 2. 렛츠커리어 (PDF 7~9쪽)

| 파일 | PDF | 가져올 이미지 | 사이트 위치 |
|---|---|---|---|
| `letscareer/letscareer.webp` | 7쪽 | 대표 화면 목업 | 대표 이미지 |
| `letscareer/letscareer-dashboard.webp` | 8쪽 | 챌린지 대시보드 UI (PC & Mobile) | 트러블슈팅 #01 UI · Screens |
| `letscareer/letscareer-calendar-flow.webp` | 8쪽 | 캘린더 클릭 → 상세 연결 순서도 | 트러블슈팅 #01 HOW |
| `letscareer/letscareer-error.webp` | 9쪽 | 리다이렉트 루프 에러 화면 | 트러블슈팅 #02 Error message |
| `letscareer/letscareer-redirect-diagram.webp` | 9쪽 | hydration Before / After 그림 | 트러블슈팅 #02 HOW |

## 3. POPCO (PDF 11~13쪽)

| 파일 | PDF | 가져올 이미지 | 사이트 위치 |
|---|---|---|---|
| `popco/popco-event.webp` | 11쪽 (13쪽) | 실시간 퀴즈 이벤트 페이지 UI | 트러블슈팅 #01 UI · Screens |
| `popco/popco-ws-diagram.webp` | 11쪽 | WebSocket Before / After 그림 | 트러블슈팅 #01 HOW |
| `popco/popco-sse-flow.webp` | 12쪽 | 실시간 알림 SSE Flow | 트러블슈팅 #02 Flow |
| `popco/popco-landing.webp` | 13쪽 | 랜딩 페이지 화면 | Screens |
| `popco/popco-main.webp` | 13쪽 | 메인 페이지 화면 | Screens |

## 4. U+Pick (PDF 15~16쪽)

| 파일 | PDF | 가져올 이미지 | 사이트 위치 |
|---|---|---|---|
| `u+pick/upick-function-calling.webp` | 15쪽 | Function Calling 흐름도 | 트러블슈팅 HOW |
| `u+pick/upick-apply.webp` | 16쪽 | 결합 신청 페이지 화면 | Screens |
| `u+pick/upick-toss.webp` | 16쪽 | TOSS 결제 화면 | Screens |
| `u+pick/upick-paid.webp` | 16쪽 | 결제 완료 화면 | Screens |

> 챗봇 UI는 기존 사이트 이미지를 그대로 사용 중이라 목록에서 제외했습니다.

## 5. MAPLIX (PDF 18~19쪽)

| 파일 | PDF | 가져올 이미지 | 사이트 위치 |
|---|---|---|---|
| `maplix/maplix-render-table.webp` | 18쪽 | 렌더링 개선 Table (Notion 표 캡처) | 트러블슈팅 Table |
| `maplix/maplix-lighthouse.webp` | 18쪽 | Lighthouse 점수 전후 비교 | 트러블슈팅 HOW |
| `maplix/maplix-course.webp` | 19쪽 | 추천 코스 페이지 화면 | Screens |

## 교체 방법

PNG/JPG 원본을 WebP로 변환해 같은 경로에 덮어씁니다.

```bash
npx sharp-cli -i 원본.png -o pp-next/public/images/portfolio/popco/popco-ws-diagram.webp -f webp -q 82
```

교체가 끝난 항목은 이 문서에서 지워 주세요.
