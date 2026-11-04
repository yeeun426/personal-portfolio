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

import 'swiper/css';
import 'swiper/css/navigation';

// 기존 bootstrap-icons 폰트(.bi::before)와 같은 정렬
const iconStyle = { verticalAlign: '-0.125em' } as const;

// 섹션 제목 ("알면 알수록, ..." 등)
const subTitle =
  'm-auto flex max-w-[1680px] items-end justify-between px-10 pt-0 pb-[30px] text-left text-[3rem] font-semibold';
// 제목 옆 "Github 바로가기" 링크
const subTitleLink = 'link-btn text-[17px] font-normal text-[rgb(0,102,204)]';
// 설명 슬라이드 안 텍스트/버튼
const slideTitle = 'detail-title h4 mb-[10px]';
const slideText = 'overflow-auto text-left text-[1.08em]';
const slideButton =
  'link-btn rounded-[30px] bg-white p-[1em] shadow-[3px_3px_6px_#c8c6c6] hover:bg-[#eaeaea]';
const slideInfo = 'px-0 py-[10px]';
// 영상 영역 (모바일에서는 최소 높이 해제)
const videoBox =
  'max-h-[1260px] min-h-[680px] max-w-[1920px] max-[768px]:min-h-auto!';
const videoMedia = 'h-full w-full rounded-[18px] object-cover object-[center_top]';

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
    // .portfolio 는 app/styles/vendor.css 의 Swiper 덮어쓰기 기준 클래스
    <div
      className='portfolio overflow-hidden text-center font-semibold whitespace-pre-wrap'
      ref={rootRef}
    >
      <div>
        <div className='portfolio-title flex content-center items-center justify-between px-10 py-[70px]'>
          <div className='text-[65px]'>{data.name}</div>
          <div className='max-w-[400px] text-left text-[25px] break-keep'>
            {data.detail}
          </div>
        </div>
        <div>
          {data.youtube && (
            <div style={divStyle} className={videoBox}>
              <iframe
                className={`${videoMedia} min-h-[800px]`}
                src={getYouTubeEmbedUrl(data.youtube)}
                title='YouTube video'
                loading='lazy'
                allow='autoplay; encrypted-media'
                allowFullScreen
              />
            </div>
          )}
          {data.video && (
            <div style={divStyle} className={videoBox}>
              <video
                className={videoMedia}
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
      <div className='relative mx-0 my-[100px]'>
        <Image
          src='/images/me_more.JPG'
          alt='more'
          width={2048}
          height={1373}
          sizes='1200px'
          className='h-auto max-h-[450px] w-full max-w-[1200px] rounded-[28px] object-cover px-12 py-0'
        />
        <div className='absolute top-1/2 left-1/2 [transform:translate(-50%,-50%)]'>
          <div className='text-[3rem] leading-[1.3] break-keep text-white'>
            프로젝트에 관해 궁금하신 점/피드백이 있나요?
          </div>
          <div className='mt-5'>
            <div className='text-[30px] text-white'>언제든지요!</div>
            <a
              className='link-btn group mt-10 rounded-[980px] bg-transparent px-[35px] py-2 text-[16px] text-white no-underline [border:1px_solid_rgb(255_255_255)]'
              href={LINKS.feedbackForm}
              {...externalLinkProps}
            >
              📝<span className='group-hover:text-[22px] group-hover:text-[red]'> ➠ </span>📨
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const PortfolioDesc = ({ data }: { data: Project }) => {
  return (
    <div className='px-0 py-[50px]'>
      <div className={subTitle}>알면 알수록, {data.name}.</div>
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
          <div className={slideTitle}>{data.detail}</div>
          <div className={slideInfo}>
            <div className='detail-inTitle'>기간</div>
            <div className='img-detail'>{data.date}</div>
          </div>
          {data.skills?.organization && (
            <div className={slideInfo}>
              <div className='detail-inTitle'>기관</div>
              <div className='img-detail'>{data.skills.organization}</div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          <i className='h3'>
            <BsPencil style={iconStyle} />
          </i>
          <div className={slideTitle}>PURPOSE</div>
          <div className={slideText}>{data.skills?.detail}</div>
        </SwiperSlide>
        <SwiperSlide>
          <i className='h3'>
            <BsGear style={iconStyle} />
          </i>
          <div className={slideTitle}>SKILL</div>
          <div className={slideText}>{data.skills?.skill}</div>
        </SwiperSlide>
        {data.skills?.roles?.map((role, index) => (
          <SwiperSlide key={index}>
            <i className='h3'>
              <BsBracesAsterisk style={iconStyle} />
            </i>
            <div className={slideTitle}>The part that I developed</div>
            <div className={slideText}>{role}</div>
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <i className='h3'>
            <BsPlayBtn style={iconStyle} />
          </i>
          <div className='m-auto flex w-full flex-col gap-5'>
            {data.skills?.github && (
              <a
                className={slideButton}
                href={data.skills.github}
                {...externalLinkProps}
              >
                Github 바로가기 ❯
              </a>
            )}
            {data.skills?.video && (
              <a
                className={slideButton}
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
    <div className='bg-[#fafafa] pt-20'>
      <div className={subTitle}>
        <div className='text-[3rem] font-semibold'>{data.name}, 자세히 살펴보기.</div>
        {data.skills?.github && (
          <a
            className={subTitleLink}
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
              className='h-full w-full rounded-[15px] object-cover object-top'
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
    <div className='bg-[#fafafa] pt-20'>
      <div className='m-auto flex max-w-[1680px] flex-wrap px-10 pt-0 pb-[100px] max-[768px]:flex-col'>
        <div className='mx-0 mt-8 mb-12 flex-1 text-left text-[3rem] font-semibold'>
          자주 묻는 질문과 <br />
          답변
        </div>
        <div className='flex-1 text-left'>
          {QnAItems.map(({ id, question, answer }) => (
            <div className='px-0 py-[10px] [border-bottom:1px_solid_#ccc]' key={id}>
              <button
                className='pli-question flex h-[88px] w-full cursor-pointer items-center justify-between text-left text-[23px] break-keep'
                onClick={() => toggleDropdown(id)}
              >
                <div>{question}</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 32 32'
                  aria-hidden='true'
                  role='presentation'
                  className={`block h-4 w-4 overflow-visible fill-none stroke-current stroke-[4] transition-transform duration-500 ease-[ease] ${
                    openItem === id ? '[transform:rotate(180deg)]' : '[transform:rotate(0deg)]'
                  }`}
                >
                  <path fill='none' d='M28 12 16.7 23.3a1 1 0 0 1-1.4 0L4 12' />
                </svg>
              </button>
              <div
                className='pli-answer rounded-[4px] bg-[#f9f9f9] text-[18px] [transition:height_0.3s_ease] max-[1024px]:text-[16px]'
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
