import { PopupStyled } from './styled';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Email from '../../components/Email/Email';

export default function Popup({ open, setOpen }) {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  return (
    <div className='mainIntro-wrapper'>
      <PopupStyled open={open}>
        <div className='popup-left'>
          <div className='pl-btn'>
            <button
              onClick={() => setOpen(false)}
              className='popup-close'
              title='Close'
            ></button>
            <button
              className='popup-down'
              onClick={() => navigate(`/main`)}
              title='Learn more'
            ></button>
            <button
              className='popup-enlarge'
              onClick={() => window.location.reload()}
              title='Back to the beginning'
            ></button>
          </div>
          <div className='popup-favorite'>
            <div className='pf-title'>즐겨찾기</div>
            <div>
              <button>🏠 home</button>
              <button>🙋🏼‍♀️ about me</button>
              <button>🖥️ project</button>
              <button
                onClick={() => window.open('https://github.com/yeeun426')}
              >
                ✅ github
              </button>
              <button
                onClick={() => window.open('https://yeeeon.tistory.com/')}
              >
                📂 tistory
              </button>
            </div>
          </div>
        </div>
        <div className='popup-right'>
          <div className='pr-top'>
            <button>
              <img src='images/popupHeader.png' alt='header' />
            </button>
          </div>
          <div className='popup-content'>
            <div className='pc-left'>
              <div className='pcl-title'>
                <div>My name is</div>
                <div className='pcl-title-name'>Ye-eun</div>
              </div>

              <div className='pcl-txt'>
                안녕하세요.
                <br />
                꾸준하게 빈틈을 채워가고 있습니다.
                <br /> 성장하는 개발자 이예은입니다.
              </div>

              <div className='pcl-btns'>
                <Link to='/main'>
                  <button className='pcl-btn-learn'>Learn More 〉</button>
                </Link>
                <button
                  className='pcl-btn-contact'
                  onClick={() => setModal(!modal)}
                >
                  Contact Me 〉
                </button>
              </div>
              {modal && (
                <Email isOpen={modal} onClose={() => setModal(false)} />
              )}
            </div>
            <div className='pc-right'>
              <img src='images/myimg.png' alt='yeeun' />
            </div>
          </div>
        </div>
      </PopupStyled>
    </div>
  );
}
