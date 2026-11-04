import Image from 'next/image';

const CONTACTS = [
  { icon: '/images/icon/address.png', alt: '주소', text: 'Songdo-dong, Yeonsu-gu, Incheon,' },
  { icon: '/images/icon/phone.png', alt: '번호', text: '+82 10 3779 5684' },
  { icon: '/images/icon/mail.png', alt: '메일', text: 'thsudkcla7@naver.com' },
];

export default function Footer() {
  return (
    <div className='bg-[#f5f5f7] px-0 py-[4em] max-[801px]:p-8'>
      <div className='flex justify-center gap-20 max-[801px]:flex-col max-[801px]:gap-[10px]'>
        {CONTACTS.map(({ icon, alt, text }) => (
          <div key={alt} className='flex w-[210px] items-center gap-[15px] text-left'>
            <Image
              src={icon}
              alt={alt}
              width={60}
              height={60}
              className='box-border w-[60px] rounded-[100%] bg-[#45444414] p-[10px]'
            />
            <div className='text-[16px]'>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
