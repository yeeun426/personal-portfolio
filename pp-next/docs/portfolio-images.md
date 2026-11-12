# 포트폴리오 이미지 교체 목록

PDF 포트폴리오(`test.pdf`) 기준으로 사이트에 넣어야 할 이미지 목록입니다.
2026-11-12 기준 22개 모두 교체 완료했습니다. 남은 임시 이미지는 없습니다.

- 위치: `pp-next/public/images/portfolio/` 아래 (표의 경로 기준)
- 형식: `.webp` — 같은 파일명으로 덮어쓰면 바로 반영됩니다.
- 비율: 약 16:9 (1709×944) 기준이지만, 다른 비율도 잘리지 않고 그대로 표시됩니다.
- PDF 페이지 = PDF 뷰어의 쪽 번호

## 교체 방법

PNG/JPG 원본을 WebP로 변환해 같은 경로에 덮어씁니다.

```bash
npx sharp-cli -i 원본.png -o pp-next/public/images/portfolio/popco/popco-ws-diagram.webp -f webp -q 82
```

교체가 끝난 항목은 이 문서에서 지워 주세요.
