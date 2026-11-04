'use client';

import { Tooltip } from 'react-tooltip';
import { MdFeedback } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { LINKS, externalLinkProps } from '@/constants/links';
import { FeedbackStyle } from './Feedback.styles';

export default function Feedback() {
  return (
    <FeedbackStyle>
      <div className='feedback-item'>
        <a
          className='my-resume link-btn'
          href={LINKS.resume}
          download='Ye-Eun_Resume.pdf'
          aria-label='이력서 다운로드'
        >
          <FaCloudDownloadAlt />
        </a>
        <Tooltip anchorSelect='.my-resume' place='left' content='이력서 다운로드' />
      </div>
      <div className='feedback-item'>
        <a
          className='my-feedback link-btn'
          href={LINKS.feedbackForm}
          aria-label='피드백 주기'
          {...externalLinkProps}
        >
          <MdFeedback />
        </a>
        <Tooltip anchorSelect='.my-feedback' place='left' content='피드백 주기' />
      </div>
    </FeedbackStyle>
  );
}
