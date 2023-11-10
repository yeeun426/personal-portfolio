import { MainStyled } from '../styles/MainStyled';
import Header from '../components/Header';
import MainIntro from './MainIntro';
import Introduce from './Introduce';
import Project from './Project';

export default function Main() {
  return (
    <MainStyled>
      <Header />
      <div className='main-wrapper'>
        <div className='mainIntro-wrapper'>
          <MainIntro />
        </div>
        <Introduce />
        <Project />
      </div>
    </MainStyled>
  );
}
