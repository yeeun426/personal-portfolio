import { useState, useEffect, useRef } from 'react';
import { ProjectStyled } from './style';
import { Link } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const [project, setProject] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch('/data/project.json')
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  useEffect(() => {
    if (!containerRef.current || project.length === 0) return;

    gsap.set('.project-content', { opacity: 0, y: 20 });

    const trigger = ScrollTrigger.batch('.project-content', {
      id: 'projectTrigger', // ID 부여
      batchMax: 2,
      onEnter: (batch) => {
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.2 });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, { opacity: 0, y: 20, stagger: 0.1 });
      },
      start: 'top 80%',
      markers: false,
    });

    return () => {
      ScrollTrigger.getById('projectTrigger')?.kill(); // 특정 트리거만 제거
    };
  }, [project]);

  return (
    <ProjectStyled>
      <div className='project' ref={containerRef}>
        {project.map((project) => (
          <div ref={containerRef} className='project-content' key={project.id}>
            <div className='project-txt'>
              <div className='project-date'>{project.date}</div>
              <div className='project-name'>{project.name}</div>
              <div className='project-detail'>{project.detail}</div>
            </div>
            <img src={project.img} alt={project.name} />
            <Link to={`/project/${project.id}`}>
              <button className='portfolio_btn'>
                프로젝트 자세히 살펴보기
              </button>
            </Link>
          </div>
        ))}
      </div>
    </ProjectStyled>
  );
}
