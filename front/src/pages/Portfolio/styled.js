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
`;
