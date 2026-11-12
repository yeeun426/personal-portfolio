'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { BsArrowUpRight, BsChevronDown, BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {
  toPublicPath,
  type Project,
  type ProjectPageImage,
  type ProjectQnA,
} from '@/types/project';
import { externalLinkProps } from '@/constants/links';
import RichText from './RichText';
import Troubleshooting from './Troubleshooting';

const MAPLIX_ID = 3; // 세로로 긴 상세 이미지를 쓰는 프로젝트

// 본문 공통 여백
const container = 'mx-auto box-border w-full max-w-[1000px] px-12 max-[801px]:px-6';
// 섹션 소제목 (Overview, Screens ...)
const heading =
  'm-0 mb-6 text-[13px] font-bold tracking-[0.08em] text-[#9778c9] uppercase';

function getYouTubeEmbedUrl(url: string) {
  const videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
}

/** project.json 의 "REACT, JAVASCRIPT" → ["React", "JavaScript"] */
const STACK_NAMES: Record<string, string> = {
  REACT: 'React',
  JAVASCRIPT: 'JavaScript',
  RECOIL: 'Recoil',
  'SOCKET.IO': 'Socket.IO',
  TS: 'TypeScript',
};
const toStack = (skill?: string) =>
  (skill ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => STACK_NAMES[s.toUpperCase()] ?? s);

interface PortfolioProps {
  project: Project;
  images: ProjectPageImage[];
}

