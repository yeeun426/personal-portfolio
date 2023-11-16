import { AboutMeStyled } from '../../styles/MainStyled';
import { Link } from 'react-router-dom';

export default function Popup() {
  return (
    <div className='mainIntro-wrapper'>
      <AboutMeStyled>
        <div className='intro-wrapper-top'>
          <img src='images/minus.png' alt='minimize' />
          <div className='iwp-img-popup'>
            <img src='images/popup.png' alt='popup' />
          </div>
          <img src='images/cancel.png' alt='cancle' />
        </div>
        <div className='intro-wrapper'>
          <div className='intro-wrapper-left'>
            <div className='iwl-title'>
              <div>My name is</div>
              <div className='iwl-title-name'>Ye-eun</div>
            </div>

            <div className='iwl-txt'>
              안녕하세요.
              <br />
              꾸준하게 빈틈을 채워가며 성장하는 개발자 이예은입니다.
            </div>

            <div className='iwl-btns'>
              <Link to='/'>
                <button className='iwl-btn-learn'>Learn More 〉</button>
              </Link>
              <button className='iwl-btn-contact'>Contact Me 〉</button>
            </div>
          </div>

          <div className='intro-wrapper-right'>
            <img src='images/myimg.png' alt='yeeun' />
          </div>
        </div>
      </AboutMeStyled>
    </div>
  );
}
