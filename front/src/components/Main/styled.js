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

export const HeaderStyled = styled.div`
  position: fixed;
  left: 0px;
  z-index: 100;
  width: 100%;
  background: #ffffff78;
  top: 0px;

  grid-template: auto / repeat(3, 1fr);
  display: grid;
  grid-column: 1 / auto;
  gap: 10px;
  align-items: center;

  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    justify-self: center;

    img {
      width: 30px;
      border: 1px solid #c1bfbf;
      padding: 6px;
      border-radius: 50px;
    }
  }

  .header-logo {
    width: 95px;
    justify-self: center;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  button {
    font-size: 16px;
  }
`;

export const FooterStyled = styled.div`
  background: #f5f5f7;
  padding: 4em 0;

  .footer-my {
    display: flex;
    justify-content: center;
    gap: 80px;
  }

  .my-info {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 210px;
    text-align: left;
  }

  .my-info img {
    padding: 10px;
    box-sizing: border-box;
    width: 60px;
    background: #45444414;
    border-radius: 100%;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 9em;
    margin: 4em;
  }

  @media (max-width: 800px) {
    padding: 2rem;

    .footer-my {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
