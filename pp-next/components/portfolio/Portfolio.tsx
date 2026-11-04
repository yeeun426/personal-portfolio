'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { getProject, getProjectPageImages } from '@/constants/projects';
import { toPublicPath, type Project, type ProjectQnA } from '@/types/project';
import { PortfolioStyled, DropIcon } from './Portfolio.styles';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';

const MAPLIX_ID = 3; // 세로로 긴 상세 이미지를 쓰는 프로젝트

function getYouTubeEmbedUrl(url: string) {
  const videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
}

export default function Portfolio({ projectId }: { projectId: number }) {
  const data = getProject(projectId);
  const [scrollPosition, setScrollPosition] = useState(0);

  // 모달 안에서는 모달 콘텐츠의 스크롤, 단독 페이지(/project/[id])에서는 window 스크롤 기준
  useEffect(() => {
    const modalElement = document.querySelector<HTMLElement>(
      '.ReactModal__Content'
    );
    const target: HTMLElement | Window = modalElement ?? window;
    const update = () =>
      setScrollPosition(modalElement ? modalElement.scrollTop : window.scrollY);

    target.addEventListener('scroll', update);
    return () => target.removeEventListener('scroll', update);
  }, [projectId]);

  if (!data) {
    return (
      <PortfolioStyled>
        <div className='portfolio-title'>프로젝트를 찾을 수 없습니다.</div>
      </PortfolioStyled>
    );
  }

  const scale =
    scrollPosition > 150 ? Math.max(1 - scrollPosition / 5000, 0.875) : 1;

  const divStyle = {
    minHeight: '680px',
    transform: `scale(${scale})`,
    transition: 'transform',
  };

  return (
    <PortfolioStyled>
      <div className='portfolio-begin'>
        <div className='portfolio-title'>
          <div className='title-name'>{data.name}</div>
          <div className='title-detail'>{data.detail}</div>
        </div>
        <div className='portfolio-video'>
          {data.youtube && (
            <div style={divStyle}>
              <iframe
                src={getYouTubeEmbedUrl(data.youtube)}
                title='YouTube video'
                loading='lazy'
                allow='autoplay; encrypted-media'
                allowFullScreen
              />
            </div>
          )}
          {data.video && (
            <div style={divStyle}>
              <video
                src={toPublicPath(data.video)}
                preload='none'
                controls
                muted
                playsInline
                autoPlay
                poster={toPublicPath(data.img)}
              />
            </div>
          )}
        </div>
      </div>
      <PortfolioDesc data={data} />
      <PortfolioDetail data={data} />
      <PortfolioQnA QnAItems={data.QnA ?? []} />
      <div className='portfolio-email'>
        <img src='/images/me_more.JPG' alt='more' />
        <div className='portfolio-email-txt'>
          <div className='email-curios'>
            프로젝트에 관해 궁금하신 점/피드백이 있나요?
          </div>
          <div className='email-btn'>
            <div>언제든지요!</div>
            <button
              onClick={() => window.open('https://forms.gle/iPCqwKgThEsvLpRc9')}
            >
              📝<span> ➠ </span>📨
            </button>
          </div>
        </div>
      </div>
    </PortfolioStyled>
  );
}

const PortfolioDesc = ({ data }: { data: Project }) => {
  return (
    <div className='portfolio-description'>
      <div className='portfolio-sub-title'>알면 알수록, {data.name}.</div>
      <Swiper
        className='desc-swiper'
        slidesPerView='auto'
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          1300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
      >
        <SwiperSlide>
          <i className='bi bi-file-earmark-text-fill h4'></i>
          <div className='detail-title h4'>{data.detail}</div>
          <div className='detail-sub-txt'>
            <div className='detail-inTitle'>기간</div>
            <div className='img-detail'>{data.date}</div>
          </div>
          {data.skills?.organization && (
            <div className='detail-sub-txt'>
              <div className='detail-inTitle'>기관</div>
              <div className='img-detail'>{data.skills.organization}</div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <i className='bi bi-pencil h3'></i>
          <div className='detail-title h4'>PURPOSE</div>
          <div className='detail-txt'>{data.skills?.detail}</div>
        </SwiperSlide>
        <SwiperSlide>
          <i className='bi bi-gear h3'></i>
          <div className='detail-title h4'>SKILL</div>
          <div className='detail-txt'>{data.skills?.skill}</div>
        </SwiperSlide>
        {data.skills?.roles?.map((role, index) => (
          <SwiperSlide key={index}>
            <i className='bi bi-braces-asterisk h3'></i>
            <div className='detail-title h4'>The part that I developed</div>
            <div className='detail-txt'>{role}</div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <i className='bi bi-play-btn h3'></i>
          <div className='detail-btn'>
            {data.skills?.github && (
              <button
                className='detail-txt-btn'
                onClick={() => window.open(data.skills?.github)}
              >
                Github 바로가기 ❯
              </button>
            )}
            {data.skills?.video && (
              <button
                className='detail-txt-btn'
                onClick={() => window.open(data.skills?.video)}
              >
                시연영상 바로가기 ❯
              </button>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const PortfolioDetail = ({ data }: { data: Project }) => {
  const imageData = getProjectPageImages(data.id);

  return (
    <div className='portfolio-detail'>
      <div className='portfolio-sub-title'>
        <div>{data.name}, 자세히 살펴보기.</div>
        {data.skills?.github && (
          <button onClick={() => window.open(data.skills?.github)}>
            Github 바로가기 ❯
          </button>
        )}
      </div>
      <Swiper
        className={data.id === MAPLIX_ID ? 'detail-page maplix' : 'detail-page'}
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {imageData.map((page) => (
          <SwiperSlide
            key={page.num}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <img
              className='detail_filter'
              alt={page.desc}
              src={toPublicPath(page.img)}
              loading='lazy'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const PortfolioQnA = ({ QnAItems }: { QnAItems: ProjectQnA[] }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setOpenItem(openItem === id ? null : id);
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
                  <path fill='none' d='M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12' />
                </DropIcon>
              </button>
              <div
                className='pli-answer'
                style={{
                  maxHeight: openItem === id ? '500px' : '0px',
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
