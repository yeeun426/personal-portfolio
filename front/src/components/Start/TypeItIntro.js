import TypeIt from 'typeit-react';
import React, { useEffect, useState } from 'react';
import { TypeItStyled } from './style';
import { useNavigate } from 'react-router-dom';

export default function TypeItIntro() {
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
          startDelay: 900,
          lifeLike: true,
        }}
        className={`type-it type-it-container ${folder ? 'disappear' : ''}`}
        getBeforeInit={(instance) => {
          instance
            .pause(1000)
            .type('HELLO')
            .pause(204)
            .break()
            .pause(264)
            .type('I')
            .pause(181)
            .type("'")
            .pause(224)
            .type('M')
            .pause(344)
            .break()
            .pause(237)
            .type('A')
            .pause(156)
            .type(' ')
            .pause(123)
            .type('WEB DEVELOPER')
            .pause(676)
            .break()
            .pause(363)
            .type('WELCOME!')
            .move(-25, { speed: 52 })
            .type(' ')
            .pause(576)
            .type('<button class="my-name"><strong>YEEUN</strong></button>')
            .pause(1000)
            .exec(() => {
              const folders = document.querySelector('.type-it');
              folders.classList.add('color-change');
            })
            .pause(1000)
            .exec(() => {
              setFolder(!folder);
            });

          return instance;
        }}
      />

      <button
        className={folder ? 'home-folder' : 'home-folder-none'}
        onClick={() => setOpen(!open)}
      >
        <img className='home-folder-img' src='images/folder.png' alt='folder' />
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
            alt='project'
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
