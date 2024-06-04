import { HeaderStyled } from './styled';
import mail from '../../assets/mail.png';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <HeaderStyled>
      <div className='header-left'>
        <img src={mail} alt='mail' />
        <div>thsudkcla7@naver.com</div>
      </div>
      <Link to='/main'>
        <img className='header-logo' src={logo} alt='yeeun' />
      </Link>
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
