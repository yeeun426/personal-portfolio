import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Main/Header';
import PofolHeader from '../../components/Portfolio/PofolHeader';
import { PortfolioStyled } from './styled.js';
import Email from '../../components/Email/Email';

function Portfolio() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);
  const [otherProject, setOtherProject] = useState([]);
  const [modal, setModal] = useState(false);

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
            setPages(item.pages);
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
  const imageData = Object.values(pages);

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

  const [height, setHeight] = useState(0);
  const answerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(answerRef.current.scrollHeight); // 드롭다운의 실제 높이를 설정
    } else {
      setHeight(0); // 닫히면 높이를 0으로 설정
    }
  }, [isOpen]);

  return (
    <PortfolioStyled>
      <Header />
      <PofolHeader />
      <div className='portfolio'>
        <div className='portfolio-begin'>
          <div className='portfolio-title'>
            <div className='title-name'>{data.name}</div>
            <div className='title-detail'>{data.detail}</div>
          </div>
          <div className='portfolio-video'>
            <div style={divStyle}>
              <video
                src='https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4'
                controls
              />
            </div>
          </div>
        </div>
        <div className='portfolio-description'>
          <div className='portfolio-sub-title'>알면 알수록, {data.name}.</div>
          <Swiper
            className='small_img'
            spaceBetween={20}
            slidesPerView='auto'
            freeMode={true}
            navigation={true}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <img
                className='detail_filter'
                alt={data.period}
                src={process.env.PUBLIC_URL + '/' + data.img}
              />
              <div className='detail_txt'>
                <div className='img-detail'>{data.date}</div>
                <div className='img-detail-country'>{data.country}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='detail_filter'
                alt={data.period}
                src={process.env.PUBLIC_URL + '/' + data.img}
              />
              <div className='detail_txt'>
                <div className='img-detail'>{data.date}</div>
                <div className='img-detail-country'>{data.country}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='detail_filter'
                alt={data.period}
                src={process.env.PUBLIC_URL + '/' + data.img}
              />
              <div className='detail_txt'>
                <div className='img-detail'>{data.date}</div>
                <div className='img-detail-country'>{data.country}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='detail_filter'
                alt={data.period}
                src={process.env.PUBLIC_URL + '/' + data.img}
              />
              <div className='detail_txt'>
                <div className='img-detail'>{data.date}</div>
                <div className='img-detail-country'>{data.country}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='detail_filter'
                alt={data.period}
                src={process.env.PUBLIC_URL + '/' + data.img}
              />
              <div className='detail_txt'>
                <div className='img-detail'>{data.date}</div>
                <div className='img-detail-country'>{data.country}</div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                className='detail_filter'
                alt={data.period}
                src={process.env.PUBLIC_URL + '/' + data.img}
              />
              <div className='detail_txt'>
                <div className='img-detail'>{data.date}</div>
                <div className='img-detail-country'>{data.country}</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
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
          className='detail-page'
          slidesPerView={2}
          spaceBetween={20}
          freeMode={true}
          navigation={true}
          modules={[Navigation]}
        >
          {imageData.map((page) => (
            <SwiperSlide
              key={page.id}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <img
                className='detail_filter'
                alt={page.desc}
                src={process.env.PUBLIC_URL + '/' + page.img}
              />
              <div className='detail_txt'>
                <div className='img-detail'>{page.desc}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='portfolio-learn'>
        <div className='portfolio-learn-container'>
          <div className='portfolio-learn-title'>
            자주 묻는 질문과 <br />
            답변
          </div>
          <div className='portfolio-learn-contents'>
            <div className='portfolio-learn-item'>
              <button className='pli-question' onClick={toggleDropdown}>
                <div>이 프로젝트를 통해 배운점은 뭐가 있나요?</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  isOpen={isOpen}
                  aria-hidden='true'
                  role='presentation'
                  focusable='false'
                >
                  <path
                    fill='none'
                    d='M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12'
                  ></path>
                </svg>
              </button>
              <div
                className='pli-answer'
                ref={answerRef}
                style={{
                  height: `${height}px`,
                  overflow: 'hidden',
                  transition: 'height 0.3s ease', // 높이가 부드럽게 변경
                }}
              >
                에어비앤비 게스트가 찾는 숙소는 매우 다양하며, 에어비앤비에서는
                초소형 주택, 통나무집, 트리하우스 등 다양한 유형의 숙소가
                등록되어 있습니다. 집에 남는 방 한 칸이라도 훌륭한 숙소가 될 수
                있습니다.
              </div>
            </div>
            <div className='portfolio-learn-item'>
              <div className='pli-question'>
                <div>이 프로젝트에서 아쉬운점은 무엇인가요?</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  aria-hidden='true'
                  role='presentation'
                  focusable='false'
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '16px',
                    width: '16px',
                    stroke: 'currentcolor',
                    strokeWidth: '4',
                    overflow: 'visible',
                  }}
                >
                  <path
                    fill='none'
                    d='M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12'
                  ></path>
                </svg>
              </div>
              <div className='pli-answer'>
                에어비앤비 게스트가 찾는 숙소는 매우 다양하며, 에어비앤비에서는
                초소형 주택, 통나무집, 트리하우스 등 다양한 유형의 숙소가
                등록되어 있습니다. 집에 남는 방 한 칸이라도 훌륭한 숙소가 될 수
                있습니다.
              </div>
            </div>
            <div className='portfolio-learn-item'>
              <div className='pli-question'>
                <div>이 프로젝트에서 보완하고 싶은 점을 말해주세요</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  aria-hidden='true'
                  role='presentation'
                  focusable='false'
                  style={{
                    display: 'block',
                    fill: 'none',
                    height: '16px',
                    width: '16px',
                    stroke: 'currentcolor',
                    strokeWidth: '4',
                    overflow: 'visible',
                  }}
                >
                  <path
                    fill='none'
                    d='M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12'
                  ></path>
                </svg>
              </div>
              <div className='pli-answer'>
                에어비앤비 게스트가 찾는 숙소는 매우 다양하며, 에어비앤비에서는
                초소형 주택, 통나무집, 트리하우스 등 다양한 유형의 숙소가
                등록되어 있습니다. 집에 남는 방 한 칸이라도 훌륭한 숙소가 될 수
                있습니다.
              </div>
            </div>
          </div>
        </div>
      </div>
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
      {modal && <Email isOpen={modal} onClose={() => setModal(false)} />}
    </PortfolioStyled>
  );
}

export default Portfolio;

// portfolio : (1. 주제 / 2. 의도/목적  3.프로젝트 설명  4.깃허브  5.관련 기술)
