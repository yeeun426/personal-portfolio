import { MainStyled } from './style';
import Introduce from './Introduce';
import Project from '../Project/Project';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Footer from '../../components/Main/Footer';
import AboutMe from '../AboutMe/AboutMe';
import Search from '../../components/Home/Search';

export default function Main() {
  return (
    <MainStyled>
      <Search />
      <AboutMe />
      <Introduce />
      <Project />
      <Footer />
    </MainStyled>
  );
}
