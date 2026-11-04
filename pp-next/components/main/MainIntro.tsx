'use client';

import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { IoMdMenu } from 'react-icons/io';
import Image from 'next/image';
import Sidebar, { MAIN_SECTIONS, scrollToSection } from './Sidebar';

// 기존 React 버전 components/Main/MainIntro.js + MainYeEun.js
// 반응형 기준: max-[1024px] = 태블릿(1023px 이하), max-[768px] = 모바일(767px 이하)
export default function MainIntro() {
  const [isOn, setIsOn] = useState(false);

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
          프론트엔드 개발자 <strong className='font-black'>이예은</strong>입니다.
        </h2>
        <p className='text-[1.25rem] [font-family:var(--font-noto-sans-kr)]'>
          <strong className='text-[20px] font-bold'>꾸준하게</strong> 빈틈을{' '}
          <strong className='text-[20px] font-bold'>채워나가는</strong> 개발자입니다.
          <br />
          사용자가 필요로 하는 것을{' '}
          <strong className='text-[20px] font-bold'>한발 먼저</strong> 고민하겠습니다.
        </p>
        <Image
          src='/images/main/leeyeeun.webp'
          alt='leeyeeun'
          width={3728}
          height={2924}
          sizes='(max-width: 1023px) 100vw, 80vw'
          preload
          className='h-[70%] w-auto max-[768px]:h-[50%]'
        />
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
