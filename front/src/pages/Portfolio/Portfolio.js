import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Main/Header';
import PofolHeader from '../../components/Portfolio/PofolHeader';
import { PortfolioStyled } from './styled.js';
import '../Portfolio/styled.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);
  const [otherProject, setOtherProject] = useState([]);

  // https://qzom1425.tistory.com/entry/%EA%B2%8C%EC%8B%9C%EA%B8%80-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99useParams
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

  console.log();
  const divStyle = {
    minHeight: '680px',
    transform: `scale(${scale})`,
    transition: 'transform',
  };

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
      <div className='portfolio-other'>
        <div className='portfolio-sub-title'>또 다른,</div>
        <div class='other-project'>
          <div className='other-desc'>
            <div>{otherProject.name}</div>
            <div>{otherProject.detail}</div>
            <Link to={`/project/${otherProject.id}`}>
              <button className='portfolio_btn'>
                프로젝트 자세히 살펴보기
              </button>
            </Link>
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
      <div id='fourth_container'>
        <img
          alt='fourth_img'
          src='https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq'
        />

        <div id='fourth_superhost'>
          <div className='fourth_item'>
            프로젝트에 관해 궁금하신 점이 있나요?
            <br />
            저에게 물어보세요.
          </div>
          <button className='detail_btn'>email</button>
        </div>
      </div>
    </PortfolioStyled>
  );
}

export default Portfolio;

// portfolio : (1. 주제 / 2. 의도/목적  3.프로젝트 설명  4.깃허브  5.관련 기술)
// portfolio-learn : 배운점 + 아쉬운점
// fourth_container : 피드백 + 궁금한 부분 -> 메일
