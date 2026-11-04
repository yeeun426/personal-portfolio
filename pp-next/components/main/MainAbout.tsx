'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { AboutStyled } from './MainAbout.styles';

gsap.registerPlugin(ScrollTrigger);

export default function MainAbout() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 이 섹션 안의 .chat 요소에만 적용 (언마운트 시 함께 정리)
    const ctx = gsap.context(() => {
      gsap.set('.chat', { opacity: 0, y: 40 });

      ScrollTrigger.batch('.chat', {
        batchMax: 1,
        onEnter: (batch) => {
          gsap.to(batch, { opacity: 1, y: 0, stagger: 0.4, duration: 0.8 });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, { opacity: 0, y: 40, stagger: 0.4, duration: 0.8 });
        },
        start: 'top 70%',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <AboutStyled ref={containerRef}>
      <ul>
        <li className='otherChat chat'>
          <Image src='/images/icon/profile.png' alt='프로필' width={77} height={77} />
          <div>이예은에 대해서 소개해주세요! 👀</div>
        </li>
        <li className='chat me'>안녕하세요 !</li>
        <li className='chat me'>자바스크립트와 연애(🥰)하고</li>
        <li className='chat me'>
          타입스크립트와 썸(😘)타는 프론트엔드 개발자 이예은입니다.
        </li>
        <Image
          className='chat me'
          src='/images/main/profile.webp'
          alt='yeeun'
          width={1033}
          height={1328}
          sizes='250px'
        />
        <li className='chat me'>
          꾸준하게 빈 틈을 채워나가는 &quot;성실함&quot;과 &quot;엉덩이 힘&quot;을
          가지고 있습니다.
        </li>
        <li className='chat me'>
          사용자들의 진짜 필요를 깊이 고민하고, <br />그 기대를 뛰어넘는 가치를
          제공하는 개발자가 되겠습니다.🫡🫡
        </li>
      </ul>
    </AboutStyled>
  );
}
