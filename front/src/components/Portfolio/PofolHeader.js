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
          console.log('Icon Path:', iconPath);
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
        slidesPerView={9}
        className='pofol-list'
        modules={[Navigation]}
        navigation={true}
        slidesOffsetAfter={20}
        slidesOffsetBefore={20}
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
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      process.env.PUBLIC_URL + '/images/default_icon.png'; // 기본 아이콘 경로
                  }}
                />
                <div>{project.name}</div>
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
    </PofolHeaderStyled>
  );
}
