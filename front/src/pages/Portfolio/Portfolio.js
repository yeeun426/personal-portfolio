import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Main/Header';
import PofolHeader from '../../components/Portfolio/PofolHeader';
import { PortfolioStyled, DropIcon } from './styled.js';
import Email from '../../components/Email/Email';
import Footer from '../../components/Main/Footer.js';

import 'swiper/css';
import 'swiper/css/scrollbar';

function Portfolio() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [otherProject, setOtherProject] = useState([]);
  const [modal, setModal] = useState(false);
  const [QnAItems, setQnAItems] = useState([]);

  useEffect(() => {
    axios
      .get('/data/project.json')
      .then((res) => {
        let axis_data = res.data;
        let random_id = Math.floor(Math.random() * (axis_data.length - 1)) + 1;
        while (random_id === Number(params.projectId)) {
          random_id = Math.floor(Math.random() * (axis_data.length - 1)) + 1;
        }
        axis_data.map((item) => {
          if (Number(params.projectId) === item.id) {
            setData(item);
            setQnAItems(item.QnA);
          }
          if (random_id === item.id) {
            setOtherProject(item);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치 저장
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  // 수직 스크롤 위치 - scrollY
  // 일부 브라우저(IE, 구형 Edge, 구형 Firefox, 구형 chrome)

  useEffect(() => {
    // 스크롤 수치를 업데이트
    window.addEventListener('scroll', updateScroll); // 스크롤할 때 updateScroll 호출
    return () => {
      window.removeEventListener('scroll', updateScroll); // 언마운트 시 제거 (메모리 누수 방지)
    };
  }, []);

  const scale =
    scrollPosition > 150 ? Math.max(1 - scrollPosition / 5000, 0.875) : 1;

  const divStyle = {
    minHeight: '680px',
    transform: `scale(${scale})`,
    transition: 'transform',
  };

  return (
    <PortfolioStyled>
      <Header />
      <PofolHeader />
      <div className='portfolio-begin'>
        <div className='portfolio-title'>
          <div className='title-name'>{data.name}</div>
          <div className='title-detail'>{data.detail}</div>
        </div>
        <div className='portfolio-video'>
          <div style={divStyle}>
            <video
              src={process.env.PUBLIC_URL + '/' + data.video}
              controls
              muted
              playsInline
              autoPlay
            />
          </div>
        </div>
      </div>
      <PortFolioDesc data={data} />
      <PortfolioDetail data={data} params={params.projectId} />
      <PortfolioQnA QnAItems={QnAItems} />
      <div className='portfolio-other'>
        <div className='portfolio-sub-title'>또 다른,</div>
        <div className='other-project'>
          <div className='other-desc'>
            <div className='other-desc-title'>{otherProject.name}</div>
            <div className='other-desc-txt'>
              "{otherProject.detail}"을 지금 바로 만나보세요.
            </div>
            <a href={`/project/${otherProject.id}`}>
              <button className='portfolio_btn'>
                프로젝트 자세히 살펴보기
              </button>
            </a>
          </div>
          <div className='other-img'>
            <img
              className='other-project-img'
              alt={otherProject.name}
              src={process.env.PUBLIC_URL + '/' + otherProject.img}
            />
          </div>
        </div>
      </div>
      <div className='portfolio-email'>
        <img src={process.env.PUBLIC_URL + '/images/me_more.JPG'} alt='more' />
        <div className='portfolio-email-txt'>
          <div className='email-curios'>
            프로젝트에 관해 궁금하신 점/피드백이 있나요?
          </div>
          <div className='email-btn'>
            <div>언제든지요. 📝 ➠ 📨</div>
            <button onClick={() => setModal(!modal)}>email</button>
          </div>
        </div>
      </div>
      {modal && <Email $isOpen={modal} onClose={() => setModal(false)} />}
      <Footer />
    </PortfolioStyled>
  );
}

const PortFolioDesc = ({ data }) => {
  return (
    <div className='portfolio-description'>
      <div className='portfolio-sub-title'>알면 알수록, {data.name}.</div>
      <Swiper
        className='small_img'
        slidesPerView={3.5}
        spaceBetween={20}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <img
            className='detail_filter'
            alt={data.period}
            src={process.env.PUBLIC_URL + '/images/swiper/more_swiper1.png'}
          />
          <div className='detail-txt'>
            <div className='img-detail'>{data.detail}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='detail_filter'
            alt={data.period}
            src={process.env.PUBLIC_URL + '/images/swiper/more_swiper2.png'}
            style={{ filter: 'brightness(80%)' }}
          />
          <div className='detail-txt'>
            <div className='img-detail'>{data.skills?.detail}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='detail_filter'
            alt={data.period}
            src={process.env.PUBLIC_URL + '/images/swiper/more_swiper5.png'}
            style={{ filter: 'brightness(65%)' }}
          />
          <div className='detail-txt'>
            <div className='detail-txt-item'>
              <div className='detail-title'>기간</div>
              <div className='img-detail'>{data.date}</div>
            </div>
            <div className='detail-txt-item'>
              <div className='detail-title'>기술</div>
              <div className='img-detail'>{data.skills?.skill}</div>
            </div>
            <div className='detail-txt-item'>
              <div className='detail-title'>기관</div>
              <div className='img-detail'>{data.skills?.organization}</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='detail_filter'
            alt={data.period}
            src={process.env.PUBLIC_URL + '/images/swiper/more_swiper4.png'}
          />
          <div className='detail-txt role'>
            <div className='img-detail'>{data.skills?.role1}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='detail_filter'
            alt={data.period}
            src={process.env.PUBLIC_URL + '/images/swiper/more_swiper3.png'}
          />
          <div className='detail-txt role'>
            <div className='img-detail'>{data.skills?.role2}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='detail_filter'
            alt={data.period}
            src={process.env.PUBLIC_URL + '/images/swiper/more_swiper6.png'}
          />
          <div className='detail-txt'>
            <button
              className='detail-txt-item'
              onClick={() => window.open(data.skills.github)}
            >
              Github 바로가기 ❯
            </button>
            <button
              className='detail-txt-item'
              onClick={() => window.open(data.skills.video)}
            >
              시현영상 바로가기 ❯
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const PortfolioDetail = ({ data, params }) => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios
      .get('/data/page.json')
      .then((res) => {
        const foundPage = res.data.find((page) => data.id === page.id);
        if (foundPage) {
          setPages(foundPage);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const imageData = Object.values(pages).filter(
    (page) => typeof page === 'object'
  );

  return (
    <div className='portfolio-detail'>
      <div className='portfolio-sub-title'>
        <div>
          {data.name}, 각각의 페이지
          <br /> 자세히 살펴보기.
        </div>
        <button onClick={() => window.open(data.skills.github)}>
          Github 바로가기 ❯
        </button>
      </div>
      <Swiper
        className={params === '3' ? 'detail-page maplix' : 'detail-page'}
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
      >
        {imageData.map((page) => (
          <SwiperSlide
            key={page.num}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <img
              className='detail_filter'
              alt={page.desc}
              src={process.env.PUBLIC_URL + '/' + page.img}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const PortfolioQnA = ({ QnAItems }) => {
  const answerRef = useRef(null);
  const [openItem, setOpenItem] = useState(null);

  const toggleDropdown = (id) => {
    setOpenItem(openItem === id ? null : id);
    console.log(openItem, id);
  };

  return (
    <div className='portfolio-learn'>
      <div className='portfolio-learn-container'>
        <div className='portfolio-learn-title'>
          자주 묻는 질문과 <br />
          답변
        </div>
        <div className='portfolio-learn-contents'>
          {QnAItems.map(({ id, question, answer }) => (
            <div className='portfolio-learn-item' key={id}>
              <button
                className='pli-question'
                onClick={() => toggleDropdown(id)}
              >
                <div>{question}</div>
                <DropIcon
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  aria-hidden='true'
                  role='presentation'
                  $isOpen={openItem === id}
                >
                  <path
                    fill='none'
                    d='M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12'
                  ></path>
                </DropIcon>
              </button>
              <div
                className='pli-answer'
                ref={answerRef}
                style={{
                  maxHeight: openItem === id ? '500px' : '0px',
                  // overflow: 'hidden',
                  overflow: 'auto',
                  transition: 'max-height 0.5s ease',
                }}
              >
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

// portfolio : (1. 주제 / 2. 의도/목적  3.프로젝트 설명  4.깃허브  5.관련 기술)
