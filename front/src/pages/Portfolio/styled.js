import styled from 'styled-components';

export const PortfolioStyled = styled.div`
  .portfolio {
    overflow: hidden;
    font-weight: 600;
    text-align: center;
    white-space: pre-wrap;
  }

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
    line-height: 1.3;
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
    height: 80vh;
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
    padding-top: 150px;
    padding-bottom: 150px;
    padding-inline-bottom: 50px;
  }

  .portfolio-sub-title {
    width: 87.5vw;
    max-width: 1680px;
    margin: auto;
    padding-bottom: 70px;
    font-size: 56px;
    font-weight: 600;
    text-align: left;
    line-height: 1.27;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .small_img img {
    object-fit: contain;
    vertical-align: bottom;
    width: 100%;
    border-radius: 4px;
    margin-right: 18px;
  }

  .small_img .swiper-slide {
    min-width: 260px;
    max-width: 420px;
    aspect-ratio: 0.54;
  }

  .portfolio .swiper-slide {
    background: green;
    border-radius: 28px;
  }

  .swiper {
    padding: 0 calc(50vw - min(1680px, 87.5vw) / 2) 70px;
  }

  .swiper-button-next,
  .swiper-button-prev {
    bottom: 0px;
    top: auto;
    scale: 0.8;
    color: deeppink;
  }

  .swiper-button-prev {
    right: 150px;
    left: auto;
  }

  .swiper-button-next {
    right: 90px;
  }

  .portfolio-detail,
  .portfolio-other {
    background: #fafafa;
    padding-top: 150px;
  }

  .portfolio-sub-title button {
    color: rgb(0, 102, 204);
    font-size: 17px;
    font-weight: 400;
  }

  .detail-page .swiper-slide {
    aspect-ratio: 372/280;
    background: white;
    border-radius: 28px;
    padding: 32px;
    box-sizing: border-box;
  }

  .detail-page .img-detail {
    font-size: 25px;
    font-weight: 500;
    text-align: left;
    line-height: 1.15;
    margin-top: 15px;
  }

  .portfolio-other {
    padding-bottom: 100px;
  }

  .other-project {
    margin-inline-start: auto;
    margin-inline-end: auto;
    width: 87.5vw;
    max-width: 1680px;
    background: white;
    border-radius: 28px;

    display: grid;
    grid-template-columns: calc(350px + 120px * 2) 1fr;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    min-height: 784px;
  }

  .other-project img {
    width: 100%;
  }

  .portfolio-email {
    position: relative;
    margin-bottom: 150px;
  }

  .portfolio-email img {
    margin-inline-start: auto;
    margin-inline-end: auto;
    width: 87.5vw;
    max-width: 1680px;
    background: white;
    border-radius: 28px;
    display: grid;
    min-height: 784px;
    max-height: 800px;
    object-fit: cover;
  }

  .portfolio-email-txt {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button {
      margin-top: 40px;

      border: 1px solid rgb(29, 29, 31);
      padding: 8px 15px;
      border-radius: 980px;
      background-color: rgba(0, 0, 0, 0);
      font-size: 14px;
    }
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
    color: white;
  }

  .email-btn {
    margin-top: 40px;
  }

  .email-btn::first-child {
    font-size: 30px;
    color: white;
  }
`;
