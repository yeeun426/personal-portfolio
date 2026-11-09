import Image from 'next/image';
import { toPublicPath, type Troubleshooting as Item } from '@/types/project';
import RichText from './RichText';

const label = 'text-[12px] font-bold tracking-[0.08em] text-[#86868b] uppercase';

/** 트러블슈팅 카드 — 제목 → 배경(기능·Action·UI) → ① WHY ② HOW ③ RESULT 순서로 위에서 아래로 읽힘 */
export default function Troubleshooting({ items, heading }: { items: Item[]; heading: string }) {
  return (
    <section className='mx-auto mt-20 box-border w-full max-w-[1000px] px-12 max-[801px]:px-6'>
      <h3 className={heading}>Troubleshooting</h3>
      <div className='flex flex-col gap-8'>
        {items.map((item, i) => (
          <Card key={item.title} item={item} index={i + 1} />
        ))}
      </div>
    </section>
  );
}

function Card({ item, index }: { item: Item; index: number }) {
  const steps: [string, string][] = [
    ['WHY', item.why],
    ['HOW', item.how],
    [item.resultLabel ?? 'RESULT', item.result],
  ];

  return (
    <article className='rounded-[24px] border border-[#e5e5ea] bg-white p-10 text-left max-[801px]:p-6 max-[501px]:rounded-none max-[501px]:border-x-0 max-[501px]:border-b-0 max-[501px]:px-0 max-[501px]:pt-8 max-[501px]:pb-0'>
      {/* 헤더: 어느 기능에서 + 무엇을 해결했나 */}
      <p className='m-0 text-[13px] font-semibold text-[#8e5cf5]'>
        #{String(index).padStart(2, '0')} · {item.feature}
      </p>
      <h4 className='m-0 mt-3 text-[22px] leading-[1.5] font-bold text-[#1d1d1f] max-[501px]:text-[19px]'>
        <span className='box-decoration-clone bg-[linear-gradient(transparent_58%,#fff1a8_58%)] px-[2px]'>
          {item.title}
        </span>
      </h4>

      {/* 배경: 기능 설명 · Action · UI 이미지 */}
      <div
        className={`mt-7 grid gap-6 rounded-[16px] bg-[#f5f5f7] p-6 max-[501px]:p-5 ${
          item.image ? 'grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[801px]:grid-cols-1' : ''
        }`}
      >
        <div className='flex flex-col gap-4'>
          {item.featureDesc && (
            <p className='m-0 text-[14px] leading-[1.65] text-[#424245]'>{item.featureDesc}</p>
          )}
          {!!item.actions?.length && (
            <div className='flex flex-col gap-2'>
              <span className={label}>Action</span>
              <ul className='m-0 flex flex-col gap-1 pl-5'>
                {item.actions.map((a) => (
                  <li key={a} className='list-disc text-[14px] leading-[1.6] text-[#424245] marker:text-[#b9a4f5]'>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {item.image && (
          <figure className='m-0 flex flex-col gap-2'>
            <Image
              src={toPublicPath(item.image.src)}
              alt={`${item.feature} ${item.image.label ?? 'UI'}`}
              width={1709}
              height={944}
              sizes='(max-width: 800px) 90vw, 420px'
              className='h-auto w-full rounded-[12px] border border-[#e5e5ea] bg-white'
            />
            <figcaption className={label}>{item.image.label ?? 'UI'}</figcaption>
          </figure>
        )}
      </div>

      {/* 단계: 번호 + 세로 연결선 (모바일은 연결선 없이 내용 전체 폭) */}
      <ol className='m-0 mt-9 flex list-none flex-col p-0'>
        {steps.map(([name, text], i) => {
          const last = i === steps.length - 1;
          return (
            <li key={name}>
              <div className='flex items-center gap-4'>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white ${
                    last ? 'bg-[#8e5cf5]' : 'bg-[#1d1d1f]'
                  }`}
                >
                  {i + 1}
                </span>
                <span className='text-[14px] font-extrabold tracking-[0.06em] text-[#1d1d1f]'>{name}</span>
              </div>
              <div
                className={`ml-[13.5px] flex min-w-0 flex-col gap-3 pt-3 pl-[30px] max-[501px]:ml-0 max-[501px]:pl-0 ${
                  last ? '' : 'border-l border-[#e5e5ea] pb-9 max-[501px]:border-l-0 max-[501px]:pb-8'
                }`}
              >
                <div className={last ? 'rounded-[12px] bg-[#f3edfe] px-5 py-4 max-[501px]:px-4' : ''}>
                  <RichText text={text} className='text-[15px] leading-[1.75] text-[#424245]' />
                </div>
                {i === 1 && item.diagram && (
                  <Image
                    src={toPublicPath(item.diagram)}
                    alt={`${item.title} 다이어그램`}
                    width={1709}
                    height={944}
                    sizes='(max-width: 800px) 90vw, 820px'
                    className='h-auto w-full rounded-[12px] border border-[#e5e5ea]'
                  />
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {item.note && (
        <RichText
          text={item.note}
          className='mt-8 border-t border-[#e5e5ea] pt-5 text-[14px] text-[#6e6e73]'
        />
      )}
    </article>
  );
}
