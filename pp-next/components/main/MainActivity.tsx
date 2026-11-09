import { activities } from '@/constants/activity';
import DetailLink from './DetailLink';
import SectionTitle from './SectionTitle';

/** 활동 섹션 (사이드 프로젝트, 동아리, 봉사) — 세로 타임라인 */
export default function MainActivity() {
  return (
    <div className='bg-[#f5f5f7]'>
      <div className='mx-auto box-border w-full max-w-[1100px] px-6 py-32 break-keep max-[801px]:py-20 min-[1025px]:pl-[max(24px,calc(290px-(100vw-1100px)/2))]'>
        <SectionTitle en='Activity' ko='활동' />
        <ol className='relative m-0 ml-[7px] list-none border-l-2 border-[#d2d2d7] p-0'>
          {activities.map((item) => (
            <li key={item.company} className='relative pb-14 pl-12 text-left last:pb-0 max-[501px]:pl-8'>
              {/* 타임라인 점 */}
              <span className='absolute top-[6px] left-[-9px] h-4 w-4 rounded-full border-[3px] border-[#f5f5f7] bg-[#c8acfa] shadow-[0_0_0_2px_#c8acfa]' />
              <div className='flex flex-wrap items-center gap-3 text-[16px] text-[#6e6e73]'>
                {item.period}
                <span className='rounded-[20px] bg-white px-[12px] py-[3px] text-[13px] text-[#8e6bd6]'>
                  {item.tag}
                </span>
              </div>
              <h3 className='mt-2 mb-1 text-[26px] font-bold text-[#1d1d1f]'>{item.company}</h3>
              <div className='text-[18px] text-[#424245]'>
                {item.description}
                {item.techStack && (
                  <span className='text-[#86868b]'> · {item.techStack.join(', ')}</span>
                )}
              </div>
              {item.tasks.length > 0 && (
                <ul className='m-0 mt-4 flex flex-col gap-2 pl-5'>
                  {item.tasks.map((task) => (
                    <li key={task} className='list-disc text-[17px] leading-[1.6] text-[#424245]'>
                      {task}
                    </li>
                  ))}
                </ul>
              )}
              {item.projectId && <DetailLink projectId={item.projectId} className='mt-5' />}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
