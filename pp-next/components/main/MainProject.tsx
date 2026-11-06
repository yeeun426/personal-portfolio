'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BsArrowUpRight } from 'react-icons/bs';
import { toPublicPath, type ProjectSummary } from '@/types/project';
import SectionTitle from './SectionTitle';

gsap.registerPlugin(ScrollTrigger);

type TeamFilter = boolean | null; // null: 전체, true: 팀, false: 개인

const FILTERS: { label: string; value: TeamFilter }[] = [
  { label: 'All', value: null },
  { label: 'Team', value: true },
  { label: 'Single', value: false },
];

/**
 * 프로젝트 목록.
 * "자세히 살펴보기"는 /project/[id] 로 이동하고,
 * 이 화면에서 이동하면 app/@modal 의 intercepting route 가 모달로 띄움.
 */
export default function MainProject({
  projects,
}: {
  projects: ProjectSummary[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<TeamFilter>(null);

  // 클론코딩은 아래에 따로 작게 보여줌
  const mainProjects = projects.filter((p) => !p.clone);
  const cloneProjects = projects.filter((p) => p.clone);

  const filteredProject =
    selectedFilter === null
      ? mainProjects
      : mainProjects.filter((p) => p.team === selectedFilter);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set('.project-content', { opacity: 0, y: 20 });

      ScrollTrigger.batch('.project-content', {
        batchMax: 2,
        onEnter: (batch) => {
          gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, { opacity: 0, y: 20, stagger: 0.1 });
        },
        start: 'top 80%',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selectedFilter]);

  return (
    <div className='mx-auto box-border w-full max-w-[1100px] bg-[#f5f5f7] px-6 py-32 break-keep max-[801px]:py-20 min-[1025px]:pl-[max(24px,calc(290px-(100vw-1100px)/2))]'>
      <SectionTitle en='Project' ko='프로젝트' />
      <div className='team-category mb-8 flex w-fit gap-1 rounded-[999px] bg-white p-[6px] shadow-[0_2px_12px_rgba(0,0,0,0.04)]'>
        {FILTERS.map(({ label, value }) => (
          <button
            key={label}
            className={`rounded-[999px] px-5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
              selectedFilter === value
                ? 'active bg-[#1d1d1f] text-white'
                : 'text-[#86868b] hover:text-[#1d1d1f]'
            }`}
            onClick={() => setSelectedFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className='grid grid-cols-2 gap-6 max-[801px]:grid-cols-1'
        ref={containerRef}
      >
        {filteredProject
          .slice()
          .reverse()
          .map((project) => (
            // .project-content 는 gsap 애니메이션 대상 선택자
            <Link
              key={project.id}
              href={`/project/${project.id}`}
              scroll={false}
              className='project-content group flex flex-col overflow-hidden rounded-[24px] bg-white text-left text-inherit no-underline opacity-0 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.1)]'
            >
              <div className='relative aspect-[16/10] overflow-hidden bg-[#fafafa]'>
                <Image
                  src={toPublicPath(project.img)}
                  alt={project.name}
                  fill
                  sizes='(max-width: 800px) 90vw, 520px'
                  className='object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.04]'
                />
                <span className='absolute top-4 left-4 rounded-[999px] bg-white/90 px-3 py-1 text-[12px] font-bold text-[#424245] shadow-[0_1px_4px_rgba(0,0,0,0.08)] backdrop-blur'>
                  {project.team ? 'Team' : 'Single'}
                </span>
              </div>
              <div className='flex flex-1 flex-col gap-2 px-7 pt-6 pb-7 max-[551px]:px-5 max-[551px]:pt-5 max-[551px]:pb-6'>
                <div className='text-[13px] text-[#86868b]'>{project.date}</div>
                <div className='flex items-center justify-between gap-3'>
                  <h3 className='m-0 text-[24px] leading-[1.25] font-bold text-[#1d1d1f] max-[551px]:text-[20px]'>
                    {project.name}
                  </h3>
                  <BsArrowUpRight className='h-4 w-4 shrink-0 text-[#86868b] transition-all duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#7c5cc4]' />
                </div>
                <p className='m-0 line-clamp-2 text-[16px] leading-[1.55] text-[#424245] max-[551px]:text-[15px]'>
                  {project.detail}
                </p>
                {project.stack.length > 0 && (
                  <ul className='m-0 mt-auto flex list-none flex-wrap gap-[6px] p-0 pt-3'>
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className='rounded-[8px] bg-[#f5f5f7] px-[10px] py-[3px] text-[13px] text-[#424245]'
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
      </div>

      {cloneProjects.length > 0 && (
        <div className='mt-24 text-left'>
          <h3 className='mb-2 text-[24px] font-black text-[#1d1d1f]'>Clone Coding</h3>
          <p className='mb-8 text-[16px] text-[#86868b]'>
            기존 서비스를 따라 만들며 React 기초를 다진 연습 프로젝트예요.
          </p>
          <ul className='m-0 grid list-none grid-cols-2 gap-3 p-0 max-[801px]:grid-cols-1'>
            {cloneProjects
              .slice()
              .reverse()
              .map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/project/${project.id}`}
                    scroll={false}
                    className='flex items-center gap-5 rounded-[16px] bg-white p-4 text-inherit no-underline transition-shadow duration-300 hover:shadow-[2px_4px_12px_rgba(0,0,0,0.08)]'
                  >
                    <Image
                      src={toPublicPath(project.img)}
                      alt={project.name}
                      width={657}
                      height={512}
                      sizes='120px'
                      className='h-[72px] w-[92px] shrink-0 rounded-[10px] bg-[#f5f5f7] object-contain'
                    />
                    <div className='min-w-0'>
                      <div className='text-[13px] text-[#6e6e73]'>{project.date}</div>
                      <div className='text-[19px] font-semibold text-[#1d1d1f]'>
                        {project.name}
                      </div>
                      <div className='truncate text-[15px] text-[#424245]'>
                        {project.detail}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
