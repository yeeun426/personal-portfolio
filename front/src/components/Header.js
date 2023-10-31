import { HeaderStyled } from '../styles/ComponentStyled.js';

export default function Header() {
  return (
    <HeaderStyled>
      <div className='header-left'>
        <img src='images/mail.png' alt='mail' />
        <div>thsudkcla7@naver.com</div>
      </div>
      <img className='header-logo' src='images/logo.png' alt='yeeun' />
      <div className='header-right'>
        <div>About</div>
        <div>Portfolio</div>
        <div>Blog</div>
        <div>Contact</div>
      </div>
    </HeaderStyled>
  );
}
