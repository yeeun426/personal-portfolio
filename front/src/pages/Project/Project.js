import { useState, useEffect, useRef } from 'react';
import { ProjectStyled } from './style';
import { Link, useLocation } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
  const location = useLocation();
  const containerRef = useRef(null);

  const storedProject = sessionStorage.getItem('projectData');
  const [project, setProject] = useState(
    storedProject ? JSON.parse(storedProject) : []
  );

  const [filteredProject, setFilteredProject] = useState(project);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    // location.state에 데이터가 있으면 세션 스토리지에 저장
    if (location.state?.project) {
      sessionStorage.setItem(
        'projectData',
        JSON.stringify(location.state.project)
      );
      setProject(location.state.project);
      setFilteredProject(location.state.project);
    }
    // 3. 데이터가 없으면 JSON 파일에서 불러오기
    else if (!storedProject) {
      fetch('/data/project.json')
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          setFilteredProject(data);
          sessionStorage.setItem('projectData', JSON.stringify(data));
        });
    }
  }, [location.state, storedProject]);

  useEffect(() => {
    if (!containerRef.current || project.length === 0) return;

    gsap.set('.project-content', { opacity: 0, y: 20 });

    const trigger = ScrollTrigger.batch('.project-content', {
      id: 'projectTrigger',
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
  }, [filteredProject]);

  const handleTeam = (isTeam) => {
    setSelectedFilter(isTeam);
    if (isTeam === null) {
      setFilteredProject(project);
    } else {
      setFilteredProject(project.filter((p) => p.team === isTeam));
    }
  };

  return (
    <ProjectStyled>
      <div className='team-category'>
        <button
          className={selectedFilter === null ? 'active' : ''}
          onClick={() => handleTeam(null)}
        >
          All
        </button>
        <button
          className={selectedFilter === true ? 'active' : ''}
          onClick={() => handleTeam(true)}
        >
          Team
        </button>
        <button
          className={selectedFilter === false ? 'active' : ''}
          onClick={() => handleTeam(false)}
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
