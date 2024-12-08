import { useState } from 'react';
import { MainStyled } from './style';
import Header from '../../components/Main/Header';
import Popup from '../../components/Home/Popup';
import Introduce from './Introduce';
import Project from '../Project/Project';

import 'swiper/css';
import 'swiper/css/scrollbar';
import Footer from '../../components/Main/Footer';

export default function Main() {
  const [open, setOpen] = useState(true);

  return (
    <MainStyled>
      <Header />
      <div>
        <Popup open={open} setOpen={setOpen} />
        <Introduce />
        <Project />
      </div>
      <Footer />
    </MainStyled>
  );
}
