'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/constants/projects';
import { toPublicPath } from '@/types/project';
import ProjectModal from '@/components/portfolio/ProjectModal';
import { ProjectStyled } from './MainProject.styles';

gsap.registerPlugin(ScrollTrigger);

type TeamFilter = boolean | null; // null: 전체, true: 팀, false: 개인

export default function MainProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<TeamFilter>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null
  );

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

  // 모달이 열려 있는 동안 배경 스크롤 방지
  useEffect(() => {
    if (selectedProjectId === null) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProjectId]);

  const openModal = (projectId: number) => setSelectedProjectId(projectId);
  const closeModal = () => setSelectedProjectId(null);

  return (
    <ProjectStyled>
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
              <img src={toPublicPath(project.img)} alt={project.name} />
              <button
                className='portfolio_btn'
                onClick={() => openModal(project.id)}
              >
                프로젝트 자세히 살펴보기
              </button>
            </div>
          ))}
      </div>
      <ProjectModal
        isModalOpen={selectedProjectId !== null}
        closeModal={closeModal}
        selectedProjectId={selectedProjectId}
      />
    </ProjectStyled>
  );
}
