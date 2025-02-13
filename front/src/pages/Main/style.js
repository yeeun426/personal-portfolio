import styled from 'styled-components';

export const MainStyled = styled.div`
  overflow-x: hidden;
`;

export const IntroduceStyled = styled.div`
  height: 100vh;
  background-color: #f5f5f7;
  position: relative;

  .aboutme-wrapper {
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: flex-start;
    width: 100%;
    max-width: 1104px;
    margin: 0 auto;
    padding: 0 24px;
    min-height: calc(100vh - 366px);
  }

  .aboutme-list {
    display: flex;
    align-items: center;
    place-content: center;
    background: white;
    width: 100%;
    height: clamp(250px, 50vw, 375px);
    position: relative;
    border-radius: 20px;
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
    font-size: 30px;
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

  .aboutme-myinfo {
    display: flex;
    gap: 10px;
    flex-direction: column;
    margin-top: 35px;
  }

  .aboutme-myinfo-items {
    display: flex;
  }

  .aboutme-myinfo-items :nth-child(1) {
    width: 130px;
    text-align: left;
  }

  .aboutme-myinfo-items :nth-child(2) {
    width: 70px;
    text-align: left;
  }

  .aboutme-bottom {
    text-align: -webkit-center;
    margin-top: 35px;
  }

  .aboutme-bottom-contents {
    background: white;
    width: fit-content;
    border-radius: 100px;
    padding: 5px 90px;
    box-shadow: #80808036 13px 15px 30px;

    display: flex;
  }

  .skill-img {
    width: 45px;
  }

  .skill-title {
    font-size: 21px;
    font-weight: bold;
  }

  .skills-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .skills-item :nth-child(3) {
    line-height: 1.3;
  }

  @keyframes slide {
    from {
      right: -500px;
      opacity: 0;
    }
    to {
      right: 0px;
      opacity: 1;
    }
  }

  @keyframes disappear {
    from {
      right: 0px;
      opactity: 1;
    }
    to {
      right: -500px;
      opacity: 0;
    }
  }
`;
