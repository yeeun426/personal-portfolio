import { PopupStyled } from './styled';
import React, { useState } from 'react';
import { Image, Tab, Row, Col, Nav, Container } from 'react-bootstrap';

export default function Popup() {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div className='mainIntro-wrapper'>
      <PopupStyled>
        <Container>
          <Tab.Container
            id='left-tabs-example'
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
          >
            <div className='popup-left'>
              <div className='pl-btn'>
                <button className='popup-close' title='Close'></button>
                <button className='popup-down' title='Learn more'></button>
                <button
                  className='popup-enlarge'
                  title='Back to the beginning'
                ></button>
              </div>
              <div className='popup-favorite'>
                <div className='pf-title'>즐겨찾기</div>
                <Row>
                  <Col>
                    <Nav variant='pills' className='flex-column'>
                      <Nav.Item>
                        <Nav.Link eventKey='1'>🏠 home</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='2'>🙋🏼‍♀️ about me</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='3'>🖥️ share</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
                <div className='popup-link'>
                  <button
                    onClick={() => window.open('https://github.com/yeeun426')}
                  >
                    ✅ github
                  </button>
                  <button
                    onClick={() => window.open('https://yeeeon.tistory.com/')}
                  >
                    📂 tistory
                  </button>
                  <button
                    onClick={() =>
                      window.open('https://www.instagram.com/thsudkcla7/')
                    }
                  >
                    🫠 instagram
                  </button>
                </div>
              </div>
            </div>
            <div className='popup-right'>
              <div className='pr-top'>
                <img src='images/popupHeader.png' alt='header' />
              </div>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey='1'>
                    <Hello setActiveTab={setActiveTab} />
                  </Tab.Pane>
                  <Tab.Pane eventKey='2'>
                    <AboutMe />
                  </Tab.Pane>
                  <Tab.Pane eventKey='3'>
                    <Share />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </div>
          </Tab.Container>
        </Container>
      </PopupStyled>
    </div>
  );
}

function Hello({ setActiveTab }) {
  return (
    <div className='popup-content'>
      <div className='pc-left'>
        <div className='pcl-title'>
          <div>안녕하세요,</div>
          <strong>이예은</strong>입니다 !
        </div>
        <div className='pcl-btns'>
          <button className='pcl-btn-learn' onClick={() => setActiveTab('2')}>
            About Me 〉
          </button>
          <button className='pcl-btn-contact' onClick={() => setActiveTab('3')}>
            Share 〉
          </button>
        </div>
      </div>
      <div className='pc-right'>
        <Image src='images/myimg1.png' alt='yeeun' fluid />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className='popup-content'>
      <div className='pc-left'>
        <h3>이예은</h3>
        전공 | 정보통신공학과
        <div>나이 | 26살 (2000년생)</div>
        <div>MBTI | ISTP</div>
        <div>요즘 취미와 관심사 | 동물의 숲</div>
        <div>
          앞으로 계획 <br />
          1. 프로젝트를 함에 있어 왜 해당 기술이 필요하고
          <br /> 어떻게 적용되는지 제대로 이해하기.
          <br />
          2. " 취업 "
        </div>
      </div>
      <div className='pc-right'>
        <Image src='images/hobby.JPG' alt='yeeun' fluid />
      </div>
    </div>
  );
}

function Share() {
  return (
    <div className='popup-content share'>
      <div>[좋았던 경험]</div>
      <div>
        모알보알에서 스쿠버다이빙하며 정어리떼를 봤을 때가 기억에 남아요.
        <br />
        바닷속 세상이 신기하고 경이로워서 잊지 못할 경험이었습니다 🤗
      </div>
      <video
        src={process.env.PUBLIC_URL + '/' + 'videos/cebu.mp4'}
        controls
        muted
        playsInline
        autoPlay
      />
    </div>
  );
}
