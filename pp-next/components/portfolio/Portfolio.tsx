'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  BsBracesAsterisk,
  BsFileEarmarkTextFill,
  BsGear,
  BsPencil,
  BsPlayBtn,
} from 'react-icons/bs';
import {
  toPublicPath,
  type Project,
  type ProjectPageImage,
  type ProjectQnA,
} from '@/types/project';
import { LINKS, externalLinkProps } from '@/constants/links';
import { PortfolioStyled, DropIcon } from './Portfolio.styles';

import 'swiper/css';
import 'swiper/css/navigation';

// 기존 bootstrap-icons 폰트(.bi::before)와 같은 정렬
const iconStyle = { verticalAlign: '-0.125em' } as const;

const MAPLIX_ID = 3; // 세로로 긴 상세 이미지를 쓰는 프로젝트

function getYouTubeEmbedUrl(url: string) {
  const videoId = new URL(url).searchParams.get('v');
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
}

interface PortfolioProps {
  project: Project;
  images: ProjectPageImage[];
}

export default function Portfolio({ project: data, images }: PortfolioProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // 스크롤에 따라 영상 영역을 살짝 축소.
  // 모달 안에서는 모달 콘텐츠(.ReactModal__Content), 단독 페이지에서는 window 스크롤 기준
  useEffect(() => {
    const modalElement = rootRef.current?.closest<HTMLElement>(
      '.ReactModal__Content'
    );
    const target: HTMLElement | Window = modalElement ?? window;
    const update = () => {
      const y = modalElement ? modalElement.scrollTop : window.scrollY;
      // 값이 바뀔 때만 리렌더링되도록 계산된 scale 만 상태로 보관
      setScale(y > 150 ? Math.max(1 - y / 5000, 0.875) : 1);
    };

    target.addEventListener('scroll', update, { passive: true });
    return () => target.removeEventListener('scroll', update);
  }, []);

  const divStyle = {
    minHeight: '680px',
    transform: `scale(${scale})`,
    transition: 'transform',
  };

  return (
    <PortfolioStyled ref={rootRef}>
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
      <PortfolioDetail data={data} images={images} />
      <PortfolioQnA QnAItems={data.QnA ?? []} />
      <div className='portfolio-email'>
        <Image
          src='/images/me_more.JPG'
          alt='more'
          width={2048}
          height={1373}
          sizes='1200px'
        />
        <div className='portfolio-email-txt'>
          <div className='email-curios'>
            프로젝트에 관해 궁금하신 점/피드백이 있나요?
          </div>
          <div className='email-btn'>
            <div>언제든지요!</div>
            <a
              className='link-btn'
              href={LINKS.feedbackForm}
              {...externalLinkProps}
            >
              📝<span> ➠ </span>📨
            </a>
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
          <i className='h4'>
            <BsFileEarmarkTextFill style={iconStyle} />
          </i>
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
          <i className='h3'>
            <BsPencil style={iconStyle} />
          </i>
          <div className='detail-title h4'>PURPOSE</div>
          <div className='detail-txt'>{data.skills?.detail}</div>
        </SwiperSlide>
        <SwiperSlide>
          <i className='h3'>
            <BsGear style={iconStyle} />
          </i>
          <div className='detail-title h4'>SKILL</div>
          <div className='detail-txt'>{data.skills?.skill}</div>
        </SwiperSlide>
        {data.skills?.roles?.map((role, index) => (
          <SwiperSlide key={index}>
            <i className='h3'>
              <BsBracesAsterisk style={iconStyle} />
            </i>
            <div className='detail-title h4'>The part that I developed</div>
            <div className='detail-txt'>{role}</div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <i className='h3'>
            <BsPlayBtn style={iconStyle} />
          </i>
          <div className='detail-btn'>
            {data.skills?.github && (
              <a
                className='detail-txt-btn link-btn'
                href={data.skills.github}
                {...externalLinkProps}
              >
                Github 바로가기 ❯
              </a>
            )}
            {data.skills?.video && (
              <a
                className='detail-txt-btn link-btn'
                href={data.skills.video}
                {...externalLinkProps}
              >
                시연영상 바로가기 ❯
              </a>
            )}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const PortfolioDetail = ({
  data,
  images: imageData,
}: {
  data: Project;
  images: ProjectPageImage[];
}) => {

  return (
    <div className='portfolio-detail'>
      <div className='portfolio-sub-title'>
        <div>{data.name}, 자세히 살펴보기.</div>
        {data.skills?.github && (
          <a
            className='link-btn'
            href={data.skills.github}
            {...externalLinkProps}
          >
            Github 바로가기 ❯
          </a>
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
            <Image
              className='detail_filter'
              alt={page.desc}
              src={toPublicPath(page.img)}
              width={1709}
              height={944}
              sizes='(max-width: 900px) 100vw, 600px'
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
