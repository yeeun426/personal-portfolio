'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

// 말풍선 공통 (.chat 은 gsap 애니메이션 대상 선택자로도 사용)
const bubble =
  'chat max-w-[600px] rounded-[40px] px-8 py-6 text-left text-[18px] leading-[1.5] whitespace-pre-line break-normal text-[#ced4da]';
// 내 말풍선 (오른쪽, 파란색)
const myBubble = `${bubble} self-end bg-[#0078ff]`;

const MY_MESSAGES = [
  '안녕하세요 !',
  '자바스크립트와 연애(🥰)하고',
  '타입스크립트와 썸(😘)타는 프론트엔드 개발자 이예은입니다.',
];

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
    <div className='bg-white' ref={containerRef}>
      <ul className='flex flex-col gap-5 px-[20%] py-[5%] max-[1024px]:px-[10%]'>
        <li className={`${bubble} flex gap-[30px] max-[1024px]:p-0`}>
          <Image
            src='/images/icon/profile.png'
            alt='프로필'
            width={77}
            height={77}
            className='h-[77px] w-[77px]'
          />
          <div className='max-w-[550px] rounded-[40px] bg-[#353535] px-8 py-6 text-left text-[18px] leading-[1.5] whitespace-pre-line break-keep text-[#ced4da]'>
            이예은에 대해서 소개해주세요! 👀
          </div>
        </li>
        {MY_MESSAGES.map((message) => (
          <li key={message} className={myBubble}>
            {message}
          </li>
        ))}
        <Image
          className={`${myBubble} h-fit w-[250px] object-contain`}
          src='/images/main/profile.webp'
          alt='yeeun'
          width={1033}
          height={1328}
          sizes='250px'
        />
        <li className={myBubble}>
          꾸준하게 빈 틈을 채워나가는 &quot;성실함&quot;과 &quot;엉덩이 힘&quot;을
          가지고 있습니다.
        </li>
        <li className={myBubble}>
          사용자들의 진짜 필요를 깊이 고민하고, <br />그 기대를 뛰어넘는 가치를
          제공하는 개발자가 되겠습니다.🫡🫡
        </li>
      </ul>
    </div>
  );
}
