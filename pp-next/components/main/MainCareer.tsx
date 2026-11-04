'use client';

import { useEffect, useRef, useState } from 'react';
import { careers } from '@/constants/career';
import {
  card,
  cardGray,
  cardGrayRight,
  cardItem,
  cardList,
  cardListItem,
  cardName,
  cardSection,
  cardSub,
  cardTag,
  cardWrapper,
} from './cardStyles';

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
    <div className={cardSection}>
      <div className={`${cardWrapper} min-h-auto pt-32 pb-0`}>
        {careers.map((career, index) => (
          <div
            key={career.company}
            ref={(el) => {
              componentsRef.current[index] = el;
            }}
            data-index={index}
            className={`aboutme-list career ${centerIdx === index ? 'active' : ''} ${card(
              centerIdx === index
            )}`}
          >
            <div className={cardTag}>#Career</div>
            <div className={cardItem}>
              <div>
                {career.periodIcon} {career.period}
              </div>
              <h4 className={cardName}>{career.company}</h4>
              <div className={cardSub}>{career.description}</div>
              <div className='text-[16px] text-[#6e6e73]'>
                {career.techStack.join(' · ')}
              </div>
            </div>
            <div
              className={`${cardItem} ${cardGray} ${cardGrayRight} flex items-center`}
            >
              <ul className={cardList}>
                {career.tasks.map((task) => (
                  <li key={task} className={cardListItem}>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
