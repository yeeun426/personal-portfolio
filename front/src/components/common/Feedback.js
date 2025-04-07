import React from 'react';
import { FeedbackStyle } from './styled';
import { Tooltip } from 'react-tooltip';
import { MdFeedback } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';

export default function Feedback() {
  return (
    <FeedbackStyle>
      <div className='feedback-item'>
        <button className='my-resume'>
          <FaCloudDownloadAlt />
        </button>
        <Tooltip
          anchorSelect='.my-resume'
          place='left'
          content='이력서 다운로드'
        />
      </div>
      <div className='feedback-item'>
        <button
          className='my-feedback'
          onClick={() => window.open('https://forms.gle/iPCqwKgThEsvLpRc9')}
        >
          <MdFeedback />
        </button>
        <Tooltip
          anchorSelect='.my-feedback'
          place='left'
          content='피드백 주기'
        />
      </div>
    </FeedbackStyle>
  );
}
