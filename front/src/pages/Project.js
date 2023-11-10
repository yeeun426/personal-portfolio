import { ProjectStyled } from '../styles/ProjectStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default function MainIntro() {
  return (
    <ProjectStyled>
      <Swiper
        spaceBetween={30}
        slidesPerView={3.5}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>2022.07 ~ 2022.8</div>
            <div className='project-name'>에어비앤비</div>
            <div className='project-detail'>
              기존 웹 서비스 "에어비앤비" 클론코딩
            </div>
          </div>
          <div>img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>2022.08</div>
            <div className='project-name'>myRecipes</div>
            <div className='project-detail'>
              식품의약품안전처 api 연동 레시피 검색 웹 프로젝트
            </div>
          </div>
          <div>img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>22.8 ~ 22.9</div>
            <div className='project-name'>wanted</div>
            <div className='project-detail'>
              기존 웹 서비스 "원티드" 클론코딩
            </div>
          </div>
          <div>img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>22.6 ~ 23.8</div>
            <div className='project-name'>MAPLIX</div>
            <div className='project-detail'>
              2022 관광데이터활용 공모전 우수상
            </div>
          </div>
          <div>img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>22.10 ~ 23.2</div>
            <div className='project-name'>GNUVILAGE</div>
            <div className='project-detail'>
              코딩 중앙 동아리 '그누빌' 웹 프로젝트
            </div>
          </div>
          <div>img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>23.3 ~ 23.6</div>
            <div className='project-name'>EatTogether</div>
            <div className='project-detail'>배달비 더치페이 웹 서비스</div>
          </div>
          <div>img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>23.6</div>
            <div className='project-name'>Giver</div>
            <div className='project-detail'>
              학교 생활에 어려움을 겪는 장애인과 비장애인 매칭 서비스
            </div>
          </div>
          <div>img</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='project-txt'>
            <div className='project-date'>23.4 ~ 23.7</div>
            <div className='project-name'>NDGD</div>
            <div className='project-detail'>
              고용노동 공공데이터 활용 공모전
            </div>
          </div>
          <div>img</div>
        </SwiperSlide>
      </Swiper>
    </ProjectStyled>
  );
}
