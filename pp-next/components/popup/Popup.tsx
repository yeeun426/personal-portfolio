'use client';

// 기존 React 버전 components/Home/Popup.js 그대로 (react-bootstrap 사용)
import { useState } from 'react';
import NextImage from 'next/image';
import { Image, Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import { LINKS, externalLinkProps } from '@/constants/links';

// macOS 창 모양 상단 버튼 (빨강/노랑/초록)
const windowButton =
  'box-border h-[14px] w-[14px] rounded-[50%] [border:1px_solid_#c1c1c1]';
// 즐겨찾기 아래 외부 링크
const favoriteLink = 'link-btn p-0 text-[16px] leading-[2]';
// 탭 내용 (사진 + 소개)
const tabContent =
  'flex h-[calc(100%-50px)] place-content-center items-center gap-[10%] text-right max-[1301px]:gap-0';
const contentLeft =
  'flex flex-col gap-6 text-[19px] [text-align-last:left]';
const contentRight = 'max-h-full max-w-[20rem] max-[851px]:max-w-[10rem]';

export default function Popup() {
  const [activeTab, setActiveTab] = useState('1');

  return (
    <div>
      <div className='absolute top-1/2 left-1/2 z-[999] flex [transform:translate(-50%,-50%)] justify-center transition-all duration-500 ease-[ease]'>
        <Container className='flex'>
          <Tab.Container
            id='left-tabs-example'
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k ?? '1')}
          >
            <div className='box-border w-48 rounded-[10px_0_0_10px] bg-[#e9e9e9cf] p-[20px] text-left leading-[1.7]'>
              <div className='mb-5 flex gap-2'>
                <button className={`${windowButton} bg-[#ff4c3d]`} title='Close'></button>
                <button className={`${windowButton} bg-[#febc2e]`} title='Learn more'></button>
                <button
                  className={`${windowButton} bg-[#2ac840]`}
                  title='Back to the beginning'
                ></button>
              </div>
              <div>
                <div className='text-[12px] font-bold text-[#8b8c8e]'>즐겨찾기</div>
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
                        <Nav.Link eventKey='3'>⏰ plan</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='4'>🖥️ share</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
                <div className='mt-[10px] flex flex-col gap-[9px] px-[15px] py-0 [text-align-last:left]'>
                  <a className={favoriteLink} href={LINKS.github} {...externalLinkProps}>
                    ✅ github
                  </a>
                  <a className={favoriteLink} href={LINKS.blog} {...externalLinkProps}>
                    📂 blog
                  </a>
                  <a
                    className={favoriteLink}
                    href={LINKS.instagram}
                    {...externalLinkProps}
                  >
                    🫠 instagram
                  </a>
                </div>
              </div>
            </div>
            <div className='h-[60vh] w-[55vw] rounded-[0px_10px_10px_0] bg-white'>
              <div className='flex h-[50px] items-center [justify-content:right] gap-[10px] rounded-tr-[10px] bg-[#f9f4f9] [border-bottom:1px_solid_#d9d9d9] max-[851px]:hidden'>
                <NextImage src='/images/popupHeader.png' alt='header' width={468} height={35} />
              </div>
              <Col className='h-[calc(100%-50px)] content-center'>
                <Tab.Content className='h-full content-center'>
                  <Tab.Pane eventKey='1' className='h-full content-center'>
                    <Hello setActiveTab={setActiveTab} />
                  </Tab.Pane>
                  <Tab.Pane eventKey='2' className='h-full content-center'>
                    <AboutMe />
                  </Tab.Pane>
                  <Tab.Pane eventKey='3' className='h-full content-center'>
                    <Plan />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </div>
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
}

function Hello({ setActiveTab }: { setActiveTab: (key: string) => void }) {
  return (
    <div className={tabContent}>
      <div className={contentLeft}>
        <div className='text-[3em] leading-[1.3] max-[1301px]:text-[2em]'>
          <div>안녕하세요,</div>
          <strong>이예은</strong>입니다 !
        </div>
        <div className='mt-[30px] flex gap-[35px] self-center'>
          <button
            className='rounded-[15px] bg-[#d483d0] px-[30px] py-[15px] text-[15px] text-white shadow-[2px_2px_4px_#00000029]'
            onClick={() => setActiveTab('2')}
          >
            About Me 〉
          </button>
        </div>
      </div>
      <div className={contentRight}>
        <Image src='/images/main/profile.webp' alt='yeeun' fluid />
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className={tabContent}>
      <div className={contentLeft}>
        <h3>이예은</h3>
        전공 | 정보통신공학과
        <div>나이 | 26살 (2000년생)</div>
        <div>MBTI | ISTP</div>
        <div>요즘 취미와 관심사 | 동물의 숲</div>
      </div>
      <div className={contentRight}>
        <Image src='/images/hobby.JPG' alt='yeeun' fluid />
      </div>
    </div>
  );
}

function Plan() {
  return (
    <div className='flex [align-items:anchor-center] justify-center gap-[15px] text-left text-[17px]'>
      <Image src='/images/fighting.jpg' alt='yeeun' fluid className='w-[45%]' />

      <div className='leading-[1.75]'>
        <div className='mb-[10px] text-[18px]'>앞으로의 계획</div>
        <div>
          1. 프로젝트를 함에 있어 왜 해당 기술이 필요하고
          <br /> 어떻게 적용되는지 제대로 이해하기.
          <br />
          2. &quot; 취업 &quot;
        </div>
      </div>
    </div>
  );
}
