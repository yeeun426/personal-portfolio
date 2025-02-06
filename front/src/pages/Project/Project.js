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
    fetch('/data/project.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.batch('.project-content', {
      // interval: 0.1,
      batchMax: 2, // maximum batch size (targets)
      onEnter: (batch) => {
        console.log('✅ 요소가 뷰포트 80% 지점에 도달:', batch);
        gsap.to(batch, { autoAlpha: 1, stagger: 0.1 });
      },
      start: 'top 80%', // 뷰포트 80% 지점에서 트리거
      makers: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // 클린업
    };
  }, [project]); // 프로젝트 데이터가 변경될 때마다 실행

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
