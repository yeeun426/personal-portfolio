import { useState, useEffect, useRef } from 'react';
import { ProjectStyled } from './style';
import { useLocation } from 'react-router-dom';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectModal from '../../components/Portfolio/ProjectModal';

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

  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // 다른 프로젝트 모달 열기 이벤트 리스너
  useEffect(() => {
    const handleOpenProjectModal = (event) => {
      setSelectedProjectId(event.detail.projectId);
    };

    window.addEventListener('openProjectModal', handleOpenProjectModal);
    return () => {
      window.removeEventListener('openProjectModal', handleOpenProjectModal);
    };
  }, []);

  useEffect(() => {
    if (location.state?.project) {
      setProject(location.state.project);
      setFilteredProject(location.state.project);
    }
    // 데이터가 없으면 JSON 파일에서 불러오기
    else if (!storedProject) {
      fetch('/data/project.json')
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          setFilteredProject(data);
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

  // 모달 열기
  const openModal = (projectId) => {
    setSelectedProjectId(projectId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // 스크롤 방지
  };

  // 모달 닫기
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProjectId(null);
    document.body.style.overflow = 'unset';
  };

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
      position: 'relative',
      top: 'auto',
      left: 'auto',
      right: 'auto',
      bottom: 'auto',
      border: 'none',
      borderRadius: '8px',
      padding: '0',
      width: '90vw',
      height: '85vh',
      maxWidth: '1200px',
      backgroundColor: '#ffffff',
    },
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
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        customStyles={customStyles}
        selectedProjectId={selectedProjectId}
      />
    </ProjectStyled>
  );
}
