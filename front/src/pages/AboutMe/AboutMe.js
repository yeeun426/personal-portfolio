import React, { useEffect, useRef } from 'react';
import { AboutStyled } from './style';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.set('.chat', { opacity: 0, y: 40 });

    const trigger = ScrollTrigger.batch('.chat', {
      id: 'aboutMeTrigger', // ID 부여
      batchMax: 1,
      onEnter: (batch) => {
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.4, duration: 0.8 });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, { opacity: 0, y: 40, stagger: 0.4, duration: 0.8 });
      },
      start: 'top 70%',
      markers: false,
    });

    return () => {
      ScrollTrigger.getById('aboutMeTrigger')?.kill(); // 특정 트리거만 제거
    };
  }, []);

  return (
    <AboutStyled ref={containerRef}>
      <ul>
        <li className='otherChat chat'>
          <img
            src={process.env.PUBLIC_URL + '/images/icon/profile.png'}
            alt='프로필'
          />
          <div>이예은에 대해서 소개해주세요! 👀</div>
        </li>
        <li className='chat me'>안녕하세요 !</li>
        <li className='chat me'>자바스크립트와 연애(🥰)하고</li>
        <li className='chat me'>
          타입스크립트와 썸(😘)타는 프론트엔드 개발자 이예은입니다.
        </li>
        <img className='chat me' src='images/main/profile.webp' alt='yeeun' />
        <li className='chat me'>
          꾸준하게 빈 틈을 채워나가는 "성실함"을 가지고 있습니다.
        </li>
        <li className='chat me'>
          사용자들의 진짜 필요를 깊이 고민하고, <br />그 기대를 뛰어넘는 가치를
          제공하는 개발자가 되겠습니다.🫡🫡
        </li>
      </ul>
    </AboutStyled>
  );
}

export default AboutMe;
