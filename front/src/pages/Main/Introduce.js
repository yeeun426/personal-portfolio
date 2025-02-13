import { IntroduceStyled } from './style';
import React, { useEffect, useState } from 'react';

export default function Main() {
  return (
    <IntroduceStyled>
      <div className='aboutme-wrapper'>
        <div className='aboutme-list education'>
          <div className='aboutme-title'>#Education</div>
          <div className='aboutme-item p-5'>
            <div className='edu-date'>2025.01 ~</div>
            <h4 className='edu-name'>[LG유플러스]유레카 SW 교육</h4>
            <div className='edu-sub'>2기 프론트엔드 수강</div>
            <ul className='edu-desc'>
              <li>
                JavaScript, React, Next.js, Spring 기반 웹 애플리케이션 개발
                역량 습득
              </li>
              <li>알고리즘 문제 해결 및 데이터 구조 학습 (Java 활용)</li>
            </ul>
          </div>
          <div className='aboutme-item p-5 bg-color'>
            <div className='edu-date'>2019.03 ~ 2024.02</div>
            <h4 className='edu-name'>한국외국어대학교</h4>
            <div className='edu-sub'>
              정보통신공학과 학사 졸업 (이중전공: 통계학)
            </div>
            <ul className='edu-desc'>
              <li>학점 3.7 / 4.5</li>
              <li>운영체제 조교 활동 (과제 평가 및 학생 지도)</li>
              <li>확률과 통계 조교 활동 (과제 평가 및 학생 지도)</li>
            </ul>
          </div>
        </div>
        <div className='aboutme-list skill'>
          <div className='aboutme-title'>#Skill</div>
          <div className='aboutme-item p-5 bg-color'>
            <div className='skills-item'>
              <img
                className='skill-img'
                src='images/front-end.png'
                alt='FRONTED'
              />
              <div className='skill-title'>strong</div>
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
            <div className='skills-item'>
              <img className='skill-img' src='images/etc.png' alt='etc' />
              <div className='skill-title'>knowledgeable</div>
              <div>
                Python
                <br />
                MySQL
                <br />
                Unity
              </div>
            </div>
          </div>
          <div className='aboutme-item p-5'>
            <div className='skills-item'>
              <img className='skill-img' src='images/skill.png' alt='tool' />
              <div className='skill-title'>experienced</div>
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
          </div>
        </div>
      </div>
    </IntroduceStyled>
  );
}
