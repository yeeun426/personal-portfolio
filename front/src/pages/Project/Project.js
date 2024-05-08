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
            <Swiper
              navigation={true}
              pagination={pagination}
              modules={[Pagination, Navigation]}
              className='mySwiper project-content'
            >
              <SwiperSlide>
                <div className='project-txt'>
                  <div className='project-date'>{project.date}</div>
                  <div className='project-name'>{project.name}</div>
                  <div className='project-detail'>{project.detail}</div>
                </div>
                <img src={project.img} alt={project.name} />
              </SwiperSlide>
              <SwiperSlide>
                <div className='project-txt'>
                  <div className='project-date'>{project.date}</div>
                  <div className='project-name'>{project.name}</div>
                  <div className='project-detail'>{project.detail}</div>
                </div>
                <div className='project-sub'>
                  <div className='project-sub-txt'>
                    <div className='project-sub-title'>기술 스택</div>
                    <div>{project.skills.skill}</div>
                  </div>
                  <div className='project-sub-txt'>
                    <div className='project-sub-title'>주최</div>
                    <div>{project.skills.organization}</div>
                  </div>
                  <div className='project-sub-txt'>
                    <div className='project-sub-title'>설명</div>
                    <div>{project.skills.detail}</div>
                  </div>
                  <div className='project-sub-txt'>
                    <div className='project-sub-title'>github</div>
                    <div>{project.skills.github}</div>
                  </div>
                  <div className='project-sub-txt'>
                    <div className='project-sub-title'>시현</div>
                    <div>{project.skills.video}</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='project-img'>
                <img src={project.images.image1} alt="준비중" />
              </SwiperSlide>
              <SwiperSlide className='project-img'>
                <img src={project.images.image2} alt="준비중"  />
              </SwiperSlide>
              <SwiperSlide className='project-img'>
                <img src={project.images.image3} alt="준비중"  />
              </SwiperSlide>
            </Swiper>
            {/* <Link to={`/project/${project.id}`}>
              <button className='portfolio_btn'>
                프로젝트 자세히 살펴보기
              </button>
            </Link> */}
          </div>
        ))}
      </div>
    </ProjectStyled>
  );
}
