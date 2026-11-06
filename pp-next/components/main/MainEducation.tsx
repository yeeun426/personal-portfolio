import type { IconType } from 'react-icons';
import {
  SiCss,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiRedux,
  SiTypescript,
} from 'react-icons/si';
import { educations } from '@/constants/education';
import SectionTitle from './SectionTitle';

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const SKILL_GROUPS: { title: string; desc: string; skills: Skill[] }[] = [
  {
    title: 'Strong',
    desc: '실무와 프로젝트에서 주로 사용해요',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'React', icon: SiReact, color: '#61dafb' },
      { name: 'HTML5', icon: SiHtml5, color: '#e34f26' },
      { name: 'CSS', icon: SiCss, color: '#663399' },
    ],
  },
  {
    title: 'Knowledgeable',
    desc: '사용해 본 경험이 있어요',
    skills: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Redux', icon: SiRedux, color: '#764abc' },
      { name: 'Python', icon: SiPython, color: '#3776ab' },
      { name: 'Java', icon: SiOpenjdk, color: '#e76f00' },
    ],
  },
];

/** 교육 + 스킬 섹션 */
export default function MainEducation() {
  return (
    <div className='bg-white'>
      <div className='mx-auto box-border w-full max-w-[1100px] px-6 py-32 break-keep max-[801px]:py-20 min-[1025px]:pl-[max(24px,calc(290px-(100vw-1100px)/2))]'>
        <SectionTitle en='Education' ko='교육' />
        <ul className='m-0 grid list-none grid-cols-2 gap-6 p-0 max-[801px]:grid-cols-1'>
          {educations.map((edu) => (
            <li
              key={edu.name}
              className='rounded-[20px] border border-[#e5e5ea] p-10 text-left max-[501px]:p-7'
            >
              <div className='text-[16px] text-[#6e6e73]'>{edu.period}</div>
              <h3 className='mt-2 mb-1 text-[26px] leading-[1.3] font-bold text-[#1d1d1f]'>
                {edu.name}
              </h3>
              <div className='text-[18px] text-[#424245]'>{edu.description}</div>
              <ul className='m-0 mt-6 flex flex-col gap-2 pl-5'>
                {edu.details.map((d) => (
                  <li key={d} className='list-disc text-[17px] leading-[1.6] text-[#424245]'>
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h3 className='mt-28 mb-10 text-left text-[28px] font-extrabold text-[#1d1d1f] max-[801px]:mt-20'>
          Skills
        </h3>
        <div className='flex flex-col gap-10'>
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className='grid grid-cols-[200px_1fr] items-start gap-8 text-left max-[801px]:grid-cols-1 max-[801px]:gap-4'
            >
              <div>
                <div className='text-[20px] font-bold text-[#1d1d1f]'>{group.title}</div>
                <div className='mt-1 text-[15px] text-[#86868b]'>{group.desc}</div>
              </div>
              <ul className='m-0 flex list-none flex-wrap gap-3 p-0'>
                {group.skills.map(({ name, icon: Icon, color }) => (
                  <li
                    key={name}
                    className='flex items-center gap-2 rounded-[999px] bg-[#f5f5f7] py-[10px] pr-5 pl-4 text-[17px] text-[#1d1d1f]'
                  >
                    <Icon aria-hidden style={{ color }} className='h-5 w-5' />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
