import { careers } from '@/constants/career';
import DetailLink from './DetailLink';
import SectionTitle from './SectionTitle';

/** 경력 섹션 — 회사별 큰 블록 (왼쪽 회사 정보 / 오른쪽 번호 매긴 업무) */
export default function MainCareer() {
  return (
    <div className='bg-white'>
      <div className='mx-auto box-border w-full max-w-[1100px] px-6 py-32 break-keep max-[801px]:py-20 min-[1025px]:pl-[max(24px,calc(290px-(100vw-1100px)/2))]'>
        <SectionTitle en='Career' ko='경력' />
        <ul className='m-0 list-none border-t-2 border-[#1d1d1f] p-0'>
          {careers.map((item) => {
            const current = item.period.includes('현재');
            return (
              <li
                key={item.company}
                className='grid grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 border-b border-[#d2d2d7] py-14 max-[801px]:grid-cols-1 max-[801px]:gap-8 max-[801px]:py-10'
              >
                <div className='text-left'>
                  <div className='flex items-center gap-3 text-[16px] text-[#6e6e73]'>
                    {item.period}
                    {current && (
                      <span className='rounded-[20px] bg-[#c8acfa] px-[12px] py-[3px] text-[13px] font-bold text-white'>
                        재직중
                      </span>
                    )}
                  </div>
                  <h3 className='mt-3 mb-2 text-[length:max(calc(1rem+1.5vw),34px)] leading-[1.2] font-extrabold text-[#1d1d1f]'>
                    {item.company}
                  </h3>
                  <div className='text-[20px] text-[#1d1d1f]'>{item.description}</div>
                  {item.techStack && (
                    <div className='mt-6 flex flex-wrap gap-2'>
                      {item.techStack.map((tech) => (
                        <span
                          key={tech}
                          className='rounded-[8px] bg-[#f5f5f7] px-[10px] py-[4px] text-[14px] text-[#424245]'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.careerSlug ? (
                    <DetailLink href={`/career/${item.careerSlug}`} label='경력기술서 보기' className='mt-6' />
                  ) : (
                    item.projectId && <DetailLink projectId={item.projectId} className='mt-6' />
                  )}
                </div>
                <ol className='m-0 flex list-none flex-col gap-6 p-0 text-left'>
                  {item.tasks.map((task, i) => (
                    <li key={task} className='flex gap-5 text-[18px] leading-[1.6] text-[#1d1d1f]'>
                      <span className='shrink-0 font-bold text-[#c8acfa] tabular-nums'>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
