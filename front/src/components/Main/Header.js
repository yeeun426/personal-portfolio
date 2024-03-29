import { HeaderStyled } from './styled';

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
        <button onClick={() => window.open('https://yeeeon.tistory.com/')}>
          <div>Blog</div>
        </button>
        <button onClick={() => window.open('https://github.com/yeeun426')}>
          Github
        </button>
      </div>
    </HeaderStyled>
  );
}
