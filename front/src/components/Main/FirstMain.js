import { SideBarStyled } from './styled';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FristMain({ onContentClick, activeIndex }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerPosition = window.innerHeight - 100; // window.innerHeight : 화면 높이 (100vh)

    if (scrollPosition > triggerPosition) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SideBarStyled className='mainIntro-wrapper'>
      <aside className={`main-aside ${scrolled ? 'scrolled' : ''}`}>
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
            src={process.env.PUBLIC_URL + '/images/icon/logo.png'}
            alt='LYE'
          />
          <div>thsudkcla7@naver.com</div>
          <p>Last update:2025/03</p>
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
