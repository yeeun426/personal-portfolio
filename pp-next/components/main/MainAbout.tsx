import { BsArrowUpRight, BsDownload } from 'react-icons/bs';
import { LINKS, externalLinkProps } from '@/constants/links';
import SectionTitle from './SectionTitle';

const EMAIL = 'thsudkcla7@naver.com';

/** 오른쪽 정보 목록. href 가 있으면 링크 */
const INFO: { label: string; value: string; href?: string; external?: boolean }[] = [
  { label: '생년월일', value: '2000.04.26' },
  { label: '이메일', value: EMAIL, href: `mailto:${EMAIL}` },
  { label: '학력', value: '한국외국어대학교 정보통신공학과' },
  { label: 'GitHub', value: 'github.com/yeeun426', href: LINKS.github, external: true },
  { label: 'Blog', value: 'yeeun426.github.io', href: LINKS.blog, external: true },
];

/** 기본 정보 섹션 — 명함처럼 왼쪽 이름 / 오른쪽 정보 목록 */
export default function MainAbout() {
  return (
    <div className='bg-white'>
      <div className='mx-auto box-border w-full max-w-[1100px] px-6 py-32 break-keep max-[801px]:py-20 min-[1025px]:pl-[max(24px,calc(290px-(100vw-1100px)/2))]'>
        <SectionTitle en='About' ko='소개' />

        <div className='grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-16 text-left max-[801px]:grid-cols-1 max-[801px]:gap-12'>
          <div>
            <div className='text-[15px] font-bold tracking-[0.08em] text-[#9778c9] uppercase'>
              Frontend Developer
            </div>
            <div className='mt-3 text-[length:max(calc(1rem+2.5vw),44px)] leading-[1.1] font-black text-[#1d1d1f]'>
              이예은
            </div>
            <div className='mt-2 text-[18px] text-[#86868b]'>Lee Ye-eun</div>
            <p className='m-0 mt-8 text-[18px] leading-[1.7] text-[#424245]'>
              꾸준하게 빈틈을 채워나가며,
              <br />
              사용자가 필요로 하는 것을 한발 먼저 고민합니다.
            </p>
            <a
              href={LINKS.resume}
              download='Ye-Eun_Resume.pdf'
              className='mt-10 inline-flex items-center gap-2 rounded-[999px] bg-[#1d1d1f] px-6 py-[14px] text-[15px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-[#7c5cc4] hover:text-white'
            >
              <BsDownload className='h-4 w-4' />
              이력서 다운로드
            </a>
          </div>

          <dl className='m-0 border-t border-[#1d1d1f]'>
            {INFO.map(({ label, value, href, external }) => (
              <div
                key={label}
                className='grid grid-cols-[110px_minmax(0,1fr)] items-center gap-4 border-b border-[#e5e5ea] py-5 max-[501px]:grid-cols-[84px_minmax(0,1fr)]'
              >
                <dt className='text-[15px] text-[#86868b]'>{label}</dt>
                <dd className='m-0 text-[18px] text-[#1d1d1f] [overflow-wrap:anywhere] max-[501px]:text-[16px]'>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? externalLinkProps : {})}
                      className='group inline-flex items-center gap-2 text-inherit no-underline hover:text-[#7c5cc4]'
                    >
                      {value}
                      <BsArrowUpRight className='h-[13px] w-[13px] shrink-0 text-[#86868b] transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] group-hover:text-[#7c5cc4]' />
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
