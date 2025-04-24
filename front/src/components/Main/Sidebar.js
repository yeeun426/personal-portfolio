import React from 'react';
import { useEffect, useState } from 'react';

const Sidebar = ({ onContentClick, activeIndex, isOn, setIsOn }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = window.innerHeight - 100; // window.innerHeight : 화면 높이 (100vh)

    if (scrollPosition > triggerPosition && window.innerWidth > 1024) {
      setScrolled(true);
      setIsOn(false);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      className={`main-aside ${scrolled ? 'scrolled' : ''} ${isOn ? 'on' : ''}`}
    >
      <div className='aside-tab'>
        <button onClick={() => window.open('https://github.com/yeeun426')}>
          Github
        </button>
        <button onClick={() => window.open('https://yeeun426.github.io/')}>
          Blog
        </button>
        <div className='fixed-tab'>
          <button
            className={activeIndex === 0 ? 'active' : ''}
            onClick={() => onContentClick(0)}
          >
            About
          </button>
          <button
            className={activeIndex === 1 ? 'active' : ''}
            onClick={() => onContentClick(1)}
          >
            Education
          </button>
          <button
            className={activeIndex === 2 ? 'active' : ''}
            onClick={() => onContentClick(2)}
          >
            Project
          </button>
        </div>
      </div>
      <div className='aside-info'>
        <img
          src={process.env.PUBLIC_URL + '/images/main/logo.webp'}
          alt='LYE'
        />
        <div>thsudkcla7@naver.com</div>
        <p>Last update:2025/03</p>
      </div>
    </aside>
  );
};

export default Sidebar;
