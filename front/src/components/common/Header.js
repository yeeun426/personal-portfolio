import { HeaderStyled } from './styled';
import mail from '../../assets/mail.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <HeaderStyled className='header'>
      <div className='header-left'>
        <img src={mail} alt='mail' />
        <div>thsudkcla7@naver.com</div>
      </div>
      <Link to='/main'>
        <img
          className='header-logo'
          src={process.env.PUBLIC_URL + '/images/main/logo.webp'}
          alt='leeyeeun'
        />
      </Link>
      <div className='header-right'>
        <button onClick={() => navigate(`/main`)}>About</button>
        <button onClick={() => window.open('https://yeeun426.github.io/')}>
          <div>Blog</div>
        </button>
        <button onClick={() => window.open('https://github.com/yeeun426')}>
          Github
        </button>
      </div>
    </HeaderStyled>
  );
}
