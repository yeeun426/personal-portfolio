'use client';

import { Tooltip } from 'react-tooltip';
import { MdFeedback } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { FeedbackStyle } from './Feedback.styles';

export default function Feedback() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/yeeun.pdf';
    link.download = 'Ye-Eun_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <FeedbackStyle>
      <div className='feedback-item'>
        <button className='my-resume' onClick={handleDownload}>
          <FaCloudDownloadAlt />
        </button>
        <Tooltip anchorSelect='.my-resume' place='left' content='이력서 다운로드' />
      </div>
      <div className='feedback-item'>
        <button
          className='my-feedback'
          onClick={() => window.open('https://forms.gle/iPCqwKgThEsvLpRc9')}
        >
          <MdFeedback />
        </button>
        <Tooltip anchorSelect='.my-feedback' place='left' content='피드백 주기' />
      </div>
    </FeedbackStyle>
  );
}
