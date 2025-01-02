import React from 'react';
import { useLocation } from 'react-router-dom';
import { AboutStyled } from './style';
import Footer from '../../components/Main/Footer';
import Header from '../../components/Main/Header';

function AboutMe() {
  const location = useLocation();
  const showHeaderFooter = ['/about'].includes(location.pathname);

  return (
    <AboutStyled>
      {showHeaderFooter && <Header />}
      <ul>
        <li className='otherChat'>
          <img
            src={process.env.PUBLIC_URL + '/images/icon/profile.png'}
            alt='프로필'
          />
          <div className='chat other'>이예은에 대해서 소개해주세요! 👀</div>
        </li>
        <li className='chat me'>안녕하세요 !</li>
        <li className='chat me'>자바스크립트와 연애(🥰)하고</li>
        <li className='chat me'>
          <img src='images/myimg1.png' alt='yeeun' />
        </li>
        <li className='chat me'>
          타입스크립트와 썸(😘)타는 프론트엔드 개발자 이예은입니다.
        </li>
        <li className='chat me'>
          웹 서비스의 프론트엔드 설계, 개발, 디자인, 운영 경험을 보유하고
          있습니다.
        </li>
        <li className='chat me'>
          다수의 UI 구현 경험으로 사용자 인터렉션에 대한 이해도를 가지고
          있습니다.
        </li>
        <li className='chat me'>
          빈 틈은 많지만, 꾸준하게 빈 틈을 채워나가는 것에 관심이 많습니다.
        </li>
        <li className='chat me'>
          사용자들의 진짜 필요를 깊이 고민하고, <br />그 기대를 뛰어넘는 가치를
          제공하는 개발자가 되겠습니다.🫡🫡
        </li>
      </ul>
      {showHeaderFooter && <Footer />}
    </AboutStyled>
  );
}

export default AboutMe;
