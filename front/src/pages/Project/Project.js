import { useState, useEffect } from 'react';
import { ProjectStyled } from './style';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

export default function Project() {
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const URL = `${PROXY}/data/project.json`;
  const [project, setProject] = useState([]);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  useEffect(() => {
    fetch('/data/project.json', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      });
  }, []);

  return (
    <ProjectStyled>
      <div className='project'>
        {project.map((project) => (
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
