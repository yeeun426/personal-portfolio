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
          <div className={folder ? 'name-wrapper moved' : 'name-wrapper'}>
            <button className='light' onClick={() => setFolder(true)}>
              Yeeun
            </button>
          </div>
          <span className={folder && 'disappear'}>Web developer.</span>
          <span className={folder && 'disappear'}>welcome</span>
        </div>
        {/* {!open ? (
          <>
            <div className='home-folder'>
              <button onClick={() => setOpen(true)}>
                <img
                  className='home-folder-img'
                  src='images/folder.png'
                  alt='folder'
                />
              </button>
              <div className='home-folder-name'>이예은</div>
            </div>
            <div className='home-txt'>
              <span>Hello!</span>
              <span>I'm</span>
              <span class='light'>Yeeun</span>
              <span>Web developer.</span>
              <span>welcome</span>
            </div>
          </>
        ) : (
          <Popup setOpen={setOpen} />
        )} */}
      </div>
    </HomeStyled>
  );
}
