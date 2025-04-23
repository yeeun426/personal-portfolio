import React from 'react';
import { FeedbackStyle } from './styled';
import { Tooltip } from 'react-tooltip';
import { MdFeedback } from 'react-icons/md';
import { FaCloudDownloadAlt } from 'react-icons/fa';

export default function Feedback() {
  const handleDownload = () => {
    const link = document.createElement('a'); // 링크 태그 생성
    link.href = 'files/yeeun.pdf'; // public 폴더 경로 지정
    link.download = 'Ye-Eun_Resume.pdf'; // 다운로드될 파일명
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
