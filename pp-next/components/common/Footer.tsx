import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={`${styles.root} Footer`}>
      <div className='footer-my'>
        <div className='my-info'>
          <Image src='/images/icon/address.png' alt='주소' width={60} height={60} />
          <div>Songdo-dong, Yeonsu-gu, Incheon,</div>
        </div>
        <div className='my-info'>
          <Image src='/images/icon/phone.png' alt='번호' width={60} height={60} />
          <div>+82 10 3779 5684</div>
        </div>
        <div className='my-info'>
          <Image src='/images/icon/mail.png' alt='메일' width={60} height={60} />
          <div>thsudkcla7@naver.com</div>
        </div>
      </div>
    </div>
  );
}
