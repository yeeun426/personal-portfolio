import { useState, useEffect, useRef } from 'react';
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
  const [scroll, setScroll] = useState(0);
  const wheel = useRef(null);

  const onScrollFunction = () => {
    setScroll(window.scrollY);
  };

  const scrollFunction = () => {
    if (scroll > 0 && scroll < 833) {
      wheel.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      return;
    }
  };

  useEffect(() => {
    scrollFunction();
  }, [scroll]);

  return (
    <MainStyled onWeel={onScrollFunction}>
      <Header />
      <div>
        <Popup ref={wheel} />
        <Introduce ref={wheel} />
        <Project />
      </div>
    </MainStyled>
  );
}
