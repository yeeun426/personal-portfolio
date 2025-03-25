import { useRef } from 'react';
import { MainStyled } from './style';
import Introduce from './Introduce';
import Project from '../Project/Project';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Footer from '../../components/common/Footer';
import AboutMe from '../AboutMe/AboutMe';
import FirstMain from '../../components/Main/FirstMain';

export default function Main() {
  const contentRefs = useRef([]);

  const onContentClick = (idx) => {
    contentRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainStyled>
      <FirstMain onContentClick={onContentClick} />
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
