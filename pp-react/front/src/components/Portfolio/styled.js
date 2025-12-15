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
    width: 60%;
    font-family: sans-serif;
  }
  .project-name {
    font-size: 13px;
  }

  .pofol-list .swiper-button-next,
  .pofol-list .swiper-button-prev {
    display: flex;
    scale: 0.5;
    color: #6a6a6a;
  }

  .pofol-list .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, -5px);
  }

  .pofol-list .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, -5px);
  }

  .swiper-button-next.swiper-button-disabled,
  .swiper-button-prev.swiper-button-disabled {
    display: none;
  }
`;
