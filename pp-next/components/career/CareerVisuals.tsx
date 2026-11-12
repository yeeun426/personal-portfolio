'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * 경력기술서 시각 자료 — 차트 1개 + 구조 다이어그램 3개
 * 숫자는 Obsidian `01_Payday/리뉴얼-성과-지표.md` 스냅샷 값 그대로.
 */

export type CareerVisualKey = 'legacy-chart' | 'monorepo' | 'folders' | 'iframe';

export function CareerVisual({ name }: { name: CareerVisualKey }) {
  switch (name) {
    case 'legacy-chart':
      return <LegacyChart />;
    case 'monorepo':
      return <MonorepoDiagram />;
    case 'folders':
      return <FolderDiagram />;
    case 'iframe':
      return <IframeDiagram />;
  }
}

const ACCENT = '#7c5cc4';
const INK = '#1d1d1f';
const MUTED = '#86868b';
const GRID = '#ececf0';

/* ───────────────────────── 레거시 감소 차트 ───────────────────────── */

const LEGACY = [
  { date: '2026-06-09', label: '6.9', files: 419, lines: 77802, note: '리뉴얼 시작' },
  { date: '2026-08-03', label: '8.3', files: 141, lines: 25984 },
  { date: '2026-08-21', label: '8.21', files: 79, lines: 10184 },
  { date: '2026-08-28', label: '8.28', files: 53, lines: 7177 },
  { date: '2026-09-21', label: '9.21', files: 33, lines: 5241 },
  { date: '2026-10-01', label: '10.1', files: 24, lines: 4607 },
  { date: '2026-10-08', label: '10.8', files: 0, lines: 0, note: '레거시 0 도달' },
];

const H = 260;
const PAD = { top: 28, right: 20, bottom: 34, left: 40 };
const Y_MAX = 450;
const Y_TICKS = [0, 100, 200, 300, 400];
const day = (d: string) => new Date(d).getTime() / 86_400_000;
const D0 = day(LEGACY[0].date);
const D1 = day(LEGACY[LEGACY.length - 1].date);
const y = (v: number) => PAD.top + (1 - v / Y_MAX) * (H - PAD.top - PAD.bottom);
const fmt = (n: number) => n.toLocaleString('ko-KR');

