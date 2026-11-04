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

  return (
    <aside
      className={`main-aside ${scrolled ? 'scrolled' : ''} ${isOn ? 'on' : ''}`}
    >
      <div className='aside-tab'>
        <a className='link-btn' href={LINKS.github} {...externalLinkProps}>
          Github
        </a>
        <a className='link-btn' href={LINKS.blog} {...externalLinkProps}>
          Blog
        </a>
        <div className='fixed-tab'>
          {MAIN_SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              className={activeId === id ? 'active' : ''}
              onClick={() => onTabClick(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className='aside-info'>
        <Image src='/images/main/logo.webp' alt='LYE' width={597} height={501} />
        <div>thsudkcla7@naver.com</div>
        <p>Last update:2025/03</p>
      </div>
    </aside>
  );
}
