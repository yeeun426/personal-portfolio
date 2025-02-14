import { IntroduceStyled } from './style';
import React, { useEffect, useState, useRef } from 'react';

export default function Introduce() {
  const componentsRef = useRef([]); // 여러 요소를 감지하기 위한 ref 배열
  const [centerIdx, setCenterIdx] = useState(null); // 현재 중앙에 있는 요소의 인덱스

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCenterIdx(Number(entry.target.dataset.index)); // 중앙에 있는 요소의 인덱스를 저장
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // 뷰포트 중앙 감지
        threshold: 0, // 걸쳐지기만 해도 감지
      }
    );

    componentsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      componentsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <IntroduceStyled>
      <div className='aboutme-wrapper'>
        <div
          key={0}
          ref={(el) => (componentsRef.current[0] = el)}
          data-index={0}
          className={`aboutme-list education ${
            centerIdx === 0 ? 'active' : ''
          }`}
        >
          <div className='aboutme-title'>#Education</div>
          <div className='aboutme-item p-5'>
            <div className='edu-date'>2025.01 ~</div>
            <h4 className='edu-name'>[LG유플러스]유레카 SW 교육</h4>
            <div className='edu-sub'>2기 프론트엔드 수강</div>
            <ul className='edu-desc'>
              <li>
                JavaScript, React, Next.js, Spring 기반 웹 애플리케이션 개발
                역량 습득
              </li>
              <li>알고리즘 문제 해결 및 데이터 구조 학습 (Java 활용)</li>
            </ul>
          </div>
          <div className='aboutme-item p-5 bg-color'>
            <div className='edu-date'>2019.03 ~ 2024.02</div>
            <h4 className='edu-name'>한국외국어대학교</h4>
            <div className='edu-sub'>
              정보통신공학과 학사 졸업 (이중전공: 통계학)
            </div>
            <ul className='edu-desc'>
              <li>학점 3.7 / 4.5</li>
              <li>운영체제 조교 활동 (과제 평가 및 학생 지도)</li>
              <li>확률과 통계 조교 활동 (과제 평가 및 학생 지도)</li>
            </ul>
          </div>
        </div>
        <div
          key={1}
          ref={(el) => (componentsRef.current[1] = el)}
          data-index={1}
          className={`aboutme-list skill ${centerIdx === 1 ? 'active' : ''}`}
        >
          <div className='aboutme-title'>#Skill</div>
          <div className='aboutme-item p-5 bg-color'>
            <div className='skills-item'>
              <div className='skill-title'>
                <img
                  className='skill-img'
                  src='images/icon/1st.png'
                  alt='Strong'
                />
                <div className='skill-title'>Strong</div>
              </div>
              <ul>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                  >
                    <path fill='#ffd600' d='M6,42V6h36v36H6z'></path>
                    <path
                      fill='#000001'
                      d='M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z'
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#E65100'
                      d='M41,5H7l3,34l14,4l14-4L41,5L41,5z'
                    ></path>
                    <path
                      fill='#FF6D00'
                      d='M24 8L24 39.9 35.2 36.7 37.7 8z'
                    ></path>
                    <path
                      fill='#FFF'
                      d='M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z'
                    ></path>
                    <path
                      fill='#EEE'
                      d='M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z'
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 50 50'
                  >
                    <path
                      d='M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9509974 22.90625 7.4023438 C 21.147758 5.9719089 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.404125 12.173992 10.763672 14.412109 C 10.888559 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671996 41.431263 26.366006 42.068338 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.413715 46.164908 36.748047 45.394531 C 38.082379 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.855304 39.195312 35.617188 C 39.031899 34.599965 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677151 15.800695 32.435744 15.435401 30.046875 15.220703 C 28.847638 13.559329 27.615404 12.045781 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015452 7.6275969 21.642578 8.9511719 C 22.267037 9.4591336 22.905298 10.047651 23.548828 10.673828 C 22.297283 12.027473 21.054862 13.55414 19.847656 15.230469 C 17.468889 15.449074 15.236606 15.81635 13.201172 16.310547 C 13.014826 15.545537 12.849558 14.798586 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.238404 12.677734 8.9140625 C 12.960128 7.5897208 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791172 13.029071 26.605956 13.99916 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.91454 18.402344 28.810547 C 17.668186 27.538949 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.548828 17.410156 C 33.197299 17.615841 34.745083 17.901405 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725422 19.243926 32.140408 18.316416 31.548828 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398803 20.758169 13.190811 22.834118 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 15.341797 27.365234 C 15.762496 28.177853 16.200028 28.993283 16.671875 29.810547 C 17.041048 30.449973 17.418073 31.072393 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 34.619141 27.365234 C 35.143284 28.605725 35.599609 29.819681 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765252 28.981717 34.201083 28.171917 34.619141 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.64638 35.904859 22.092967 37.709497 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842987 33.980548 37.069013 34.98935 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.468699 43.247993 35.748047 43.664062 C 35.027395 44.080132 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.399747 28.314453 41.076172 C 27.678439 40.558811 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882144 35.473968 21.867188 34.101562 z'
                      clipRule='evenodd'
                      fillRule='evenodd'
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                  >
                    <linearGradient
                      id='atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1'
                      x1='6'
                      x2='42'
                      y1='24'
                      y2='24'
                      gradientUnits='userSpaceOnUse'
                    >
                      <stop offset='0' stopColor='#0d61a9'></stop>
                      <stop offset='1' stopColor='#16528c'></stop>
                    </linearGradient>
                    <path
                      fill='url(#atmafua87GAY-Q3DVUuwga_nCj4PvnCO0tZ_gr1)'
                      d='M40,6H8C6.895,6,6,6.895,6,8v32c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8 C42,6.895,41.105,6,40,6z'
                    ></path>
                    <path
                      d='M38.819,30.606c-0.814-1.065-1.899-1.683-2.951-2.191c-0.319-0.154-0.639-0.305-0.959-0.456	c-0.665-0.313-1.353-0.637-2.002-0.983c-0.485-0.259-0.382-0.509-0.327-0.644c0.052-0.127,0.264-0.216,0.516-0.216	c0.075,0,0.152,0.008,0.228,0.022c0.284,0.053,0.816,0.507,1.094,0.933l0.272,0.416l0.271,0.416l0.418-0.269l0.418-0.269	c0.082-0.053,2.025-1.302,2.759-1.834l0.304-0.22l0.304-0.22l-0.126-0.353l-0.126-0.353c-0.049-0.138-1.264-3.38-6.221-3.38h-0.006	c-1.611,0.042-2.972,0.603-4.066,1.669c-0.23,0.225-0.434,0.476-0.617,0.745V22v-0.5V21h-0.5H27H14h-0.5H13v0.5V22v3.034v0.5v0.5	h0.5H14h3.972v12.938v0.5v0.5h0.5h0.5h2.993h0.498h0.498l0.002-0.498l0.002-0.498l0.049-12.942H27h0.074	c-0.023,0.238-0.038,0.479-0.033,0.723c0.031,1.573,0.664,3.029,1.737,3.994c0.726,0.653,1.565,1.114,2.377,1.56l0.214,0.118	c0.541,0.299,1.096,0.561,1.632,0.815c0.426,0.202,0.841,0.398,1.247,0.611c0.151,0.079,0.211,0.183,0.205,0.358	c-0.007,0.236-0.099,0.365-0.326,0.461c-0.348,0.147-0.687,0.221-1.009,0.221c-0.484,0-0.954-0.171-1.399-0.509	c-0.238-0.181-0.471-0.455-0.719-0.746c-0.141-0.165-0.284-0.332-0.436-0.497l-0.273-0.294l-0.273-0.294l-0.346,0.202l-0.346,0.202	c-0.869,0.507-2.844,1.696-2.844,1.696l-0.422,0.254l-0.422,0.254l0.248,0.426l0.248,0.426c0.713,1.223,1.711,2.287,2.671,2.848	c1.331,0.778,2.785,1.172,4.322,1.172c0.837,0,1.715-0.118,2.61-0.35c1.932-0.501,3.332-1.751,3.942-3.52	C40.321,34.311,39.983,32.128,38.819,30.606z'
                      opacity='.05'
                    ></path>
                    <path
                      d='M32.69,21.505h-0.006l-0.007,0c-1.461,0.038-2.709,0.552-3.71,1.527c-0.934,0.911-1.454,2.264-1.425,3.715 c0.029,1.436,0.601,2.76,1.571,3.633c0.683,0.614,1.497,1.062,2.284,1.494l0.214,0.118c0.528,0.291,1.075,0.551,1.605,0.802 c0.425,0.201,0.85,0.402,1.265,0.62c0.321,0.168,0.485,0.451,0.473,0.817c-0.014,0.43-0.226,0.735-0.631,0.906 c-0.41,0.173-0.814,0.26-1.203,0.26c-0.595,0-1.168-0.206-1.702-0.611c-0.281-0.213-0.532-0.508-0.797-0.82 c-0.136-0.159-0.274-0.322-0.422-0.481l-0.273-0.294l-0.346,0.202c-0.867,0.506-2.838,1.693-2.838,1.693l-0.422,0.254l0.248,0.426 c0.671,1.152,1.602,2.149,2.491,2.668c1.254,0.732,2.623,1.104,4.07,1.104c0.795,0,1.63-0.112,2.484-0.334 c1.764-0.458,3.041-1.594,3.595-3.199c0.587-1.702,0.279-3.701-0.786-5.094c-0.75-0.982-1.775-1.563-2.771-2.045 c-0.317-0.153-0.636-0.304-0.955-0.454c-0.671-0.316-1.365-0.643-2.025-0.995c-0.57-0.304-0.767-0.756-0.555-1.274 c0.133-0.325,0.508-0.527,0.979-0.527c0.105,0,0.213,0.01,0.321,0.031c0.471,0.088,1.104,0.667,1.42,1.152l0.271,0.416 l0.418-0.269c0.082-0.053,2.019-1.299,2.737-1.818l0.304-0.22l-0.126-0.353C38.396,24.429,37.299,21.505,32.69,21.505 L32.69,21.505z'
                      opacity='.05'
                    ></path>
                    <path
                      d='M27.5,21.5H27H14h-0.5V22v3.034v0.5H14h4.472v13.438v0.5h0.5h2.993h0.498l0.002-0.498l0.051-13.44H27h0.5v-0.5V22V21.5 L27.5,21.5z'
                      opacity='.05'
                    ></path>
                    <path
                      fill='#fff'
                      d='M29.832,33.824c0.45,0.485,0.809,0.998,1.284,1.359c1.031,0.784,2.197,0.921,3.401,0.413 c0.579-0.244,0.917-0.716,0.937-1.35c0.018-0.56-0.252-1.019-0.741-1.276c-0.942-0.494-1.93-0.903-2.861-1.417 c-0.834-0.46-1.705-0.916-2.405-1.546c-1.855-1.67-1.851-4.942-0.132-6.617c0.935-0.911,2.064-1.351,3.374-1.385 c4.31,0,5.279,2.716,5.279,2.716c-0.715,0.517-2.714,1.803-2.714,1.803c-0.358-0.549-1.09-1.246-1.747-1.37 c-0.826-0.155-1.593,0.159-1.855,0.798c-0.302,0.737-0.04,1.466,0.782,1.905c0.979,0.522,1.997,0.973,2.997,1.457 c0.98,0.474,1.918,1.018,2.592,1.899c1.704,2.229,1.365,6.494-2.537,7.506c-2.133,0.553-4.218,0.427-6.177-0.718 c-0.923-0.539-1.783-1.581-2.311-2.488C27,35.513,28.967,34.329,29.832,33.824z'
                    ></path>
                    <polygon
                      fill='#fff'
                      points='14,22 14,25.034 18.972,25.034 18.972,38.972 21.965,38.972 22.018,25.034 27,25.034 27,22'
                    ></polygon>
                  </svg>
                </li>
              </ul>
              <div className='skill-desc'>JS, HTML/CSS, REACT, TS</div>
            </div>
          </div>
          <div className='aboutme-item p-5'>
            <div className='skills-item'>
              <div className='skill-title'>
                <img
                  className='skill-img'
                  src='images/icon/2nd.png'
                  alt='Knowledgeable'
                />
                <div className='skill-title'>Knowledgeable</div>
              </div>
              <ul>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 50 50'
                  >
                    <path d='M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.581015 12.484998 30.154506 14.841797 33.492188 C 14.278671 34.225786 14 35.114721 14 36 C 14 36.972222 14.318681 37.957881 15.001953 38.726562 C 15.685226 39.495244 16.75 40 18 40 C 19.25 40 20.314774 39.495244 20.998047 38.726562 C 21.681319 37.957881 22 36.972222 22 36 C 22 35.027778 21.681319 34.042119 20.998047 33.273438 C 20.314774 32.504756 19.25 32 18 32 C 17.417923 32 16.88232 32.117915 16.400391 32.3125 C 14.317709 29.317793 13 25.144037 13 20.486328 C 13 11.395328 17.935 4 24 4 C 29.419 4 33.923219 9.9093906 34.824219 17.650391 C 35.531219 17.919391 36.232734 18.222641 36.927734 18.556641 C 36.246734 9.2666406 30.71 2 24 2 z M 22 15 C 20.75 15 19.685226 15.504756 19.001953 16.273438 C 18.318681 17.042119 18 18.027778 18 19 C 18 19.972222 18.318681 20.957881 19.001953 21.726562 C 19.685226 22.495244 20.75 23 22 23 C 23.25 23 24.314774 22.495244 24.998047 21.726562 C 25.425092 21.246137 25.694239 20.67767 25.847656 20.083984 C 29.425245 19.930128 33.445887 20.987107 37.142578 23.203125 C 45.036578 27.935125 49.012859 36.186703 46.005859 41.595703 C 44.931859 43.526703 43.056938 44.897594 40.585938 45.558594 C 37.123937 46.486594 32.8715 45.916078 28.8125 44.080078 C 28.2265 44.551078 27.60675 44.996734 26.96875 45.427734 C 30.29375 47.106734 33.8125 47.996094 37.0625 47.996094 C 38.4735 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.277906 36.224406 46.978922 26.769281 38.169922 21.488281 C 34.19387 19.103202 29.825568 17.936523 25.886719 18.064453 C 25.744166 17.416386 25.4608 16.794034 24.998047 16.273438 C 24.314774 15.504756 23.25 15 22 15 z M 22 17 C 22.749999 17 23.185226 17.245244 23.501953 17.601562 C 23.81868 17.957881 24 18.472222 24 19 C 24 19.527778 23.81868 20.042119 23.501953 20.398438 C 23.185226 20.754756 22.749999 21 22 21 C 21.250001 21 20.814774 20.754756 20.498047 20.398438 C 20.18132 20.042119 20 19.527778 20 19 C 20 18.472222 20.18132 17.957881 20.498047 17.601562 C 20.814774 17.245244 21.250001 17 22 17 z M 9.1621094 23.332031 C 2.1981094 28.772031 -0.89795313 36.906406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.683281 8.8984375 47.488281 C 10.169438 47.828281 11.528453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.911031 46.787719 24.707031 44.511719 C 29.262758 41.780488 32.543671 37.933128 34.212891 33.978516 C 35.367764 33.923167 36.355158 33.449812 36.998047 32.726562 C 37.681319 31.957881 38 30.972222 38 30 C 38 29.027778 37.681319 28.042118 36.998047 27.273438 C 36.314774 26.504756 35.25 26 34 26 C 32.75 26 31.685226 26.504756 31.001953 27.273438 C 30.318681 28.042119 30 29.027778 30 30 C 30 30.972222 30.318681 31.957882 31.001953 32.726562 C 31.334027 33.100145 31.760237 33.407648 32.25 33.628906 C 30.681548 37.037695 27.715244 40.376565 23.677734 42.796875 C 18.927734 45.645875 13.596062 46.678594 9.4140625 45.558594 C 6.9420625 44.896594 5.0690938 43.526703 3.9960938 41.595703 C 1.4540938 37.022703 3.9149531 30.427766 9.5019531 25.634766 C 9.3569531 24.883766 9.2441094 24.114031 9.1621094 23.332031 z M 34 28 C 34.749999 28 35.185226 28.245244 35.501953 28.601562 C 35.81868 28.957881 36 29.472222 36 30 C 36 30.527778 35.81868 31.042118 35.501953 31.398438 C 35.185226 31.754756 34.749999 32 34 32 C 33.250001 32 32.814774 31.754756 32.498047 31.398438 C 32.18132 31.042119 32 30.527778 32 30 C 32 29.472222 32.18132 28.957882 32.498047 28.601562 C 32.814774 28.245244 33.250001 28 34 28 z M 18 34 C 18.749999 34 19.185226 34.245244 19.501953 34.601562 C 19.81868 34.957881 20 35.472222 20 36 C 20 36.527778 19.81868 37.042119 19.501953 37.398438 C 19.185226 37.754756 18.749999 38 18 38 C 17.250001 38 16.814774 37.754756 16.498047 37.398438 C 16.18132 37.042119 16 36.527778 16 36 C 16 35.472222 16.18132 34.957881 16.498047 34.601562 C 16.814774 34.245244 17.250001 34 18 34 z'></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#0277BD'
                      d='M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z'
                    ></path>
                    <path
                      fill='#FFC107'
                      d='M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z'
                    ></path>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#F44336'
                      d='M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z'
                    ></path>
                    <path
                      fill='#F44336'
                      d='M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z'
                    ></path>
                    <g>
                      <path
                        fill='#1565C0'
                        d='M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z'
                      ></path>
                      <path
                        fill='#1565C0'
                        d='M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z'
                      ></path>
                      <path
                        fill='#1565C0'
                        d='M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z'
                      ></path>
                      <path
                        fill='#1565C0'
                        d='M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z'
                      ></path>
                      <path
                        fill='#1565C0'
                        d='M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z'
                      ></path>
                    </g>
                  </svg>
                </li>
                <li>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='100'
                    height='100'
                    viewBox='0 0 48 48'
                  >
                    <path
                      fill='#212121'
                      d='M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z'
                    ></path>
                  </svg>
                </li>
              </ul>
              <div className='skill-desc'>Redux, Python, JAVA, NextJS</div>
            </div>
          </div>
        </div>
      </div>
    </IntroduceStyled>
  );
}
