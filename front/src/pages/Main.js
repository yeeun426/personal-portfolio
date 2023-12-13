import { MainStyled } from '../styles/MainStyled';
import Header from '../components/Header';
import Popup from '../components/Home/Popup';
import Introduce from './Introduce';
import Project from '../pages/Project/Project';

import { Mousewheel, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function Main() {
  return (
    <MainStyled>
      <Header />
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        scrollbar={{
          hide: false,
        }}
        modules={[Mousewheel, Scrollbar]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Popup />
        </SwiperSlide>
        <SwiperSlide>
          <Introduce />
        </SwiperSlide>
        <SwiperSlide>
          <Project />
        </SwiperSlide>
      </Swiper>
    </MainStyled>
  );
}
