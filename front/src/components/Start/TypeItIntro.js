import TypeIt from 'typeit-react';
import React, { useState } from 'react';
import { TypeItStyled } from './style';
import Popup from '../Home/Popup';

export default function TypeItIntro() {
  const [open, setOpen] = useState(false); // Popup 상태
  const [folder, setFolder] = useState(false); // 폴더 상태
  const [showIntro, setShowIntro] = useState(true); // 1과 2 사이 전환 상태

  const onTest = () => {
    console.log('헤이');
  };

  return (
    <TypeItStyled>
      {showIntro ? (
        <TypeIt
          options={{
            speed: 100,
            startDelay: 900,
            lifeLike: true,
          }}
          className='type-it'
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
              .exec(() => {
                const button = document.querySelector('.my-name');
                if (button) {
                  button.addEventListener('click', () => {
                    console.log('Button clicked!');
                  });
                }
              });

            return instance;
          }}
        />
      ) : (
        <div className={folder ? 'home-folder' : 'home-folder-none'}>
          <button onClick={() => setOpen(true)}>
            <img
              className='home-folder-img'
              src='images/folder.png'
              alt='folder'
            />
          </button>
          <div className='home-folder-name'>이예은</div>
          <Popup open={open} setOpen={setOpen} />
        </div>
      )}

      {/* <div className='name-wrapper'>
        <button
          className={folder ? 'light moved' : 'light'}
          onClick={() => setFolder(!folder)}
        >
          {showIntro ? 'Go to 2' : 'Back to 1'}
        </button>
        {!showIntro && (
          <img
            className={folder ? 'home-click disappear' : 'home-click'}
            src='images/cursor.png'
            alt='click'
          />
        )}
      </div>

      <button
        onClick={() => setShowIntro(!showIntro)}
        className='toggle-button'
      >
        {showIntro ? 'Switch to 2' : 'Switch to 1'}
      </button> */}
    </TypeItStyled>
  );
}
