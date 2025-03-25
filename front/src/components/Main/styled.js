import styled from 'styled-components';

export const SideBarStyled = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(images/background.png);
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

    button {
      padding: 0;
    }
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
    font-family: 'Noto Sans KR';
    font-size: 43px;
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
    }

    h2 {
      color: black;
    }

    p {
      font-size: 1.25rem;
      font-family: 'Noto Sans KR';
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

  // 반응형
  @media (max-width: 1080px) {
    height: auto;
    display: block;

    .main-aside {
      width: 100%;
      align-items: center;
      gap: 2rem;
    }

    .main-container {
      width: 100%;
      padding: 3rem 2rem 0;
      height: 100vh;
    }
  }

  @media (max-width: 500px) {
    .main-aside {
      height: 100vh;
    }
  }
`;
