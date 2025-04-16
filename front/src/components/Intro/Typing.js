import TypeIt from 'typeit-react';
import React, { useEffect, useState } from 'react';
import { TypeItStyled } from './style';
import { useNavigate } from 'react-router-dom';

// 수정 사항
// 1. 빨리 감기 아이콘 클릭 시 -> 폴더로 이동
// 2. 반응형 (O)
// 3. 폴더 클릭 (hover시 확대)
export default function Typing() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState(false);
  const navigate = useNavigate();

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      setFolder(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleEnterKey);
    return () => {
      window.removeEventListener('keydown', handleEnterKey);
    };
  }, []);

  return (
    <TypeItStyled>
      <TypeIt
        options={{
          speed: 100,
          startDelay: 500,
          lifeLike: true,
        }}
        className={`display-1 type-it type-it-container ${
          folder ? 'disappear' : ''
        }`}
        getBeforeInit={(instance) => {
          instance
            .pause(1000)
            .type('HELLO')
            .pause(100)
            .break()
            .pause(100)
            .type('I')
            .pause(100)
            .type("'")
            .pause(100)
            .type('M')
            .pause(100)
            .break()
            .pause(100)
            .type('A')
            .pause(100)
            .type(' ')
            .pause(100)
            .type('WEB DEVELOPER')
            .pause(100)
            .break()
            .pause(100)
            .type('WELCOME!')
            .move(-25, { speed: 30 })
            .type(' ')
            .pause(100)
            .type('<strong className="my-name">YEEUN</strong>')
            .pause(1000)
            .exec(() => {
              setFolder(true);
            });

          return instance;
        }}
      />
      {!folder && (
        <button
          className='next-btn'
          aria-label='main으로 이동'
          onClick={() => setFolder(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z'
            />
          </svg>
        </button>
      )}
      <button
        className={
          folder ? `home-folder ${open ? 'open' : ''}` : 'home-folder-none'
        }
        onClick={() => setOpen(!open)}
      >
        <img
          className='home-folder-img w-50'
          src='images/folder.png'
          alt='folder'
        />
        <div className='home-folder-name'>이예은</div>
      </button>

      <div className={`folders ${open ? 'open' : 'closed'}`}>
        <button className='folder-item' onClick={() => navigate(`/main`)}>
          <img
            className='folder-img portfolio-folder'
            src='images/folder.png'
            alt='portfolio'
          />
          <div className='folder-img-name'>START</div>
        </button>
        <button className='folder-item' onClick={() => navigate(`/main`)}>
          <img
            className='folder-img about-folder'
            src='images/folder.png'
            alt='aboutMe'
          />
          <div className='folder-img-name'>ABOUT_ME</div>
        </button>
        <button className='folder-item' onClick={() => navigate(`/main`)}>
          <img
            className='folder-img project-folder'
            src='images/folder.png'
            alt='폴더'
          />
          <div className='folder-img-name'>PROJECT</div>
        </button>
        <button
          onClick={() => window.open('https://github.com/yeeun426')}
          className='folder-item'
        >
          <img
            className='folder-img github-folder'
            src='images/folder.png'
            alt='folder'
          />
          <div className='folder-img-name'>GITHUB</div>
        </button>
      </div>
    </TypeItStyled>
  );
}
