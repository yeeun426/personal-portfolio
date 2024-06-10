import { useState, useEffect } from 'react';
import './styled.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import HostSlider from '../../components/Portfolio/HostSlider';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Main/Header';
import PofolHeader from '../../components/Portfolio/PofolHeader';
import { PortfolioStyled } from './styled.js';

function Portfolio() {
  const params = useParams();
  const [data, setData] = useState([]);
  // https://qzom1425.tistory.com/entry/%EA%B2%8C%EC%8B%9C%EA%B8%80-%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%9D%B4%EB%8F%99useParams
  useEffect(() => {
    axios
      .get('/data/project.json')
      .then((res) => {
        let axis_data = res.data;
        axis_data.map((item) => {
          if (Number(params.projectId) === item.id) setData(item);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PortfolioStyled>
      <Header />
      <PofolHeader />
      <div className='behost'>
        <div className='video_container' style={{ height: '480px' }}>
          <div className='video_left'>
            <div className='first_item' id='hosting_txt'>
              {data.name}
            </div>
            <button className='start_btn'>github</button>
          </div>

          <div className='video_right'>
            <video
              src='https://a0.muscache.com/v/a9/a7/a9a7873c-95de-5e37-8995-a5abb5b6b02f/a9a7873c95de5e378995a5abb5b6b02f_4000k_1.mp4'
              controls
              autoplay
            >
              대체텍스트
            </video>
          </div>
        </div>

        <div id='second_container'>
          <div className='second_item title_host'>{data.detail}</div>

          <div class='second_item' id='host_income'>
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

          <div
            class='second_item title_host'
            style={{ padding: '120px 0 0 48px' }}
          >
            상세 페이지를
            <br />
            확인 하실 수 있습니다
            <div class='swiper mySwiper'>
              <Swiper
                className='small_img'
                spaceBetween={50}
                slidesPerView={3}
                navigation
                freeMode={true}
              >
                <SwiperSlide>
                  <></>
                </SwiperSlide>

                <SwiperSlide
                  style={{ display: 'flex', 'flex-direction': 'column' }}
                >
                  <img
                    className='detail_filter'
                    alt='detail_fileter'
                    src='https://a0.muscache.com/im/pictures/4f3047b2-58ea-4335-8430-dfc6f436634d.jpg'
                  />
                  <div className='detail_txt'>
                    <HostSlider id={0} />
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{ display: 'flex', 'flex-direction': 'column' }}
                >
                  <img
                    className='detail_filter'
                    alt='detail_fileter'
                    src='https://a0.muscache.com/im/pictures/31fb3cb1-c2a1-4e14-a9e9-6f279991790b.jpg'
                  />
                  <div className='detail_txt'>
                    <HostSlider id={1} />
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{ display: 'flex', 'flex-direction': 'column' }}
                >
                  <img
                    className='detail_filter'
                    alt='detail_fileter'
                    src='https://a0.muscache.com/im/pictures/a464d642-695e-4d2c-aa51-2302de067f45.jpg'
                  />
                  <div className='detail_txt'>
                    <HostSlider id={2} />
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{ display: 'flex', 'flex-direction': 'column' }}
                >
                  <img
                    className='detail_filter'
                    alt='detail_fileter'
                    src='https://a0.muscache.com/im/pictures/d8627b07-b42c-40a1-807f-1eac9de39311.jpg?im_w=720'
                  />
                  <div className='detail_txt'>
                    <HostSlider id={3} />
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{ display: 'flex', 'flex-direction': 'column' }}
                >
                  <img
                    className='detail_filter'
                    alt='detail_fileter'
                    src='https://a0.muscache.com/im/pictures/b56f3d7c-5006-4ed2-967a-c421e3275b1f.jpg?im_w=720'
                  />
                  <div className='detail_txt'>
                    <HostSlider id={4} />
                  </div>
                </SwiperSlide>

                <SwiperSlide
                  style={{ display: 'flex', 'flex-direction': 'column' }}
                >
                  <img
                    className='detail_filter'
                    alt='detail_fileter'
                    src='https://a0.muscache.com/im/pictures/334530d8-2ad6-40e8-8fd2-4ac0835e693a.jpg?im_w=720'
                  />
                  <div className='detail_txt'>
                    <HostSlider id={5} />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <></>
                </SwiperSlide>
              </Swiper>
            </div>
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
          {/* <img src="https://a0.muscache.com/im/pictures/93ef1829-62d1-4349-8b4a-b02ebc650a25.jpg?im_w=2560&amp;im_q=highq" style={{vertical-align: "bottom", border-radius: "12px"}}/> */}
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
