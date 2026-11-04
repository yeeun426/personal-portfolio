'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toPublicPath, type ProjectSummary } from '@/types/project';
import styles from './MainProject.module.css';

gsap.registerPlugin(ScrollTrigger);

type TeamFilter = boolean | null; // null: 전체, true: 팀, false: 개인

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
    <div className={styles.root}>
      <div className='team-category'>
        <button
          className={selectedFilter === null ? 'active' : ''}
          onClick={() => setSelectedFilter(null)}
        >
          All
        </button>
        <button
          className={selectedFilter === true ? 'active' : ''}
          onClick={() => setSelectedFilter(true)}
        >
          Team
        </button>
        <button
          className={selectedFilter === false ? 'active' : ''}
          onClick={() => setSelectedFilter(false)}
        >
          Single
        </button>
      </div>

      <div className='project' ref={containerRef}>
        {filteredProject
          .slice()
          .reverse()
          .map((project) => (
            <div className='project-content' key={project.id}>
              <div className='project-txt'>
                <div className='project-date'>{project.date}</div>
                <div className='project-name'>{project.name}</div>
                <div className='project-detail'>{project.detail}</div>
              </div>
              <Image
                src={toPublicPath(project.img)}
                alt={project.name}
                width={657}
                height={512}
                sizes='(max-width: 800px) 70vw, 600px'
              />
              <Link
                className='portfolio_btn'
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
