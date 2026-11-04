'use client';

import { useEffect, useRef, useState } from 'react';
import { careers } from '@/constants/career';
// Education 섹션 스타일 위에 경력 카드용 스타일을 덧씌움 (import 순서 유지)
import eduStyles from './MainEducation.module.css';
import styles from './MainCareer.module.css';

/**
 * 경력 섹션 — 기존 React 버전 Education 카드와 같은 UI
 * (화면 중앙에 온 카드만 선명하게 확대, 나머지는 흐리게)
 */
export default function MainCareer() {
  const componentsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [centerIdx, setCenterIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCenterIdx(Number((entry.target as HTMLElement).dataset.index));
          }
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    componentsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${eduStyles.root} ${styles.root}`}>
      <div className='aboutme-wrapper'>
        {careers.map((career, index) => (
          <div
            key={career.company}
            ref={(el) => {
              componentsRef.current[index] = el;
            }}
            data-index={index}
            className={`aboutme-list career ${
              centerIdx === index ? 'active' : ''
            }`}
          >
            <div className='aboutme-title'>#Career</div>
            <div className='aboutme-item p-5'>
              <div className='edu-date'>
                {career.periodIcon} {career.period}
              </div>
              <h4 className='edu-name'>{career.company}</h4>
              <div className='edu-sub'>{career.description}</div>
              <div className='career-stack'>{career.techStack.join(' · ')}</div>
            </div>
            <div className='aboutme-item p-5 bg-color'>
              <ul className='edu-desc'>
                {career.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
