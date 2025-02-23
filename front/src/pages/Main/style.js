import styled from 'styled-components';

export const MainStyled = styled.div`
  overflow-x: hidden;
`;

export const IntroduceStyled = styled.div`
  background-color: #f5f5f7;
  position: relative;

  .aboutme-wrapper {
    box-sizing: border-box;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
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
