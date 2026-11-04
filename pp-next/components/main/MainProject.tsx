'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toPublicPath, type ProjectSummary } from '@/types/project';

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

  const filteredProject =
    selectedFilter === null
      ? projects
      : projects.filter((p) => p.team === selectedFilter);

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
    <div className='m-auto box-border w-[70%] max-w-[1200px] bg-[#f5f5f7] px-0 py-32'>
      <div className='team-category mb-4 flex w-fit gap-2 rounded-[999px] bg-white p-3'>
        {FILTERS.map(({ label, value }) => (
          <button
            key={label}
            className={`rounded-[999px] px-5 py-2 text-[17px] ${
              selectedFilter === value ? 'active bg-[#b8b8b9] font-bold text-white' : ''
            }`}
            onClick={() => setSelectedFilter(value)}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        className='grid grid-cols-2 gap-3 max-[801px]:grid-cols-1'
        ref={containerRef}
      >
        {filteredProject
          .slice()
          .reverse()
          .map((project) => (
            // .project-content 는 gsap 애니메이션 대상 선택자
            <div
              className='project-content group relative flex aspect-[657/512] w-full flex-col items-center justify-between bg-white whitespace-normal opacity-0 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]'
              key={project.id}
            >
              <div className='flex h-fit w-full flex-col gap-[10px] pt-[30px] max-[551px]:gap-[5px] max-[551px]:pt-5'>
                <div className='text-[12px] leading-[1.33337] text-[#6e6e73]'>
                  {project.date}
                </div>
                <div className='text-[28px] leading-[1.14286] font-semibold max-[551px]:text-[22px]'>
                  {project.name}
                </div>
                <div className='w-full truncate text-[17px] leading-[1.23536] font-normal max-[551px]:text-[15px]'>
                  {project.detail}
                </div>
              </div>
              <Image
                src={toPublicPath(project.img)}
                alt={project.name}
                width={657}
                height={512}
                sizes='(max-width: 800px) 70vw, 600px'
                className='h-[70%] w-[90%] self-center object-contain'
              />
              <Link
                className='portfolio_btn absolute top-1/2 left-1/2 z-[1] w-max [transform:translate(-50%,-50%)] rounded-[30px] bg-[#1d1d1f] p-[15px] text-[17px] font-normal text-white no-underline opacity-0 shadow-[3px_3px_7px_#0000005c] transition-all duration-500 ease-[ease] group-hover:opacity-100'
                href={`/project/${project.id}`}
                scroll={false}
              >
                프로젝트 자세히 살펴보기
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
