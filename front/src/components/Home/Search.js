import { SearchStyled } from './styled';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap 스타일 불러오기

export default function Search({ onContentClick }) {
  return (
    <SearchStyled className='mainIntro-wrapper'>
      <aside className='main-aside'>
        <div className='aside-tab'>
          <button onClick={() => window.open('https://github.com/yeeun426')}>
            Github
          </button>
          <button onClick={() => window.open('https://yeeun426.github.io/')}>
            Blog
          </button>
          <button onClick={() => onContentClick(0)}>About</button>
          <button onClick={() => onContentClick(1)}>Education</button>
          <button onClick={() => onContentClick(2)}>Project</button>
        </div>
        <div className='aside-info'>
          <img
            src={process.env.PUBLIC_URL + '/images/icon/logo.png'}
            alt='LYE'
          />
          <div>thsudkcla7@naver.com</div>
          <p>Last update:2025/02</p>
        </div>
      </aside>
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
        <img
          src={process.env.PUBLIC_URL + '/images/leeyeeun.png'}
          alt='leeyeeun'
        />
      </div>
      <div className='absolute bottom-[3rem] left-[50%] translate-x-[-50%] z-[20] flex flex-col items-center rotate-180 animate-bounce'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='18'
          viewBox='0 0 28 17'
          fill='none'
        >
          <path
            d='M26 2L14 14L2 2'
            stroke='#fff'
            strokeWidth='3'
            strokeLinecap='round'
          ></path>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='18'
          viewBox='0 0 28 17'
          fill='none'
        >
          <path
            d='M26 2L14 14L2 2'
            stroke='#fff'
            strokeWidth='3'
            strokeLinecap='round'
          ></path>
        </svg>
      </div>
    </SearchStyled>
  );
}
