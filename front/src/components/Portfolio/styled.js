import styled from 'styled-components';

export const PofolHeaderStyled = styled.div`
  align-content: center;
  padding: 24px 0;
  background: rgb(250, 250, 252);

  .icon-img {
    height: 45px;
    margin-bottom: 4px;
  }

  .swiper.pofol-list {
    width: 80%;
    padding: 0 calc(50vw - min(1680px, 87.5vw) / 2) 15px;
  }

  .swiper-wrapper {
    justify-content: center;
  }

  .swiper-slide {
    width: fit-content;
  }
`;
