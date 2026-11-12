'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { BsList, BsXLg } from 'react-icons/bs';
import Image from 'next/image';
import Sidebar, { MAIN_SECTIONS, scrollToSection } from './Sidebar';

/**
 * 사진 양옆 키워드 — PDF 표지처럼 "# 키워드 ── •" 지시선이 사진을 가리킴 (등장 순서 = 배열 순서)
 * top: 사진 영역 기준 세로 위치, bend: 위쪽 키워드는 선이 꺾여 내려가며 사진 쪽을 가리킴
 */
const KEYWORDS: { text: string; side: 'left' | 'right'; top: string; bend: boolean }[] = [
  // 긴 키워드는 여유 공간이 있는 오른쪽 아래, 짧은 키워드는 사이드바에 가까운 왼쪽 아래
  { text: '# 원인부터 파고들기', side: 'left', top: '6%', bend: true },
  { text: '# 사용자 중심 사고', side: 'right', top: '6%', bend: true },
  { text: '# 운영까지 책임', side: 'left', top: '30%', bend: false },
  { text: '# 숫자로 증명하는 개선', side: 'right', top: '30%', bend: false },
];

/** 지시선 + 끝점. 오른쪽 키워드는 좌우 반전 */
function Leader({ bend, flip }: { bend: boolean; flip: boolean }) {
  return (
    <svg
      width='110'
      height={bend ? 50 : 12}
      viewBox={`0 0 110 ${bend ? 50 : 12}`}
      fill='none'
      aria-hidden
      className={`shrink-0 overflow-visible max-[768px]:hidden ${flip ? '-scale-x-100' : ''}`}
    >
      <polyline
        points={bend ? '0,6 66,6 102,42' : '0,6 102,6'}
        stroke='#c7c7cc'
        strokeWidth='1'
      />
      <circle cx={102} cy={bend ? 42 : 6} r='4' fill='#c7c7cc' />
    </svg>
  );
}

// 기존 React 버전 components/Main/MainIntro.js + MainYeEun.js
// 반응형 기준: max-[1024px] = 태블릿(1023px 이하), max-[768px] = 모바일(767px 이하)
export default function MainIntro() {
  const [isOn, setIsOn] = useState(false);
  const photoRef = useRef<HTMLDivElement>(null);

  // 첫 화면이 뜨면 키워드가 하나씩 스르륵 등장
  useEffect(() => {
    if (!photoRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.intro-keyword',
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.15, delay: 0.6 }
      );
    }, photoRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative box-border flex h-screen bg-[image:linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.1)),url('/images/main/background.webp')] bg-cover bg-center bg-no-repeat max-[1024px]:block max-[1024px]:h-auto">
      <Sidebar isOn={isOn} setIsOn={setIsOn} />

      {/* 태블릿/모바일 메뉴 버튼 */}
      <button
        className='my-menu fixed top-4 right-4 z-[101] hidden h-10 w-10 items-center justify-center rounded-full border border-black/5 bg-white/80 text-[#1d1d1f] shadow-[0_2px_10px_rgba(0,0,0,0.08)] backdrop-blur-md transition-colors duration-200 hover:bg-white max-[1024px]:flex'
        onClick={() => setIsOn(!isOn)}
        aria-label={isOn ? '메뉴 닫기' : '메뉴 열기'}
        aria-expanded={isOn}
      >
        {isOn ? <BsXLg className='h-4 w-4' /> : <BsList className='h-5 w-5' />}
      </button>

      <div className='relative flex h-full w-[80vw] max-w-[calc(100%-340px)] flex-col items-center [justify-content:end] gap-[15px] break-keep max-[1024px]:m-auto max-[1024px]:h-screen max-[1024px]:w-full max-[1024px]:max-w-none max-[1024px]:px-8 max-[1024px]:pt-12 max-[1024px]:pb-0 max-[768px]:justify-center'>
        <h2 className='m-0 text-[length:clamp(28px,2.6vw,40px)] leading-[1.3] font-semibold tracking-[-0.02em] text-[#1d1d1f]'>
          프론트엔드 개발자 <span className='font-bold'>이예은</span>입니다.
        </h2>
        <p className='m-0 text-[length:clamp(16px,1.25vw,19px)] leading-[1.7] text-[#424245]'>
          꾸준하게 빈틈을 채워나가는 개발자입니다.
          <br />
          사용자가 필요로 하는 것을 한 발 먼저 고민하겠습니다.
        </p>
        <div
          ref={photoRef}
          className='relative mt-4 h-[62%] max-w-full aspect-[3728/2924] max-[768px]:h-auto max-[768px]:w-full'
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
          {/* 모바일은 사진과 겹치지 않게 지시선 없이 사진 아래에 나열 */}
          <ul className='m-0 list-none p-0 max-[768px]:mt-4 max-[768px]:flex max-[768px]:flex-wrap max-[768px]:justify-center max-[768px]:gap-x-2 max-[768px]:gap-y-2'>
            {KEYWORDS.map(({ text, side, top, bend }) => (
              // 지시선 끝점이 사진 가장자리(가로 34% / 66%)에 오도록 배치
              <li
                key={text}
                className={`intro-keyword absolute flex items-start gap-2 opacity-0 max-[768px]:static ${
                  side === 'left' ? 'right-[66%]' : 'left-[66%] flex-row-reverse'
                }`}
                style={{ top }}
              >
                {/* 보라색 배경 원 위에서도 읽히도록 반투명 흰 배경 */}
                <span className='-mt-[7px] rounded-full bg-white/75 px-2.5 py-[3px] text-[length:clamp(13px,1.15vw,17px)] leading-[20px] font-semibold whitespace-nowrap text-[#7c5cc4] backdrop-blur-sm max-[768px]:mt-0'>
                  {text}
                </span>
                <Leader bend={bend} flip={side === 'right'} />
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
