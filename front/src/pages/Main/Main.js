import { useRef } from 'react';
import { MainStyled } from './style';
import Introduce from './Introduce';
import Project from '../Project/Project';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Footer from '../../components/Main/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Search from '../../components/Home/Search';

export default function Main() {
  const contentRefs = useRef([]);

  const onContentClick = (idx) => {
    contentRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainStyled>
      <Search onContentClick={onContentClick} />
      <div ref={(el) => el && (contentRefs.current[0] = el)}>
        <AboutMe />
      </div>
      <div ref={(el) => el && (contentRefs.current[1] = el)}>
        <Introduce />
      </div>
      <div
        style={{ backgroundColor: '#f5f5f7' }}
        ref={(el) => el && (contentRefs.current[2] = el)}
      >
        <Project />
      </div>
      <Footer />
    </MainStyled>
  );
}
