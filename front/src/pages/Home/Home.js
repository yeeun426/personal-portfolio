import { HomeStyled } from './style';
import React, { useState } from 'react';
import Popup from '../../components/Home/Popup';

export default function Home() {
  const [open, setOpen] = useState(false);
  const [folder, setFolder] = useState(false);

  return (
    <HomeStyled>
      <div className='home-wrapper'>
        <div className='home-txt'>
          <span className={folder && 'disappear'}>Hello!</span>
          <span className={folder && 'disappear'}>I'm</span>
          {!open && (
            <div className='name-wrapper'>
              <button
                className={folder ? 'light moved' : 'light'}
                onClick={() => setFolder(!folder)}
              >
                Yeeun
              </button>
              <img
                className={folder ? 'home-click disappear' : 'home-click'}
                src='images/cursor.png'
                alt='click'
              />
            </div>
          )}
          <span className={folder && 'disappear'}>Web developer.</span>
          <span className={folder && 'disappear'}>welcome</span>
        </div>

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

        {open && <Popup setOpen={setOpen} />}
      </div>
    </HomeStyled>
  );
}
