'use client';

import { Tooltip } from 'react-tooltip';
import { MdFeedback } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { LINKS, externalLinkProps } from '@/constants/links';

const item =
  'box-border h-[50px] w-[50px] rounded-[50%] bg-white p-[5px] shadow-[2px_2px_6px_#bcbcbcd1]';
const link = 'link-btn flex h-full w-full items-center justify-center';
const icon = 'h-[27px] w-[27px]';

/** 화면 오른쪽 아래 고정 버튼 (이력서 다운로드 / 피드백) */
export default function Feedback() {
  return (
    <div className='fixed right-[3.25rem] bottom-[3.25rem] z-[100] flex flex-col gap-[0.95rem]'>
      <div className={item}>
        <a
          className={`my-resume ${link}`}
          href={LINKS.resume}
          download='Ye-Eun_Resume.pdf'
          aria-label='이력서 다운로드'
        >
          <FaCloudDownloadAlt className={icon} />
        </a>
        <Tooltip
          anchorSelect='.my-resume'
          place='left'
          content='이력서 다운로드'
          className='pointer-events-none'
        />
      </div>
      <div className={item}>
        <a
          className={`my-feedback ${link}`}
          href={LINKS.feedbackForm}
          aria-label='피드백 주기'
          {...externalLinkProps}
        >
          <MdFeedback className={icon} />
        </a>
        <Tooltip
          anchorSelect='.my-feedback'
          place='left'
          content='피드백 주기'
          className='pointer-events-none'
        />
      </div>
    </div>
  );
}
