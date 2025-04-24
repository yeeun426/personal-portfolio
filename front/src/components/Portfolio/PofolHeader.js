import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { PofolHeaderStyled } from './styled.js';
import { useNavigate } from 'react-router-dom';

export default function PofolHeader() {
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/data/project.json')
      .then((res) => {
        let data = res.data;
        const info = data.map((item) => {
          const iconPath = process.env.PUBLIC_URL + '/' + item.icon;
          return {
            id: item.id,
            name: item.name,
            icon: iconPath,
          };
        });
        setList(info);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const changeUrlAndReload = (newUrl) => {
    navigate(newUrl);
    window.location.reload();
  };

  return (
    <PofolHeaderStyled>
      <Swiper
        className='pofol-list'
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          // 1024px 이상
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
          // 767px 이상
          767: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          // 450px 이상
          450: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {list &&
          list.map((project) => (
            <SwiperSlide key={project.id}>
              <button
                onClick={() => changeUrlAndReload(`/project/${project.id}`)}
              >
                <img
                  className='icon-img'
                  src={project.icon}
                  alt={project.name}
                />
                <div className='project-name'>{project.name}</div>
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
    </PofolHeaderStyled>
  );
}
