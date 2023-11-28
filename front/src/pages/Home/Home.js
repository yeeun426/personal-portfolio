import { HomeStyled } from '../../styles/HomeStyled';
import { React, useState } from 'react';
import Popup from '../../components/Home/Popup';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <HomeStyled>
      <div className='home-wrapper'>
        {!open ? (
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
        )}
      </div>
    </HomeStyled>
  );
}