function LegacyChart() {
  const [active, setActive] = useState<number | null>(null);
  const [showTable, setShowTable] = useState(false);
  // viewBox 를 실제 폭에 맞춰야 모바일에서 글자가 같이 줄어들지 않음
  const [W, setW] = useState(640);
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setW(Math.max(280, Math.round(entry.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const x = (d: string) => PAD.left + ((day(d) - D0) / (D1 - D0)) * (W - PAD.left - PAD.right);
  const narrow = W < 480;

  const pts = LEGACY.map((p) => [x(p.date), y(p.files)] as const);
  const line = pts.map(([px, py], i) => `${i ? 'L' : 'M'}${px},${py}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0]},${y(0)} L${pts[0][0]},${y(0)} Z`;
  // 점 사이 중간 지점까지를 각 점의 hover 영역으로
  const bounds = pts.map(([px], i) => [
    i === 0 ? PAD.left : (pts[i - 1][0] + px) / 2,
    i === pts.length - 1 ? W - PAD.right : (px + pts[i + 1][0]) / 2,
  ]);
  const a = active === null ? null : LEGACY[active];

  return (
    <Figure
      title='레거시 코드 파일 수'
      caption='리뉴얼 시작(2026.06.09)부터 레거시 디렉터리가 사라진 날(2026.10.08)까지의 스냅샷'
    >
      <div ref={boxRef} className='relative'>
        <svg viewBox={`0 0 ${W} ${H}`} width={W} height={H} className='block h-auto w-full' role='img' aria-label='레거시 코드 파일 수가 419개에서 4개월 만에 0개로 줄어든 선 차트'>
          {/* 가로 눈금선 + y축 값 */}
          {Y_TICKS.map((t) => (
            <g key={t}>
              <line x1={PAD.left} x2={W - PAD.right} y1={y(t)} y2={y(t)} stroke={t === 0 ? '#d2d2d7' : GRID} strokeWidth='1' />
              <text x={PAD.left - 10} y={y(t)} dy='0.35em' textAnchor='end' fontSize='11' fill={MUTED}>
                {t}
              </text>
            </g>
          ))}
          {/* x축 날짜 */}
          {LEGACY.map((p, i) => (
            <text
              key={p.date}
              x={pts[i][0]}
              y={H - 12}
              textAnchor={i === 0 ? 'start' : i === LEGACY.length - 1 ? 'end' : 'middle'}
              fontSize='11'
              fill={active === i ? INK : MUTED}
              fontWeight={active === i ? 700 : 400}
            >
              {/* 8월 말 점들이 붙어 있어 겹치는 라벨은 hover 때만 */}
              {(narrow ? [0, 1, 6] : [0, 1, 4, 6]).includes(i) || active === i ? p.label : ''}
            </text>
          ))}

          <path d={area} fill={ACCENT} opacity='0.1' />
          {active !== null && (
            <line x1={pts[active][0]} x2={pts[active][0]} y1={PAD.top - 8} y2={y(0)} stroke='#c7c7cc' strokeWidth='1' strokeDasharray='3 3' />
          )}
          <path d={line} fill='none' stroke={ACCENT} strokeWidth='2' strokeLinejoin='round' strokeLinecap='round' />
          {pts.map(([px, py], i) => (
            <circle key={i} cx={px} cy={py} r={active === i ? 6 : 4} fill={ACCENT} stroke='#fff' strokeWidth='2' />
          ))}

          {/* 시작·끝만 직접 라벨 */}
          <text x={pts[0][0] + 10} y={pts[0][1] - 2} fontSize='13' fontWeight='700' fill={INK}>
            419개
          </text>
          <text x={pts[6][0]} y={pts[6][1] - 14} textAnchor='end' fontSize='13' fontWeight='700' fill={INK}>
            0개
          </text>

          {/* hover 영역 (표시 마크보다 넓게) */}
          {bounds.map(([x0, x1], i) => (
            <rect
              key={i}
              x={x0}
              y={0}
              width={x1 - x0}
              height={H}
              fill='transparent'
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onTouchStart={() => setActive(i)}
            />
          ))}
        </svg>

        {a && active !== null && (
          <div
            className='pointer-events-none absolute z-10 w-max -translate-x-1/2 rounded-[10px] border border-[#e5e5ea] bg-white px-3 py-2 text-left text-[12px] leading-[1.5] shadow-[0_6px_20px_rgba(0,0,0,0.08)]'
            style={{
              left: `${(pts[active][0] / W) * 100}%`,
              top: `${(pts[active][1] / H) * 100}%`,
              transform: `translate(${active === 0 ? '0' : active === LEGACY.length - 1 ? '-100%' : '-50%'}, calc(-100% - 14px))`,
            }}
          >
            <div className='font-semibold text-[#1d1d1f]'>
              {a.date.replaceAll('-', '.')}
              {a.note && <span className='ml-1 font-normal text-[#86868b]'>· {a.note}</span>}
            </div>
            <div className='text-[#424245]'>
              파일 <b className='text-[#1d1d1f]'>{fmt(a.files)}개</b> · {fmt(a.lines)}줄
            </div>
          </div>
        )}
      </div>

      <button
        onClick={() => setShowTable((v) => !v)}
        className='mt-3 text-[13px] text-[#86868b] underline-offset-2 hover:text-[#7c5cc4] hover:underline'
        aria-expanded={showTable}
      >
        {showTable ? '표 닫기' : '표로 보기'}
      </button>
      {showTable && (
        <table className='mt-2 w-full border-collapse text-[13px]'>
          <thead>
            <tr className='border-b border-[#e5e5ea] text-[#86868b]'>
              <th className='py-2 text-left font-medium'>날짜</th>
              <th className='py-2 text-right font-medium'>레거시 파일</th>
              <th className='py-2 text-right font-medium'>레거시 줄 수</th>
            </tr>
          </thead>
          <tbody>
            {LEGACY.map((p) => (
              <tr key={p.date} className='border-b border-[#f0f0f3] text-[#424245]'>
                <td className='py-2'>{p.date.replaceAll('-', '.')}</td>
                <td className='py-2 text-right tabular-nums'>{fmt(p.files)}개</td>
                <td className='py-2 text-right tabular-nums'>{fmt(p.lines)}줄</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Figure>
  );
}

/* ───────────────────────── 다이어그램 공통 ───────────────────────── */

function Figure({ title, caption, children }: { title: string; caption?: string; children: ReactNode }) {
  return (
    <figure className='m-0 rounded-[18px] border border-[#e5e5ea] bg-white p-6 max-[501px]:p-4'>
      <figcaption className='mb-4'>
        <div className='text-[15px] font-bold text-[#1d1d1f]'>{title}</div>
        {caption && <div className='mt-1 text-[13px] text-[#86868b]'>{caption}</div>}
      </figcaption>
      {children}
    </figure>
  );
}

/** Before / After 두 칸 (모바일은 위아래) */
function BeforeAfter({ before, after }: { before: ReactNode; after: ReactNode }) {
  return (
    <div className='grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-4 max-[801px]:grid-cols-1'>
      <Panel tone='before'>{before}</Panel>
      <div className='flex items-center justify-center text-[20px] text-[#c7c7cc] max-[801px]:rotate-90'>→</div>
      <Panel tone='after'>{after}</Panel>
    </div>
  );
}

function Panel({ tone, children }: { tone: 'before' | 'after'; children: ReactNode }) {
  const after = tone === 'after';
  return (
    <div className={`rounded-[14px] p-4 ${after ? 'bg-[#f6f2fe]' : 'bg-[#f5f5f7]'}`}>
      <div className={`mb-3 text-[12px] font-extrabold tracking-[0.08em] uppercase ${after ? 'text-[#7c5cc4]' : 'text-[#86868b]'}`}>
        {after ? 'After' : 'Before'}
      </div>
      {children}
    </div>
  );
}

function Box({ children, accent = false, dashed = false, className = '' }: { children: ReactNode; accent?: boolean; dashed?: boolean; className?: string }) {
  return (
    <div
      className={`rounded-[10px] border bg-white px-3 py-2 text-center text-[13px] leading-[1.45] text-[#1d1d1f] ${
        accent ? 'border-[#7c5cc4] font-semibold' : 'border-[#d2d2d7]'
      } ${dashed ? 'border-dashed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

const Note = ({ children }: { children: ReactNode }) => (
  <p className='m-0 mt-3 text-[12px] leading-[1.6] text-[#6e6e73]'>{children}</p>
);

const DownArrow = ({ label }: { label?: string }) => (
  <div className='flex flex-col items-center py-1 text-[#a1a1a6]'>
    <span className='text-[14px] leading-none'>↓</span>
    {label && <span className='mt-1 text-[11px] text-[#86868b]'>{label}</span>}
  </div>
);

const APPS = ['담당자 앱', '근로자 앱', '어드민'];

/* ───────────────────────── 모노레포 ───────────────────────── */

function MonorepoDiagram() {
  return (
    <Figure title='레포지토리 구조' caption='3개 앱이 각자 복사해 쓰던 코드를 공용 패키지로 모음'>
      <BeforeAfter
        before={
          <div className='grid grid-cols-3 gap-2'>
            {APPS.map((app) => (
              <div key={app} className='flex flex-col gap-1 rounded-[10px] border border-[#d2d2d7] bg-white p-2'>
                <div className='text-center text-[12px] font-semibold text-[#1d1d1f]'>{app}</div>
                <div className='text-center text-[10px] text-[#86868b]'>별도 레포</div>
                {['UI', '서식', 'API'].map((t) => (
                  <div key={t} className='rounded-[6px] bg-[#f5f5f7] py-[3px] text-center text-[11px] text-[#6e6e73]'>
                    {t} 복사본
                  </div>
                ))}
              </div>
            ))}
          </div>
        }
        after={
          <div>
            <div className='rounded-[12px] border border-dashed border-[#c8acfa] p-2'>
              <div className='mb-2 text-center text-[11px] font-semibold text-[#7c5cc4]'>모노레포 1개</div>
              <div className='grid grid-cols-3 gap-2'>
                {APPS.map((app) => (
                  <Box key={app} className='px-1'>{app}</Box>
                ))}
              </div>
              <DownArrow label='함께 import' />
              <Box accent>
                공용 패키지
                <div className='mt-1 text-[11px] font-normal text-[#6e6e73]'>ui · assets · receipt · contract · paystub · styles</div>
              </Box>
            </div>
          </div>
        }
      />
      <Note>레포 3개 → 1개 · 공용 패키지 참조 0 → 411건</Note>
    </Figure>
  );
}

/* ───────────────────────── 폴더 구조 ───────────────────────── */

const Tree = ({ items, accent = false }: { items: [string, string?][]; accent?: boolean }) => (
  <ul className='m-0 flex list-none flex-col gap-[6px] p-0'>
    {items.map(([dir, desc]) => (
      <li key={dir} className='flex items-baseline gap-2 text-[13px]'>
        <code className={`rounded-[6px] bg-white px-2 py-[2px] text-[12px] [font-family:ui-monospace,SFMono-Regular,Menlo,monospace] ${accent ? 'text-[#7c5cc4]' : 'text-[#424245]'}`}>
          {dir}
        </code>
        {desc && <span className='text-[12px] text-[#86868b]'>{desc}</span>}
      </li>
    ))}
  </ul>
);

function FolderDiagram() {
  return (
    <Figure title='앱 내부 폴더 구조' caption='화면 종류별로 흩어져 있던 코드를 도메인(업무) 단위로 재편'>
      <BeforeAfter
        before={
          <Tree
            items={[
              ['Component/'],
              ['View/'],
              ['Features/'],
              ['Common/'],
              ['Css/ · styled/'],
              ['context/ · Store/'],
            ]}
          />
        }
        after={
          <Tree
            accent
            items={[
              ['app/', '라우터 · 앱 설정'],
              ['domains/payroll/', '급여명세서'],
              ['domains/receipt/', '영수증'],
              ['domains/…', '업무 단위로 추가'],
              ['shared/', '비즈니스를 모르는 공용 코드'],
            ]}
          />
        }
      />
      <Note>레이어 경계는 ESLint 규칙으로 강제해, 도메인 코드가 다시 섞이지 않게 했습니다.</Note>
    </Figure>
  );
}

/* ───────────────────────── iframe 제거 ───────────────────────── */

function IframeDiagram() {
  return (
    <Figure title='급여명세서 렌더링 흐름' caption='iframe으로 다른 앱을 띄우던 구조를 패키지 함수 호출로 교체'>
      <BeforeAfter
        before={
          <div className='flex flex-col'>
            <Box>담당자 앱</Box>
            <DownArrow label='iframe · 세션을 URL로 전달 · postMessage 7종' />
            <Box>근로자 앱 화면</Box>
            <DownArrow label='PDF를 base64로 회수 · 건당 최대 10초 대기' />
            <Box dashed>명세서 · PDF</Box>
          </div>
        }
        after={
          <div className='flex flex-col'>
            <Box>담당자 앱</Box>
            <DownArrow label='props · 콜백으로 직접 호출' />
            <Box accent>
              명세서 패키지
              <div className='mt-1 text-[11px] font-normal text-[#6e6e73]'>조회 · 라우터 · 스토어를 모르는 순수 컴포넌트</div>
            </Box>
            <DownArrow />
            <Box>명세서 · PDF</Box>
          </div>
        }
      />
    </Figure>
  );
}
