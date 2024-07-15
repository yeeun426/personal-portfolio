import React, { useState, useEffect } from 'react';
import './styled.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Main/Header';
import PofolHeader from '../../components/Portfolio/PofolHeader';
import { PortfolioStyled } from './styled.js';
import '../Portfolio/styled.css';

function Portfolio() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);

  // https://qzom1425.tistory.com/entry/%EA%B2%8C%EC%8B%9C%EA%B8%80-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99useParams
  useEffect(() => {
    axios
      .get('/data/project.json')
      .then((res) => {
        let axis_data = res.data;
        axis_data.map((item) => {
          if (Number(params.projectId) === item.id) {
            setData(item);
            setPages(item.pages);
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
          <div className='swiper mySwiper'>
            <Swiper
              className='small_img'
              spaceBetween={50}
              slidesPerView='auto' // 해상도에 맞게 슬라이드 개수를 자동 조정
              freeMode={true}
              navigation={true}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <></>
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
        <div id='second_container'>
          <div className='second_item title_host'>{data.detail}</div>
          <div className='second_item' id='host_income'>
            <div className='income_info'>
              <div className='income_box'>
                period
                <div className='income_price'>
                  <span className='info_host' style={{ color: '#ff385c' }}>
                    {data.date}
                  </span>
                </div>
              </div>
              <div className='income_box'>
                skill
                <div className='income_price'>{data.skills?.skill}</div>
              </div>
              <div className='income_box'>
                organization
                <div className='income_price'>
                  <span className='info_host'>{data.skills?.organization}</span>
                </div>
              </div>
            </div>

            <p>프로젝트를 소개해주세요</p>
            <div id='income_method'>{data.skills?.detail}</div>
          </div>
        </div>

        <div id='third_container'>
          <div className='third_item'>
            프로젝트 시현 영상을 통해
            <br />
            직접 경험해보세요
          </div>

          <button className='detail_btn'>자세히 알아보기</button>
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

        <div id='fifth_container'>
          <div className='left_item'>
            <div className='fifth_item'>
              호스팅 전반에 대한 보호.
              <br />
              모든 예약에 항상 무⁠료⁠로 제⁠공.
              <br />
              오직 에어비앤비에서만.
            </div>
            <button className='start_btn'>다른 프로젝트 살펴보기</button>
          </div>

          <div className='right_item'>
            {/* <img className="fifth_img" src="https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq" style={{object-fit: contain; vertical-align: bottom; width: 630px; height: 750px;"/> */}
            <img
              className='fifth_img'
              alt='fifth_img'
              src='https://a0.muscache.com/im/pictures/11e10d64-867e-4dba-b0b4-896026a4f0e0.jpg?im_w=2560&amp;im_q=highq'
            />
          </div>
        </div>
      </div>
    </PortfolioStyled>
  );
}

export default Portfolio;
