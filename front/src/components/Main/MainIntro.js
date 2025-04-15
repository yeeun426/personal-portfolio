import { SideBarStyled } from './styled';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'react-tooltip';
import { MdFeedback } from 'react-icons/md';
import Sidebar from './Sidebar';

export default function FirstMain({ onContentClick, activeIndex }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <SideBarStyled className='mainIntro-wrapper'>
      <Sidebar
        onContentClick={onContentClick}
        activeIndex={activeIndex}
        isOn={isOn}
        setIsOn={setIsOn}
      />
      <div className='menu-item'>
        <button className='my-menu' onClick={() => setIsOn(!isOn)}>
          <MdFeedback />
        </button>
        <Tooltip anchorSelect='.my-feedback' place='left' content='menu' />
      </div>
      <IntroYeEun />
      <button className='down-btn' onClick={() => onContentClick(0)}>
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

const IntroYeEun = () => {
  return (
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
        src={process.env.PUBLIC_URL + '/images/main/leeyeeun.webp'}
        alt='leeyeeun'
      />
    </div>
  );
};
