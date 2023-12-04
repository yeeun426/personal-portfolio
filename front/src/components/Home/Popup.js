import { PopupStyled } from './styled';
import { Link } from 'react-router-dom';

export default function Popup({ setOpen }) {
  return (
    <div className='mainIntro-wrapper'>
      <PopupStyled>
        <div className='popup-left'>
          <div className='pl-btn'>
            <button
              onClick={() => setOpen(false)}
              className='popup-close'
            ></button>
            <button className='popup-down'></button>
            <button
              className='popup-enlarge'
              onClick={() => setOpen(false)}
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
                꾸준하게 빈틈을 채워가며 성장하는 개발자 이예은입니다.
              </div>

              <div className='pcl-btns'>
                <Link to='/main'>
                  <button className='pcl-btn-learn'>Learn More 〉</button>
                </Link>
                <a href='mailto:thsudkcla7@naver.com'>
                  <button className='pcl-btn-contact'>Contact Me 〉</button>
                </a>
              </div>
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
