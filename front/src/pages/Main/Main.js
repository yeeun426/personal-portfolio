import { useRef, useState, useEffect } from 'react';
import { MainStyled } from './style';
import Introduce from './Introduce';
import Project from '../Project/Project';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Footer from '../../components/common/Footer';
import AboutMe from '../AboutMe/AboutMe';
import FirstMain from '../../components/Main/FirstMain';
import Feedback from '../../components/common/Feedback';

export default function Main() {
  const contentRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const onContentClick = (idx) => {
    contentRefs.current[idx]?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    contentRefs.current.forEach((section, idx) => {
      if (section) {
        const rect = section.getBoundingClientRect(); // 섹션의 위치 정보 가져오기
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          // 화면의 절반 높이보다 위에 있으면
          setActiveIndex(idx); // 현재 보이는 섹션의 인덱스를 저장
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainStyled>
      <Feedback />
      <FirstMain onContentClick={onContentClick} activeIndex={activeIndex} />
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
