import styled from 'styled-components';

export const MainStyled = styled.div`
  overflow-x: hidden;

  // .mainIntro-wrapper {
  //   height: 100vh;
  //   background: url(images/background.png) fixed;
  //   background-image: linear-gradient(
  //       rgba(255, 255, 255, 0.1),
  //       rgba(255, 255, 255, 0.1)
  //     ),
  //     url(images/background.png);
  //   position: relative;
  //   background-repeat: no-repeat;
  //   background-size: cover;
  //   background-position: center;
  //   box-sizing: border-box;
  // }

  // .swiper-wrapper {
  //   height: 100vh;
  // }
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
  }
  .aboutme-top {
    display: flex;
    align-items: center;
    place-content: center;
    gap: 70px;
    width: max-content;
  }

  .aboutme-img {
    height: 40vh;
  }

  .aboutme-txt {
    text-align: left;
    line-height: 1.35;
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

  .aboutme-skill-img {
    width: 45px;
  }

  .aboutme-skill-title {
    font-size: 21px;
    font-weight: bold;
  }

  .aboutme-skills-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 150px;
    border-radius: 50%;
    height: 170px;
    padding: 15px;
  }

  .aboutme-skills-item :nth-child(3) {
    line-height: 1.3;
  }

  .aboutme-list {
    position: absolute;
    right: 0px;
    animation: slide 2s;
    opacity: 1;
  }

  .aboutme-list.disappear {
    animation: disappear 1s ease-out forwards;
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
