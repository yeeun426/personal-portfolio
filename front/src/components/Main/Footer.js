import React from 'react';
import { FooterStyled } from './styled';

function Footer() {
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
        <div>Home</div>
        <div>Project</div>
        <div>Github</div>
        <div>Blog</div>
      </div>

      <div>Copyright ⓒ2024: Designed by Yeeun</div>
    </FooterStyled>
  );
}

export default Footer;
