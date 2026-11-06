'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Tooltip } from 'react-tooltip';
import { IoMdMenu } from 'react-icons/io';
import Image from 'next/image';
import Sidebar, { MAIN_SECTIONS, scrollToSection } from './Sidebar';

/**
 * 사진 주변에 떠오르는 키워드 (등장 순서 = 배열 순서)
 * pos: 사진 영역 기준 위치. 얼굴과 LEEYEEUN 글씨를 피해서 배치
 */
const KEYWORDS: { text: string; pos: string; tone: keyof typeof TONE }[] = [
  { text: '#성실함', pos: 'top-[10%] left-[14%]', tone: 'purple' },
  { text: '#엉덩이_힘', pos: 'top-[4%] right-[16%]', tone: 'blue' },
  { text: '#JavaScript와_연애🥰', pos: 'top-[30%] right-[0%]', tone: 'white' },
  { text: '#TypeScript와_썸😘', pos: 'top-[34%] left-[0%]', tone: 'white' },
  { text: '#사용자_중심', pos: 'bottom-[10%] right-[6%]', tone: 'purple' },
  { text: '#빈틈_채우기', pos: 'bottom-[6%] left-[8%]', tone: 'blue' },
];

const TONE = {
  purple: 'bg-[#a77fe8] text-white',
  blue: 'bg-[#5a6fd8] text-white',
  white: 'bg-white text-[#1d1d1f]',
};

// 기존 React 버전 components/Main/MainIntro.js + MainYeEun.js
// 반응형 기준: max-[1024px] = 태블릿(1023px 이하), max-[768px] = 모바일(767px 이하)
export default function MainIntro() {
  const [isOn, setIsOn] = useState(false);
  const photoRef = useRef<HTMLDivElement>(null);

  // 첫 화면이 뜨면 키워드가 하나씩 튕기듯 등장
  useEffect(() => {
    if (!photoRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.intro-keyword',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.45, ease: 'back.out(2.5)', stagger: 0.18, delay: 0.6 }
      );
    }, photoRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative box-border flex h-screen bg-[image:linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url('/images/main/background.webp')] bg-cover bg-center bg-no-repeat max-[1024px]:block max-[1024px]:h-auto">
      <Sidebar isOn={isOn} setIsOn={setIsOn} />

      {/* 태블릿/모바일 메뉴 버튼 */}
      <div className='box-border hidden h-[50px] w-[50px] rounded-[50%] bg-white p-[5px] shadow-[2px_2px_8px_#32323275] max-[1024px]:fixed max-[1024px]:top-[2.25rem] max-[1024px]:right-[3.25rem] max-[1024px]:z-[100] max-[1024px]:block'>
        <button className='my-menu h-full w-full' onClick={() => setIsOn(!isOn)}>
          <IoMdMenu className='h-[27px] w-[27px]' />
        </button>
        <Tooltip anchorSelect='.my-menu' place='left' content='menu' />
      </div>

      <div className='relative flex h-full w-[80vw] max-w-[calc(100%-340px)] flex-col items-center [justify-content:end] gap-[15px] break-keep max-[1024px]:m-auto max-[1024px]:h-screen max-[1024px]:w-full max-[1024px]:max-w-none max-[1024px]:px-8 max-[1024px]:pt-12 max-[1024px]:pb-0 max-[768px]:justify-center'>
        <h2 className='h1 text-black'>
          프론트엔드 개발자 <strong className='font-extrabold'>이예은</strong>입니다.
        </h2>
        <p className='text-[1.25rem] [font-family:var(--font-noto-sans-kr)]'>
          <strong className='text-[20px] font-bold'>꾸준하게</strong> 빈틈을{' '}
          <strong className='text-[20px] font-bold'>채워나가는</strong> 개발자입니다.
          <br />
          사용자가 필요로 하는 것을{' '}
          <strong className='text-[20px] font-bold'>한발 먼저</strong> 고민하겠습니다.
        </p>
        <div
          ref={photoRef}
          className='relative h-[70%] max-w-full aspect-[3728/2924] max-[768px]:h-auto max-[768px]:w-full'
        >
          <Image
            src='/images/main/leeyeeun.webp'
            alt='leeyeeun'
            width={3728}
            height={2924}
            sizes='(max-width: 1023px) 100vw, 80vw'
            preload
            className='h-full w-full'
          />
          <ul className='m-0 list-none p-0'>
            {KEYWORDS.map(({ text, pos, tone }, i) => (
              // 위치/등장은 li(gsap), 둥둥 떠 있는 효과는 span(css)
              <li key={text} className={`intro-keyword absolute ${pos} opacity-0`}>
                <span
                  className={`animate-float inline-block rounded-[999px] px-5 py-[10px] text-[17px] font-bold whitespace-nowrap shadow-[0_6px_16px_rgba(0,0,0,0.12)] motion-reduce:animate-none max-[1024px]:px-4 max-[1024px]:py-2 max-[1024px]:text-[14px] max-[501px]:px-3 max-[501px]:py-[5px] max-[501px]:text-[11px] ${TONE[tone]}`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button onClick={() => scrollToSection(MAIN_SECTIONS[0].id)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='animate-shake-vertical absolute bottom-[5%] left-1/2 z-[100] w-[50px] text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5'
          />
        </svg>
      </button>
    </div>
  );
}
