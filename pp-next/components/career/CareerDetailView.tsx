import Image from 'next/image';
import type { CareerDetail, CareerGroup, CareerProject, CareerShot } from '@/constants/careerDetail';
import { toPublicPath } from '@/types/project';
import RichText from '@/components/portfolio/RichText';
import { CareerVisual } from './CareerVisuals';

// 프로젝트 상세(Portfolio)와 같은 여백·소제목 규칙
const container = 'mx-auto box-border w-full max-w-[1000px] px-12 max-[801px]:px-6';
const heading = 'm-0 mb-6 text-[13px] font-bold tracking-[0.08em] text-[#9778c9] uppercase';

/** 배열 → RichText 목록 ("- " 줄) */
const toList = (items: string[]) => items.map((t) => `- ${t}`).join('\n');

/** 경력기술서 (모달 / 단독 페이지 공통) */
export default function CareerDetailView({ detail }: { detail: CareerDetail }) {
  return (
    <article className='bg-white pb-20 text-left break-keep text-[#1d1d1f]'>
      {/* 헤더 */}
      <header className={`${container} pt-16 pb-10 max-[801px]:pt-14`}>
        <div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-[#6e6e73]'>
          <span className='rounded-[999px] bg-[#f3edfe] px-3 py-[3px] text-[13px] font-semibold text-[#7c5cc4]'>
            경력기술서
          </span>
          {detail.period}
          {detail.current && (
            <span className='rounded-[20px] bg-[#c8acfa] px-[10px] py-[2px] text-[12px] font-bold text-white'>
              재직중
            </span>
          )}
        </div>
        <h2 className='m-0 mt-4 text-[44px] leading-[1.2] font-extrabold tracking-[-0.02em] max-[501px]:text-[34px]'>
          {detail.company}
        </h2>
        <p className='m-0 mt-2 text-[19px] text-[#424245]'>{detail.role}</p>
      </header>

      {/* 개요: 회사 소개·담당 영역 + 정보 */}
      <section className={`${container} mt-10`}>
        <h3 className={heading}>Overview</h3>
        <div className='grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 max-[801px]:grid-cols-1 max-[801px]:gap-10'>
          <div className='flex flex-col gap-5'>
            <RichText text={detail.intro} className='text-[17px] leading-[1.8] text-[#424245]' />
            <RichText text={toList(detail.scope)} className='text-[16px] leading-[1.75] text-[#424245]' />
          </div>
          <dl className='m-0 border-t border-[#1d1d1f]'>
            <InfoRow label='기간'>{detail.period}</InfoRow>
            {detail.department && <InfoRow label='소속'>{detail.department}</InfoRow>}
            <InfoRow label='직무'>
              {detail.role}
              {detail.position && <span className='text-[#86868b]'> · {detail.position}</span>}
            </InfoRow>
            <InfoRow label='기술'>
              <div className='flex flex-col gap-3'>
                {detail.techStack.map(({ label, items }) => (
                  <div key={label}>
                    <div className='mb-[6px] text-[12px] font-semibold text-[#86868b]'>{label}</div>
                    <ul className='m-0 flex list-none flex-wrap gap-[6px] p-0'>
                      {items.map((tech) => (
                        <li key={tech} className='rounded-[8px] bg-[#f5f5f7] px-[10px] py-[3px] text-[13px]'>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </InfoRow>
          </dl>
        </div>
      </section>

      {/* 핵심 성과 숫자 */}
      <section className={`${container} mt-20`}>
        <h3 className={heading}>Highlights</h3>
        <ul className='m-0 grid list-none grid-cols-3 gap-4 p-0 max-[801px]:grid-cols-1'>
          {detail.highlights.map(({ value, label }) => (
            <li key={label} className='rounded-[18px] bg-[#f5f5f7] px-6 py-6'>
              <div className='text-[32px] leading-[1.2] font-extrabold tracking-[-0.02em] text-[#7c5cc4] tabular-nums'>
                {value}
              </div>
              <p className='m-0 mt-2 text-[14px] leading-[1.6] text-[#6e6e73]'>{label}</p>
            </li>
          ))}
        </ul>
        {detail.highlightVisual && (
          <div className='mt-4'>
            <CareerVisual name={detail.highlightVisual} />
          </div>
        )}
      </section>

      {/* 제품별 프로젝트 */}
      <section className={`${container} mt-20`}>
        <h3 className={heading}>Projects</h3>
        <div className='flex flex-col gap-24 max-[801px]:gap-16'>
          {detail.groups.map((group) => (
            <GroupBlock key={group.product} group={group} />
          ))}
        </div>
      </section>
    </article>
  );
}

function InfoRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className='grid grid-cols-[64px_minmax(0,1fr)] items-start gap-4 border-b border-[#e5e5ea] py-4'>
      <dt className='text-[14px] text-[#86868b]'>{label}</dt>
      <dd className='m-0 text-[15px] leading-[1.6]'>{children}</dd>
    </div>
  );
}

/** 제품 하나 — 제목(제품 · 역할 · 기간 · 소개) → 프로젝트 목록 → 그 외 업무 */
function GroupBlock({ group }: { group: CareerGroup }) {
  return (
    <div>
      <header className='rounded-[18px] bg-[#f5f5f7] px-7 py-6 max-[501px]:px-5'>
        <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
          <h4 className='m-0 text-[26px] leading-[1.3] font-extrabold tracking-[-0.01em] text-[#1d1d1f]'>
            {group.product}
          </h4>
          <span className='text-[16px] font-semibold text-[#7c5cc4]'>{group.role}</span>
          <span className='text-[14px] text-[#86868b] tabular-nums min-[502px]:ml-auto'>{group.period}</span>
        </div>
        <p className='m-0 mt-2 text-[15px] leading-[1.7] text-[#424245]'>{group.intro}</p>
        <p className='m-0 mt-3 flex flex-wrap items-baseline gap-x-2 text-[14px] leading-[1.6] text-[#424245]'>
          <span className='shrink-0 text-[12px] font-bold tracking-[0.04em] text-[#86868b]'>팀 구성</span>
          <span>{group.team}</span>
        </p>
      </header>

      <ol className='m-0 mt-6 flex list-none flex-col border-t-2 border-[#1d1d1f] p-0'>
        {group.projects.map((project, i) => (
          <ProjectBlock key={project.title} project={project} index={i + 1} />
        ))}
      </ol>

      {!!group.etc?.length && (
        <div className='mt-12'>
          <h5 className='m-0 mb-4 text-[16px] font-bold text-[#1d1d1f]'>그 외 업무</h5>
          <RichText text={toList(group.etc)} className='text-[16px] leading-[1.75] text-[#424245]' />
          {!!group.etcShots?.length && (
            <div className='mt-8 grid'>
              <Shots shots={group.etcShots} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** 프로젝트 하나 — 왼쪽 제목·기간·요약 / 오른쪽 배경 → 한 일 → 성과 */
function ProjectBlock({ project, index }: { project: CareerProject; index: number }) {
  const rows: [string, string[], string][] = [
    ['배경', project.background, 'text-[#6e6e73]'],
    ['한 일', project.actions, 'text-[#1d1d1f]'],
    ['성과', project.results, 'text-[#7c5cc4]'],
  ];

  return (
    <li className='grid grid-cols-[minmax(0,1fr)_minmax(0,1.9fr)] gap-10 border-b border-[#d2d2d7] py-12 max-[801px]:grid-cols-1 max-[801px]:gap-6 max-[801px]:py-9'>
      <div>
        <span className='text-[14px] font-bold text-[#c8acfa] tabular-nums'>
          {String(index).padStart(2, '0')}
        </span>
        <h4 className='m-0 mt-2 text-[21px] leading-[1.45] font-bold'>{project.title}</h4>
        {project.period && <p className='m-0 mt-2 text-[14px] text-[#86868b]'>{project.period}</p>}
        <p className='m-0 mt-4 text-[15px] leading-[1.7] text-[#424245]'>{project.summary}</p>
        {!!project.stack?.length && (
          <ul className='m-0 mt-4 flex list-none flex-wrap gap-[6px] p-0'>
            {project.stack.map((tech) => (
              <li key={tech} className='rounded-[8px] border border-[#e5e5ea] px-[9px] py-[2px] text-[12px] text-[#6e6e73]'>
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='flex flex-col gap-6'>
        {rows.map(([name, items, tone]) => (
          <div key={name} className='flex flex-col gap-2'>
            <span className={`text-[13px] font-extrabold tracking-[0.04em] ${tone}`}>{name}</span>
            <RichText
              text={toList(items)}
              className={`text-[15px] leading-[1.75] text-[#424245] ${
                name === '성과' ? 'rounded-[12px] bg-[#f3edfe] px-5 py-4 max-[501px]:px-4' : ''
              }`}
            />
          </div>
        ))}
      </div>
      {!!project.visuals?.length && (
        // 다이어그램은 두 칸을 가로질러 넓게
        <div className='col-span-full flex flex-col gap-4'>
          {project.visuals.map((v) => (
            <CareerVisual key={v} name={v} />
          ))}
        </div>
      )}
      {!!project.shots?.length && <Shots shots={project.shots} />}
    </li>
  );
}

/** 실제 화면 캡처 — 2장이면 나란히(모바일은 위아래), 1장이면 넓게 */
function Shots({ shots }: { shots: CareerShot[] }) {
  return (
    <div
      className={`col-span-full grid gap-4 ${
        shots.length > 1 ? 'grid-cols-2 max-[801px]:grid-cols-1' : 'mx-auto w-full max-w-[720px]'
      }`}
    >
      {shots.map((shot) => (
        <figure key={shot.src} className='m-0 flex flex-col gap-2'>
          {/* 누르면 원본 크기로 새 탭에서 열림 */}
          <a
            href={toPublicPath(shot.src)}
            target='_blank'
            rel='noreferrer'
            aria-label={`${shot.caption} 크게 보기`}
            className='relative block cursor-zoom-in overflow-hidden rounded-[14px] border border-[#e5e5ea] bg-[#f5f5f7] transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
          >
            {shot.label && (
              <span
                className={`absolute top-3 left-3 z-[1] rounded-[6px] px-2 py-[2px] text-[11px] font-extrabold tracking-[0.06em] uppercase ${
                  shot.label === 'After' ? 'bg-[#7c5cc4] text-white' : 'bg-white/90 text-[#6e6e73]'
                }`}
              >
                {shot.label}
              </span>
            )}
            <Image
              src={toPublicPath(shot.src)}
              alt={shot.caption}
              width={shot.width}
              height={shot.height}
              sizes={shots.length > 1 ? '(max-width: 800px) 90vw, 460px' : '(max-width: 800px) 90vw, 720px'}
              className='block h-auto w-full'
            />
          </a>
          <figcaption className='px-1 text-[13px] leading-[1.6] text-[#6e6e73]'>{shot.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
