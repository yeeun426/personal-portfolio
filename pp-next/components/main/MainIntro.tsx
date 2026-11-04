'use client';

import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { IoMdMenu } from 'react-icons/io';
import Sidebar, { MAIN_SECTIONS, scrollToSection } from './Sidebar';
import { SideBarStyled } from './MainIntro.styles';

// 기존 React 버전 components/Main/MainIntro.js + MainYeEun.js
export default function MainIntro() {
  const [isOn, setIsOn] = useState(false);

  return (
    <SideBarStyled className='mainIntro-wrapper'>
      <Sidebar isOn={isOn} setIsOn={setIsOn} />
      <div className='menu-item'>
        <button className='my-menu' onClick={() => setIsOn(!isOn)}>
          <IoMdMenu />
        </button>
        <Tooltip anchorSelect='.my-menu' place='left' content='menu' />
      </div>
      <div className='main-container'>
        <h2 className='h1'>
          프론트엔드 개발자 <strong>이예은</strong>입니다.
        </h2>
        <p>
          <strong>꾸준하게</strong> 빈틈을 <strong>채워나가는</strong>{' '}
          개발자입니다.
          <br />
          사용자가 필요로 하는 것을 <strong>한발 먼저</strong> 고민하겠습니다.
        </p>
        <img src='/images/main/leeyeeun.webp' alt='leeyeeun' />
      </div>
      <button
        className='down-btn'
        onClick={() => scrollToSection(MAIN_SECTIONS[0].id)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
          />
        </svg>
      </button>
    </SideBarStyled>
  );
}
