import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import axios from 'axios';

import { PortfolioStyled, DropIcon } from './styled.js';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Portfolio({ projectId }) {
  const [data, setData] = useState([]);
  const [otherProject, setOtherProject] = useState([]);
  const [QnAItems, setQnAItems] = useState([]);
  useEffect(() => {
    axios
      .get('/data/project.json')
      .then((res) => {
        let axis_data = res.data;
        let random_id = Math.floor(Math.random() * (axis_data.length - 1)) + 1;
        while (random_id === Number(projectId)) {
          random_id = Math.floor(Math.random() * (axis_data.length - 1)) + 1;
        }
        axis_data.map((item) => {
          if (Number(projectId) === item.id) {
            setData(item);
            setQnAItems(item.QnA || []);
          }
          if (random_id === item.id) {
            setOtherProject(item);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [projectId]);

  const [scrollPosition, setScrollPosition] = useState(0); // 스크롤 위치 저장
  const updateScroll = () => {
    const modalElement = document.querySelector('.ReactModal__Content');
    if (modalElement) {
      setScrollPosition(modalElement.scrollTop);
    }
  };
  // 수직 스크롤 위치 - scrollY
  // 일부 브라우저(IE, 구형 Edge, 구형 Firefox, 구형 chrome)

  useEffect(() => {
    const modalElement = document.querySelector('.ReactModal__Content');
    if (modalElement) {
      modalElement.addEventListener('scroll', updateScroll);
      return () => {
        modalElement.removeEventListener('scroll', updateScroll);
      };
    }
  }, [data]);

  const scale =
    scrollPosition > 150 ? Math.max(1 - scrollPosition / 5000, 0.875) : 1;

  const divStyle = {
    minHeight: '680px',
    transform: `scale(${scale})`,
    transition: 'transform',
  };

  function getYouTubeEmbedUrl(url) {
    const videoId = new URL(url).searchParams.get('v');
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  }

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
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
              />
            </div>
          )}
          {data.video && (
            <div style={divStyle}>
              <video
                src={process.env.PUBLIC_URL + '/' + data.video}
                preload='none'
                controls
                muted
                playsInline
                autoPlay
                poster={data.img}
              />
            </div>
          )}
        </div>
      </div>
      <PortFolioDesc data={data} />
      <PortfolioDetail data={data} params={projectId} />
      <PortfolioQnA QnAItems={QnAItems} />
      {/* <div className='portfolio-other'>
        <div className='portfolio-sub-title'>또 다른,</div>
        <div className='other-project'>
          <div className='other-desc'>
            <div className='other-desc-title'>{otherProject.name}</div>
            <div className='other-desc-txt'>
              "{otherProject.detail}"을 지금 바로 만나보세요.
            </div>
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
      </div> */}
      <div className='portfolio-email'>
        <img src={process.env.PUBLIC_URL + '/images/me_more.JPG'} alt='more' />
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

const PortFolioDesc = ({ data }) => {
  return (
    <div className='portfolio-description'>
      <div className='portfolio-sub-title'>알면 알수록, {data.name}.</div>
      <Swiper
        className='desc-swiper'
        slidesPerView='auto'
        spaceBetween={20}
        freeMode={true}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          // 1024px 이상
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
              <div className='img-detail'>{data.skills?.organization}</div>
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
            <button
              className='detail-txt-btn'
              onClick={() => window.open(data.skills.github)}
            >
              Github 바로가기 ❯
            </button>
            {data?.skills?.video && (
              <button
                className='detail-txt-btn'
                onClick={() => window.open(data?.skills?.video)}
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
        <div>{data.name}, 자세히 살펴보기.</div>
        <button onClick={() => window.open(data.skills.github)}>
          Github 바로가기 ❯
        </button>
      </div>
      <Swiper
        className={params === '3' ? 'detail-page maplix' : 'detail-page'}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
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
              src={process.env.PUBLIC_URL + '/' + page.img}
              loading='lazy'
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
