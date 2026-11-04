'use client';

import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';
import Image from 'next/image';
import { LINKS, externalLinkProps } from '@/constants/links';

/** 사이드바에서 이동할 메인 페이지 섹션 (app/page.tsx 의 section id 와 일치) */
export const MAIN_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'career', label: 'Career' },
  { id: 'education', label: 'Education' },
  { id: 'project', label: 'Project' },
] as const;

export const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// 탭 링크/버튼: 마우스를 올리면 아래 밑줄이 늘어남
const tabItem =
  "relative p-0 before:absolute before:bottom-0 before:h-[3px] before:w-0 before:[transform:translateX(0%)] before:bg-[#cccccc] before:transition-all before:duration-300 before:ease-[ease] before:content-[''] hover:before:w-[90%]";

interface SidebarProps {
  isOn: boolean;
  setIsOn: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOn, setIsOn }: SidebarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // 첫 화면을 지나면 섹션 탭을 왼쪽 위에 고정 (데스크톱)
      const triggerPosition = window.innerHeight - 100;
      if (window.scrollY > triggerPosition && window.innerWidth > 1024) {
        setScrolled(true);
        setIsOn(false);
      } else {
        setScrolled(false);
      }

      // 화면 위쪽 절반에 들어온 섹션을 활성 탭으로 표시
      MAIN_SECTIONS.forEach(({ id }) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        if (
          rect &&
          rect.top >= 0 &&
          rect.top < window.innerHeight / 2 &&
          window.innerWidth > 1100
        ) {
          setActiveId(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsOn]);

  const onTabClick = (id: string) => {
    setIsOn(false);
    scrollToSection(id);
  };

  // 태블릿/모바일: 화면 왼쪽 밖에 있다가 메뉴 버튼을 누르면(isOn) 들어옴
  const asideClass = [
    'main-aside z-[100] flex h-screen w-[20vw] max-w-[340px] flex-col justify-between px-12 py-16 bg-[#f1f1f191]',
    'max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:items-center max-[1024px]:gap-8 max-[1024px]:transition-all max-[1024px]:duration-300 max-[1024px]:ease-[ease]',
    isOn
      ? 'on max-[1024px]:left-0 max-[1024px]:w-[30vw] max-[1024px]:min-w-[210px] max-[1024px]:px-4 max-[1024px]:py-8'
      : 'max-[1024px]:left-[-100%] max-[1024px]:w-full',
  ].join(' ');

  // 스크롤 후(데스크톱) 섹션 탭은 왼쪽 위에 고정
  const fixedTabClass = scrolled
    ? 'fixed-tab fixed top-[30px] left-12 z-10 flex flex-col gap-[10px] text-[40px] [font-family:var(--font-noto-sans-kr)] [text-align-last:left]'
    : 'fixed-tab z-10 flex flex-col gap-[30px] text-[30px] [text-align-last:left]';

  return (
    <aside className={asideClass}>
      <div className='flex flex-col gap-[30px] text-[30px] [text-align-last:left]'>
        <a className={`link-btn ${tabItem}`} href={LINKS.github} {...externalLinkProps}>
          Github
        </a>
        <a className={`link-btn ${tabItem}`} href={LINKS.blog} {...externalLinkProps}>
          Blog
        </a>
        <div className={fixedTabClass}>
          {MAIN_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              className={[
                tabItem,
                activeId === id ? 'active' : '',
                scrolled ? 'font-bold' : '',
                scrolled ? (activeId === id ? 'text-[#9778c9]' : 'text-[#cccccc]') : '',
              ].join(' ')}
              onClick={() => onTabClick(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center gap-[5px] text-[18px]'>
        <Image
          src='/images/main/logo.webp'
          alt='LYE'
          width={597}
          height={501}
          className='h-auto w-[100px]'
        />
        <div>thsudkcla7@naver.com</div>
        <p>Last update:2025/03</p>
      </div>
    </aside>
  );
}
