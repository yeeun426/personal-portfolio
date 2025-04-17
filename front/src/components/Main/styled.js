import styled from 'styled-components';

export const SideBarStyled = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(images/main/background.webp);
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
  .aside-tab button {
    padding: 0;
    position: relative;
  }
  .aside-tab button::before {
    content: '';
    position: absolute;
    bottom: 0;
    transform: translateX(0%);
    width: 0%;
    height: 3px;
    background-color: #cccccc;
    transition: 0.3s;
  }
  .aside-tab button:hover::before {
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
    font-family: 'Noto Sans KR';
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

  .menu-item {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 6px #bcbcbcd1;
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

  // 반응형 중
  @media (max-width: 1080px) {
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
      bottom: 11.5rem;
      display: block;
      z-index: 100;
    }
  }

  // 반응형 소
  @media (max-width: 500px) {
    .main-container {
      justify-content: center;
    }
    .main-container > img {
      height: 50%;
    }
  }
`;

export const EduStyled = styled.div`
  background-color: #f5f5f7;
  position: relative;

  .aboutme-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 8rem 24px;
    min-height: calc(100vh - 366px);
    word-break: keep-all;
  }

  .aboutme-list {
    display: flex;
    align-items: center;
    place-content: center;
    width: 100%;
    height: clamp(250px, 50vw, 375px);
    position: relative;
    border-radius: 20px;
    transition: transform 0.3s ease;
    background: rgb(108 108 108 / 21%);
    filter: blur(3px);
  }

  .aboutme-list.active {
    transform: scale(1.1);
    background: white;
    filter: none;
  }

  .aboutme-title {
    font-size: 15px;
    position: absolute;
    top: 3%;
    right: 2%;
    background: #c8acfa;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
  }

  .aboutme-item {
    width: 50%;
    height: 100%;
    text-align: left;
  }

  .education .bg-color {
    border-radius: 0px 20px 20px 0px;
  }

  .skill .bg-color {
    border-radius: 20px 0px 0px 20px;
  }

  .bg-color {
    background-color: #3737371a;
  }

  .edu-name {
    font-weight: bold;
    line-height: 140%;
  }

  h4 {
    font-size: max(calc(1rem + 1vw), 30px);
  }

  .edu-sub {
    font-size: 20px;
    margin-bottom: 25px;
  }

  .edu-desc {
    padding-left: 1rem;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .edu-desc li {
    font-size: 18px;
    list-style: disc;
  }

  .portfolio-title {
    font-size: 3.4em;
    font-weight: bold;
    text-align: left;
    font-family: sans-serif;
  }

  .skill .aboutme-item {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
  }

  .skill-title {
    display: flex;
    align-items: anchor-center;
    gap: 1rem;
    font-size: 21px;
    font-weight: bold;
  }

  .skill-desc {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
  }

  .skill-img {
    width: 45px;
  }

  .skills-item {
    display: flex;
    gap: 10px;
    flex-direction: column;

    ul {
      display: flex;
      gap: 20px;
      font-size: 18px;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 800px) {
    .aboutme-wrapper {
      transform: none;
      position: static;
      gap: 100px;
    }
    .aboutme-list {
      flex-direction: column;
      height: auto;
      width: 70%;
      margin: auto;
    }
    .aboutme-item {
      width: 100%;
    }
    .education .bg-color {
      border-radius: 0px 0px 20px 20px;
    }
    .skill .bg-color {
      border-radius: 20px 20px 0px 0px;
    }
  }

  @media (max-width: 500px) {
    .aboutme-list {
      width: 90%;
    }
    .skills-item ul {
      padding: 0;
      justify-content: center;
    }
    .skills-item svg {
      width: 85px;
    }
  }
`;
