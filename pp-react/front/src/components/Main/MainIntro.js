import { SideBarStyled } from './styled';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tooltip } from 'react-tooltip';
import { IoMdMenu } from 'react-icons/io';
import Sidebar from './Sidebar';
import MainYeEun from './MainYeEun';

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
      <MenuBtn isOn={isOn} setIsOn={setIsOn} />
      <MainYeEun />
      <DownBtn onContentClick={onContentClick} />
    </SideBarStyled>
  );
}

const MenuBtn = ({ isOn, setIsOn }) => {
  return (
    <div className='menu-item'>
      <button className='my-menu' onClick={() => setIsOn(!isOn)}>
        <IoMdMenu />
      </button>
      <Tooltip anchorSelect='.my-menu' place='left' content='menu' />
    </div>
  );
};
const DownBtn = ({ onContentClick }) => {
  return (
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
  );
};
