import styled from 'styled-components';

export const ProjectStyled = styled.div`
  padding: 8rem 1rem;
  background-color: #f5f5f7;
  box-sizing: border-box;
  --swiper-theme-color: #d483d0;

  .project {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 12px;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    width: calc(50% - 12px);
    height: 35rem;
    white-space: normal;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
    align-items: center;

    img {
      height: 75%;
      align-self: center;
      width: 92%;
      object-fit: contain;
    }
  }

  .swiper-wrapper {
    width: 100%;
    vertical-align: top;
    display: inline-flex;
    padding-top: 10px;
    padding-bottom: 40px;
  }


  .project-txt {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 30px;
    height: fit-content;
    heigh
  }
  
  .project-date {
    font-size: 12px;
    line-height: 1.33337;
    color: #6e6e73;
  }

  .project-name {
    font-size: 28px;
    line-height: 1.14286;
    font-weight: 600;
  }

  .project-detail {
    font-size: 17px;
    line-height: 1.23536;
    font-weight: 400;
  }

  .project-sub {
    display: flex;
    flex-direction: column;
    padding: 5% 10%;
    text-align: left;
    gap: 15px;
  }

  .project-sub-title {
    padding: 4px 10px;
    background-color: #e6e6e6;
    width: fit-content;
    margin-bottom: 5px;
  }

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    transform: translateZ(0);
    backface-visibility: hidden;
    display: flex;
    flex-direction: column;
  }

  .swiper-wrapper {
    height: 100%;
  }

  .swiper-pagination-bullet {
    width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 15px));
    height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 15px));
  }

  .swiper-pagination-bullet-active {
    color: white;
  }

  .project-img {
    justify-content: center;
    img {
      height: 70% !important;
    }
  }

  .portfolio_btn {
    position: absolute;
    z-index: 1;
    opacity:0;
    width: max-content;
    padding: 15px;
    border-radius: 30px;
    box-shadow: 3px 3px 7px #0000005c;
    background: #1d1d1f;
    left: 50%;
    top: 50%;
    color: #fff;
    font-size: 17px;
    font-weight: 400;
    transform: translate(-50%, -50%);
    transition:0.5s all;
  }
  .project-content:hover .portfolio_btn {
    opacity:1
  }

  .swiper-button-next{
    background-image: url("images/arrownext.JPG");
    background-color: white;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 0.5px solid rgb(0 0 0 / 0.3);
    color: #fff0;
  }
  
  .swiper-button-prev{
    background-image: url("images/arrowprev.JPG");
    background-color: white;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 0.5px solid rgb(0 0 0 / 0.3);
    color: #fff0;
  }
`;
