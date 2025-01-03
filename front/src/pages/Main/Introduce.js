import { IntroduceStyled } from './style';
import React, { useEffect, useState } from 'react';

export default function Main() {
  const [shouldDisappear, setShouldDisappear] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 1300 || window.scrollY < 300) {
  //       setShouldDisappear(true);
  //     } else {
  //       setShouldDisappear(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <IntroduceStyled>
      <div className='aboutme-wrapper'>
        <div className='aboutme-top'>
          <img className='aboutme-img' src='images/myimg1.png' alt='이예은' />
          {/* <div className='aboutme-list'> */}
          <div className={`aboutme-list ${shouldDisappear ? 'disappear' : ''}`}>
            <div className='portfolio-title'>About Me</div>
            <div className='aboutme-txt'>
              프론트엔드 개발자를 꿈꾸는 이예은입니다. <br />
              꾸준하게 빈 틈을 채워나가는 것에 관심이 많습니다. <br />
              사람들이 필요로 하는 것이 무엇인지 고민하는 개발자가 되겠습니다 :)
              <br />
              <br />
              • 웹 서비스의 프론트엔드 설계, 개발, 디자인, 운영 경험을 보유하고
              있습니다. <br />
              • 다수의 UI 구현 경험으로 사용자 인터렉션에 대한 높은 이해도를
              가지고 있습니다. <br />• 참여한 모든 프로젝트는 기획 단계부터 함께
              하였습니다.
            </div>
            <div className='aboutme-myinfo'>
              <div className='aboutme-myinfo-items'>
                <div>👩🏻 Name</div>
                <div>:</div>
                <div>이예은</div>
              </div>
              <div className='aboutme-myinfo-items'>
                <div>🐉 age</div>
                <div>:</div>
                <div>2000. 4. 26</div>
              </div>
            </div>
          </div>
        </div>

        <div className='aboutme-bottom'>
          <div className='aboutme-bottom-contents'>
            <div className='aboutme-skills-item'>
              <img
                className='aboutme-skill-img'
                src='images/front-end.png'
                alt='FRONTED'
              />
              <div className='aboutme-skill-title'>FRONTEND</div>
              <div>
                Javascript
                <br />
                Html
                <br />
                React
                <br />
                Typescript
              </div>
            </div>
            <div className='aboutme-skills-item'>
              <img
                className='aboutme-skill-img'
                src='images/etc.png'
                alt='etc'
              />
              <div className='aboutme-skill-title'>ETC</div>
              <div>
                Python
                <br />
                MySQL
                <br />
                Unity
              </div>
            </div>
            <div className='aboutme-skills-item'>
              <img
                className='aboutme-skill-img'
                src='images/skill.png'
                alt='tool'
              />
              <div className='aboutme-skill-title'>TOOL</div>
              <div>
                Figma
                <br />
                Adobe XD
                <br />
                Notion
                <br />
                Slack
              </div>
            </div>
            <div className='aboutme-skills-item'>
              <img
                className='aboutme-skill-img'
                src='images/portfolio.png'
                alt='portfolio'
              />
              <div className='aboutme-skill-title'>PORTFOLIO</div>
              <div>
                Notion
                <br />
                Github
                <br />
                Tistory
              </div>
            </div>
          </div>
        </div>
      </div>
    </IntroduceStyled>
  );
}