/** 프로젝트 상세 (모달 / 단독 페이지 공통) */
export default function Portfolio({ project: data, images }: PortfolioProps) {
  const stack = toStack(data.skills?.skill);
  const links = [
    data.skills?.github && { label: 'GitHub', href: data.skills.github },
    data.skills?.video && { label: '시연 영상', href: data.skills.video },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article className='bg-white pb-20 text-left break-keep text-[#1d1d1f]'>
      {/* 헤더 */}
      <header className={`${container} pt-16 pb-10 max-[801px]:pt-14`}>
        <div className='flex flex-wrap items-center gap-2 text-[14px] text-[#86868b]'>
          <span className='rounded-[999px] bg-[#f3edfe] px-3 py-[2px] text-[13px] font-bold text-[#7c5cc4]'>
            {data.team ? 'Team' : 'Single'}
          </span>
          {data.date}
          {data.skills?.organization && <span>· {data.skills.organization}</span>}
        </div>
        <h2 className='m-0 mt-4 text-[length:max(calc(1rem+2.5vw),36px)] leading-[1.1] font-extrabold'>
          {data.name}
        </h2>
        <p className='m-0 mt-4 max-w-[680px] text-[19px] leading-[1.6] text-[#424245] max-[501px]:text-[17px]'>
          {data.detail}
        </p>
        {links.length > 0 && (
          <div className='mt-8 flex flex-wrap gap-3'>
            {links.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                {...externalLinkProps}
                className={`group inline-flex items-center gap-2 rounded-[999px] px-5 py-3 text-[15px] font-semibold no-underline transition-colors duration-200 ${
                  i === 0
                    ? 'bg-[#1d1d1f] text-white hover:bg-[#7c5cc4] hover:text-white'
                    : 'border border-[#d2d2d7] text-[#1d1d1f] hover:border-[#7c5cc4] hover:text-[#7c5cc4]'
                }`}
              >
                {label}
                <BsArrowUpRight className='h-3 w-3 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]' />
              </a>
            ))}
          </div>
        )}
      </header>

      {/* 영상 */}
      {(data.youtube || data.video) && (
        <div className={container}>
          <div className='aspect-video overflow-hidden rounded-[20px] bg-[#f5f5f7]'>
            {data.youtube ? (
              <iframe
                className='h-full w-full'
                src={getYouTubeEmbedUrl(data.youtube)}
                title={`${data.name} 시연 영상`}
                loading='lazy'
                allow='autoplay; encrypted-media'
                allowFullScreen
              />
            ) : (
              <video
                className='h-full w-full object-cover object-top'
                src={toPublicPath(data.video)}
                preload='none'
                controls
                muted
                playsInline
                autoPlay
                poster={toPublicPath(data.img)}
              />
            )}
          </div>
        </div>
      )}

      {/* 개요: 기획 의도 + 정보 */}
      <section className={`${container} mt-20`}>
        <h3 className={heading}>Overview</h3>
        <div className='grid grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-12 max-[801px]:grid-cols-1 max-[801px]:gap-10'>
          <RichText
            text={data.skills?.detail ?? ''}
            className='text-[17px] leading-[1.8] text-[#424245]'
          />
          <dl className='m-0 border-t border-[#1d1d1f]'>
            <InfoRow label='기간'>{data.date}</InfoRow>
            {data.skills?.organization && (
              <InfoRow label='기관'>{data.skills.organization}</InfoRow>
            )}
            <InfoRow label='형태'>{data.teamInfo ?? (data.team ? '팀 프로젝트' : '개인 프로젝트')}</InfoRow>
            {stack.length > 0 && (
              <InfoRow label='기술'>
                <ul className='m-0 flex list-none flex-wrap gap-[6px] p-0'>
                  {stack.map((tech) => (
                    <li
                      key={tech}
                      className='rounded-[8px] bg-[#f5f5f7] px-[10px] py-[3px] text-[13px]'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </InfoRow>
            )}
          </dl>
        </div>
      </section>

      {/* 담당 역할 */}
      {!!data.skills?.roles?.length && (
        <section className={`${container} mt-20`}>
          <h3 className={heading}>My Role</h3>
          <ul className='m-0 grid list-none grid-cols-2 gap-4 p-0 max-[801px]:grid-cols-1'>
            {data.skills.roles.map((role) => (
              <li
                key={role}
                className='rounded-[18px] bg-[#f5f5f7] px-6 py-5 text-[16px] leading-[1.7] text-[#424245]'
              >
                <RichText text={role} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!data.troubleshooting?.length && (
        <Troubleshooting items={data.troubleshooting} heading={heading} />
      )}

      {images.length > 0 && <Screens name={data.name} images={images} tall={data.id === MAPLIX_ID} />}

      {!!data.QnA?.length && <QnA items={data.QnA} />}
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

/** 화면 이미지 — 가로 스크롤 (터치/트랙패드로 넘기거나 화살표 버튼) */
function Screens({
  name,
  images,
  tall,
}: {
  name: string;
  images: ProjectPageImage[];
  tall: boolean;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const scrollByPage = (dir: 1 | -1) => {
    const el = listRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };
  const arrow =
    'flex h-10 w-10 items-center justify-center rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] transition-colors duration-200 hover:border-[#1d1d1f]';

  return (
    <section className='mt-20'>
      <div className={`${container} mb-6 flex items-end justify-between`}>
        <h3 className={`${heading} mb-0`}>Screens</h3>
        <div className='flex gap-2'>
          <button className={arrow} onClick={() => scrollByPage(-1)} aria-label='이전 화면'>
            <BsChevronLeft className='h-4 w-4' />
          </button>
          <button className={arrow} onClick={() => scrollByPage(1)} aria-label='다음 화면'>
            <BsChevronRight className='h-4 w-4' />
          </button>
        </div>
      </div>
      {/* 좌우 여백은 본문과 맞추고, 스크롤은 끝까지 */}
      <ul
        ref={listRef}
        className='m-0 flex list-none snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-0 pb-4 [--edge:max(48px,calc((100%_-_1000px)/2_+_48px))] px-(--edge) scroll-px-(--edge) [scrollbar-width:none] max-[801px]:[--edge:24px] [&::-webkit-scrollbar]:hidden'
      >
        {images.map((page) => (
          <li
            key={page.num}
            className={`shrink-0 snap-start ${tall ? 'w-[min(420px,80%)]' : 'w-[min(620px,85%)]'}`}
          >
            <Image
              // 가로 화면은 비율이 달라도 잘리지 않게 contain, 세로로 긴 스크롤 캡처(MAPLIX)는 위쪽 기준으로 잘라서 표시
              className={`h-auto w-full rounded-[16px] border border-[#e5e5ea] ${
                tall
                  ? 'aspect-[1709/1750] object-cover object-top'
                  : 'aspect-[1709/944] bg-[#f5f5f7] object-contain'
              }`}
              alt={page.title ?? (page.desc || `${name} 화면 ${page.num}`)}
              src={toPublicPath(page.img)}
              width={1709}
              height={tall ? 1750 : 944}
              sizes='(max-width: 800px) 85vw, 620px'
            />
            {page.title && (
              <div className='mt-3 px-1 text-left'>
                <div className='text-[16px] font-semibold text-[#1d1d1f]'>{page.title}</div>
                {page.desc && (
                  <p className='m-0 mt-1 text-[14px] leading-[1.6] text-[#6e6e73]'>{page.desc}</p>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

/** 자주 묻는 질문 (아코디언) */
function QnA({ items }: { items: ProjectQnA[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className={`${container} mt-20`}>
      <h3 className={heading}>Q&amp;A</h3>
      <ul className='m-0 list-none border-t border-[#1d1d1f] p-0'>
        {items.map(({ id, question, answer }) => {
          const open = openId === id;
          return (
            <li key={id} className='border-b border-[#e5e5ea]'>
              <button
                className='flex w-full items-center justify-between gap-6 py-6 text-left text-[18px] font-semibold text-[#1d1d1f] max-[501px]:text-[16px]'
                onClick={() => setOpenId(open ? null : id)}
                aria-expanded={open}
              >
                {question}
                <BsChevronDown
                  className={`h-4 w-4 shrink-0 text-[#86868b] transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {/* grid-rows 0fr ↔ 1fr 로 높이 애니메이션 */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className='overflow-hidden'>
                  <RichText
                    text={answer}
                    className='pb-6 text-[16px] leading-[1.75] text-[#424245]'
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
