import styled from 'styled-components';

// 기존 React 버전 components/Main/styled.js 의 SideBarStyled 그대로
export const SideBarStyled = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url('/images/main/background.webp');
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;

  strong {
    font-weight: 900;
  }

  .main-aside {
    height: 100vh;
    width: 20vw;
    background: #f1f1f191;
    z-index: 100;
    max-width: 340px;

    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .aside-tab {
    display: flex;
    flex-direction: column;
    text-align-last: left;
    gap: 30px;
    font-size: 30px;
  }
  .aside-tab button,
  .aside-tab a {
    padding: 0;
    position: relative;
  }
  .aside-tab button::before,
  .aside-tab a::before {
    content: '';
    position: absolute;
    bottom: 0;
    transform: translateX(0%);
    width: 0%;
    height: 3px;
    background-color: #cccccc;
    transition: 0.3s;
  }
  .aside-tab button:hover::before,
  .aside-tab a:hover::before {
    width: 90%;
  }

  .fixed-tab {
    display: flex;
    flex-direction: column;
    text-align-last: left;
    gap: 30px;
    font-size: 30px;
    z-index: 10;
  }

  .scrolled .fixed-tab {
    position: fixed;
    top: 30px;
    left: 3rem;
    font-family: var(--font-noto-sans-kr);
    font-size: 40px;
    gap: 10px;

    button {
      font-weight: bold;
      color: #cccccc;
    }
  }

  .scrolled .fixed-tab button.active {
    color: #9778c9;
  }

  .aside-info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    font-size: 18px;

    img {
      width: 100px;
      height: auto; /* next/image width/height 속성 대신 원본 비율 유지 */
    }
  }

  .main-container {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    height: 100%;
    gap: 15px;
    word-break: keep-all;
    width: calc(100vw - 20vw); /* 100vw에서 20vw를 뺀 값 */
    max-width: calc(100% - 340px); /* 최대 너비는 340px을 뺀 값 */

    img {
      height: 70%;
      width: auto; /* next/image width/height 속성 대신 원본 비율 유지 */
    }

    h2 {
      color: black;
    }

    p {
      font-size: 1.25rem;
      font-family: var(--font-noto-sans-kr);
      strong {
        font-size: 20px;
        font-weight: bold;
      }
    }
  }

  .down-btn svg {
    width: 50px;
    color: white;
    position: absolute;
    bottom: 5%;
    z-index: 100;
    left: 50%;
    animation: shake-vertical 5s ease-in-out 3s infinite both;
  }

  .menu-item {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 8px #32323275;
    padding: 5px;
    box-sizing: border-box;
    background: white;
    display: none;
  }
  .menu-item > button {
    width: 100%;
    height: 100%;
  }
  .menu-item > button > svg {
    width: 27px;
    height: 27px;
  }

  @keyframes shake-vertical {
    0%,
    100% {
      transform: translateY(0);
    }
    10%,
    30%,
    50%,
    70% {
      transform: translateY(-8px);
    }
    20%,
    40%,
    60% {
      transform: translateY(8px);
    }
    80% {
      transform: translateY(6.4px);
    }
    90% {
      transform: translateY(-6.4px);
    }
  }

  /* 태블릿용 (1023px 이하일 때) */
  @media (max-width: 1023px) {
    height: auto;
    display: block;

    .main-aside {
      width: 100%;
      align-items: center;
      gap: 2rem;
      left: -100%;
      transition: 0.3s;
      position: fixed;
      top: 0;
    }
    .main-aside.on {
      left: 0;
      min-width: 210px;
      padding: 2rem 1rem;
      width: 30vw;
    }
    .main-container {
      width: 100%;
      padding: 3rem 2rem 0;
      height: 100vh;
      margin: auto;
      max-width: none;
    }
    .menu-item {
      position: fixed;
      right: 3.25rem;
      top: 2.25rem;
      display: block;
      z-index: 100;
    }
  }

  /* 모바일용 (767px 이하일 때) */
  @media (max-width: 767px) {
    .main-container {
      justify-content: center;
    }
    .main-container > img {
      height: 50%;
    }
  }
`;
