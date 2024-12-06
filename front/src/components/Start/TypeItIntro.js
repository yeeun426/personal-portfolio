import TypeIt from 'typeit-react';
import React, { useEffect, useState } from 'react';
import { TypeItStyled } from './style';
import Popup from '../Home/Popup';
import styled from 'styled-components';

export default function TypeItIntro() {
  const [open, setOpen] = useState(false); // Popup 상태
  const [folder, setFolder] = useState(false);
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(true);
    }, 14000);

    return () => clearTimeout(timer);
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
            .exec(() => {
              const button = document.querySelector('.my-name');
              if (button) {
                button.addEventListener('click', () => {
                  setFolder(!folder);
                });
              }
            });

          return instance;
        }}
      />
      <button onClick={() => setFolder(!folder)} style={{ color: 'white' }}>
        button
      </button>
      {opacity && (
        <img
          className={folder ? 'home-click disappear' : 'home-click'}
          src='images/cursor.png'
          alt='click'
        />
      )}
      <button
        className={folder ? 'home-folder' : 'home-folder-none'}
        onClick={() => setOpen(true)}
      >
        <img class='home-folder-img' src='images/folder.png' alt='folder' />
        <div className='home-folder-name'>이예은</div>
      </button>
    </TypeItStyled>
  );
}
