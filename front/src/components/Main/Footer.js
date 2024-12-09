import React from 'react';
import { FooterStyled } from './styled';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterStyled>
      <div className='footer-my'>
        <div className='my-info'>
          <img
            src={process.env.PUBLIC_URL + '/images/icon/address.png'}
            alt='주소'
          />
          <div>Songdo-dong, Yeonsu-gu, Incheon,</div>
        </div>
        <div className='my-info'>
          <img
            src={process.env.PUBLIC_URL + '/images/icon/phone.png'}
            alt='번호'
          />
          <div>+82 10 3779 5684</div>
        </div>
        <div className='my-info'>
          <img
            src={process.env.PUBLIC_URL + '/images/icon/mail.png'}
            alt='메일'
          />
          <div>thsudkcla7@naver.com</div>
        </div>
      </div>

      <div className='footer-links'>
        <button onClick={() => navigate(`/main`)}>Home</button>
        <button onClick={() => navigate(`/project`)}>Project</button>
        <button onClick={() => window.open('https://yeeeon.tistory.com/')}>
          Blog
        </button>
        <button onClick={() => window.open('https://github.com/yeeun426')}>
          Github
        </button>
      </div>

      <div>Copyright ⓒ2024: Designed by Yeeun</div>
    </FooterStyled>
  );
}

export default Footer;
