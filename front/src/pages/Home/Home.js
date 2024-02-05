import { HomeStyled } from './style';
import React, { useState, useEffect } from 'react';
import Popup from '../../components/Home/Popup';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState(false);
  const [name, setName] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [text, setText] = useState('');
  const content = "Hello\nI'm \n  \n Web developer. \n Welcome";
  let lineIndex = 0;
  const animationSpeed = 150;

  useEffect(() => {
    const interval = setInterval(() => {
      let txt = content[lineIndex++];
      setText((prevText) => prevText + (txt === '\n' ? '<br/>' : txt));
      if (lineIndex >= content.length) {
        clearInterval(interval);
      }
    }, animationSpeed);

    if (content.length !== 0) {
      setTimeout(function () {
        setName(true);
      }, 6500);

      setTimeout(function () {
        setOpacity(true);
      }, 7000);
    }

    return () => clearInterval(interval);
  }, [content]);

  return (
    <HomeStyled>
      <div className='home-wrapper'>
        <div
          className={`home-txt ${opacity ? 'opacity' : ''} ${
            folder ? 'disappear' : ''
          }`}
          dangerouslySetInnerHTML={{ __html: text }}
        />
        {name && !open && (
          <div className='name-wrapper'>
            <button
              className={folder ? 'light moved' : 'light'}
              onClick={() => setFolder(!folder)}
            >
              Yeeun
            </button>
            {opacity && (
              <img
                className={folder ? 'home-click disappear' : 'home-click'}
                src='images/cursor.png'
                alt='click'
              />
            )}
          </div>
        )}
        <div className={folder ? 'home-folder' : 'home-folder-none'}>
          <button onClick={() => setOpen(true)}>
            <img
              className='home-folder-img'
              src='images/folder.png'
              alt='folder'
            />
          </button>
          <div className='home-folder-name'>이예은</div>
        </div>
        <Popup open={open} setOpen={setOpen} />
      </div>
    </HomeStyled>
  );
}
