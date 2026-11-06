import { BsArrowUp, BsArrowUpRight, BsDownload, BsEnvelope } from 'react-icons/bs';
import { LINKS, externalLinkProps } from '@/constants/links';

const EMAIL = 'thsudkcla7@naver.com';

const LINK_ITEMS = [
  { label: 'GitHub', href: LINKS.github },
  { label: 'Blog', href: LINKS.blog },
  { label: '피드백 남기기', href: LINKS.feedbackForm },
];

const linkClass =
  'group inline-flex items-center gap-[6px] text-[15px] text-[#6e6e73] no-underline transition-colors duration-200 hover:text-[#7c5cc4]';

/** 메인 페이지 맨 아래 — 연락 안내 + 링크 */
export default function Footer() {
  return (
    <footer className='bg-[linear-gradient(180deg,#f5f5f7_0%,#efe8fc_100%)] text-left text-[#1d1d1f]'>
      <div className='mx-auto box-border w-full max-w-[1100px] px-6 pt-0 pb-10 break-keep max-[801px]:pt-20 min-[1025px]:pl-[max(24px,calc(290px-(100vw-1100px)/2))]'>
        <div className='border-t border-[#d9cff0] pt-20 max-[801px]:pt-14'>
          <div className='text-[15px] font-bold tracking-[0.08em] text-[#9778c9] uppercase'>
            Thanks for visiting
          </div>
          <p className='m-0 mt-4 text-[length:max(calc(1rem+1.6vw),30px)] leading-[1.35] font-bold'>
            끝까지 봐주셔서 감사합니다&nbsp;:)
          </p>
          <p className='m-0 mt-4 text-[18px] leading-[1.7] text-[#6e6e73] max-[501px]:text-[16px]'>
            궁금한 점이나 나누고 싶은 이야기가 있다면 언제든 메일 주세요.
          </p>
        </div>

        <div className='mt-10 flex flex-wrap gap-3'>
          <a
            href={`mailto:${EMAIL}`}
            className='inline-flex items-center gap-2 rounded-[999px] bg-[#1d1d1f] px-6 py-[14px] text-[16px] font-semibold text-white no-underline transition-colors duration-200 hover:bg-[#7c5cc4] hover:text-white'
          >
            <BsEnvelope className='h-4 w-4' />
            {EMAIL}
          </a>
          <a
            href={LINKS.resume}
            download='Ye-Eun_Resume.pdf'
            className='inline-flex items-center gap-2 rounded-[999px] border border-[#c9bde6] bg-white/60 px-6 py-[14px] text-[16px] font-semibold text-[#1d1d1f] no-underline transition-colors duration-200 hover:border-[#7c5cc4] hover:text-[#7c5cc4]'
          >
            <BsDownload className='h-4 w-4' />
            이력서 다운로드
          </a>
        </div>

        <div className='mt-24 flex items-center justify-between gap-6 border-t border-[#d9cff0] pt-8 max-[801px]:mt-16 max-[501px]:flex-col max-[501px]:items-start'>
          <div className='flex flex-wrap items-center gap-6'>
            {LINK_ITEMS.map(({ label, href }) => (
              <a key={label} href={href} {...externalLinkProps} className={linkClass}>
                {label}
                <BsArrowUpRight className='h-3 w-3 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]' />
              </a>
            ))}
            <span className='text-[13px] text-[#86868b]'>
              © 2026 Lee Ye-eun · Last update 2026.11
            </span>
          </div>
          <a href='#' className={linkClass} aria-label='맨 위로'>
            Top
            <BsArrowUp className='h-3 w-3 transition-transform duration-200 group-hover:-translate-y-[2px]' />
          </a>
        </div>
      </div>
    </footer>
  );
}
