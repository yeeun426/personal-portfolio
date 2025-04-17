import styled from 'styled-components';

export const PortfolioStyled = styled.div`
  overflow: hidden;
  font-weight: 600;
  text-align: center;
  white-space: pre-wrap;

  .header {
    position: relative;
    background: rgb(250, 250, 252);
  }

  .header-logo {
    width: 60px;
  }

  .portfolio-title {
    display: flex;
    align-items: center;
    place-content: center;
    justify-content: space-between;
    padding: 80px 0;
    margin-inline-start: auto;
    margin-inline-end: auto;
    width: 87.5vw;
    max-width: 1680px;
  }

  .title-name {
    font-size: 80px;
  }

  .title-detail {
    font-size: 28px;
    max-width: 290px;
    text-align: left;
    word-break: keep-all;
  }

  .scroll-video {
    transition: 2s;
    margin: 0 auto;
    width: 87.5%;
  }

  .scrolled-video {
    transition: 2s;
    margin: 0 auto;
    width: 100%;
  }

  .portfolio-video > div {
    min-height: 680px;
    max-width: 1920px;
    max-height: 1260px;
  }

  .portfolio-video video {
    height: 100%;
    width: 100%;
    object-position: center top;
    object-fit: cover;
    border-radius: 18px;
  }

  .portfolio-description {
    padding-top: 100px;
    padding-bottom: 150px;
  }

  .portfolio-sub-title {
    width: 87.5vw;
    max-width: 1680px;
    margin: auto;
    padding-bottom: 70px;
    font-size: 56px;
    font-weight: 600;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .desc-swiper img {
    width: 100%;
    border-radius: 28px;
    margin-right: 18px;
    height: 100%;
    object-fit: cover;
  }

  .desc-swiper .swiper-slide {
    min-width: 260px;
    max-width: 420px;
    aspect-ratio: 0.54;
  }

  .portfolio-description .swiper-slide {
    position: relative;
    border-radius: 28px;
  }

  .portfolio-description .swiper-slide .detail-txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 35px;
    color: white;
    width: 95%;
    word-break: keep-all;
    text-align: left;

    .detail-title {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  .portfolio-description .swiper-slide .detail-txt.role {
    font-size: 21px;
    line-height: 1.58;
    font-weight: 400;
    background: #0000003d;
    padding: 30px 0;
  }

  .portfolio-description .desc-swiper .swiper-slide:nth-child(1) .detail-txt {
    top: 15%;
    width: 85%;
    font-size: 25px;
    color: black;
    word-break: keep-all;
    left: 46%;
  }

  .portfolio-description .desc-swiper .swiper-slide:nth-child(2) .detail-txt {
    top: 80%;
    font-size: 25px;
    width: 90%;
  }

  .portfolio-description .desc-swiper .swiper-slide:nth-child(3) .detail-txt {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .img-detail {
      font-weight: bold;
    }
  }

  .portfolio-description .desc-swiper .swiper-slide:nth-child(6) .detail-txt {
    top: 18%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
    gap: 10px;

    button {
      font-size: 25px;
    }
  }

  .desc-swiper {
    padding: 0 calc(50vw - min(1680px, 87.5vw) / 2) 70px;
  }

  .desc-swiper .swiper-button-next,
  .desc-swiper .swiper-button-prev {
    bottom: 0px;
    top: auto;
    scale: 0.8;
    color: deeppink;
  }

  .desc-swiper .swiper-button-prev {
    right: 150px;
    left: auto;
  }

  .desc-swiper .swiper-button-next {
    right: 90px;
  }

  .portfolio-detail,
  .portfolio-learn {
    background: #fafafa;
    padding-top: 150px;
  }

  .portfolio-sub-title button {
    color: rgb(0, 102, 204);
    font-size: 17px;
    font-weight: 400;
  }

  .detail-page .swiper-slide {
    aspect-ratio: 1709/944;
    background: white;
    box-sizing: border-box;
    border-radius: 15px;
  }

  .detail-page.maplix .swiper-slide {
    aspect-ratio: 1709/1750;
  }

  .detail-page .detail_filter {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    object-position: top;
  }

  .detail-page .img-detail {
    font-size: 25px;
    font-weight: 500;
    text-align: left;
    margin-top: 15px;
  }

  .portfolio-learn-container {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    width: 70vw;
    max-width: 1680px;
    margin: auto;

    .portfolio-learn-title {
      font-size: 40px;
      font-weight: 600;
      margin: 32px 0 48px;
    }
  }

  .portfolio-learn-item {
    border-bottom: 1px solid #dddddd;
    padding-bottom: 16px;
  }

  .pli-question {
    height: 88px;
    align-items: center;
    font-size: 23px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .portfolio-learn-item {
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
  }

  .pli-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .pli-answer {
    background-color: #f9f9f9;
    border-radius: 4px;
    transition: height 0.3s ease; /* 높이 애니메이션 */
  }

  .pli-answer {
    font-size: 18px;
    line-height: 1.45;
  }

  .portfolio-learn-container > div {
    flex: 1;
    text-align: left;
  }

  .portfolio-other {
    padding: 100px 0;
  }

  .other-project {
    margin-inline-start: auto;
    margin-inline-end: auto;
    width: 87.5vw;
    max-width: 1680px;
    background: #fafafa;
    border-radius: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    height: 600px;
  }

  .other-project > *:first-child {
    width: calc(350px + 90px * 2); /* 첫 번째 요소의 고정 너비 설정 */
    flex-shrink: 0; /* 너비가 줄어들지 않도록 설정 */
  }
  .other-project > *:last-child {
    flex-grow: 1; /* 두 번째 요소가 남은 공간을 차지하도록 설정 */
    flex-basis: 0; /* 기본 너비를 0으로 설정하여 flex-grow에 따른 크기 변경 */
  }

  .other-img {
    height: 100%;
    align-content: center;
  }

  .other-project img {
    height: 80%;
  }

  .other-desc {
    padding: 120px 90px;

    .portfolio_btn {
      font-size: 17px;
      background: white;
      padding: 10px 40px;
      border-radius: 20px;
      box-shadow: 5px 5px 5px #80808024;
    }
  }

  .other-desc-title {
    font-size: 30px;
    font-weight: 600;
    padding: 24px 0;
  }

  .other-desc-txt {
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 1.5em;
    word-break: keep-all;
    line-height: 1.5882352941;
  }

  .portfolio-email {
    position: relative;
    margin-bottom: 100px;
  }

  .portfolio-email img {
    margin-inline-start: auto;
    margin-inline-end: auto;
    width: 87.5vw;
    max-width: 1200px;
    background: white;
    border-radius: 28px;
    display: grid;
    min-height: 500px;
    max-height: 600px;
    object-fit: cover;
  }

  .portfolio-email-txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button {
      margin-top: 40px;
      border: 1px solid rgb(255 255 255);
      padding: 8px 35px;
      border-radius: 980px;
      background-color: rgba(0, 0, 0, 0);
      font-size: 16px;
      color: white;
      text-decoration: none;
    }
  }
  .email-btn button:hover span {
    color: red;
    font-size: 22px;
  }
  .detail_btn {
    padding: 13px 23px;
    font-size: 16px;
    margin-top: 30px;
    border-radius: 8px;
    font-weight: 600;
  }

  .email-curios {
    font-size: 56px;
    word-break: keep-all;
    color: white;
  }

  .email-btn {
    margin-top: 40px;
  }

  .email-btn > div {
    font-size: 30px;
    color: white;
  }

  .email-btn::first-child {
    font-size: 30px;
    color: white;
  }

  .Footer {
    background: white;
  }
`;

export const DropIcon = styled.svg`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentcolor;
  stroke-width: 4;
  overflow: visible;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.5s ease;
`;
