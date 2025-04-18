import styled from 'styled-components';

export const ProjectStyled = styled.div`
  background-color: #f5f5f7;
  box-sizing: border-box;
  --swiper-theme-color: #d483d0;
  width: 70%;
  margin: auto;
  padding: 8rem 0;
  max-width: 1200px;

  .project {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 12px;
  }

  .project-content {
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    // height: 32rem;
    white-space: normal;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
    align-items: center;
    justify-content: space-between;
    opacity: 0;
    aspect-ratio: 657 / 512;
    width: 100%;

    img {
      height: 70%;
      align-self: center;
      width: 90%;
      object-fit: contain;
    }
  }

  // .swiper-wrapper {
  //   width: 100%;
  //   vertical-align: top;
  //   display: inline-flex;
  //   padding-top: 10px;
  //   padding-bottom: 40px;
  // }

  .project-txt {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-top: 30px;
    height: fit-content;
    width: 100%;
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
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
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
    width: var(
      --swiper-pagination-bullet-width,
      var(--swiper-pagination-bullet-size, 15px)
    );
    height: var(
      --swiper-pagination-bullet-height,
      var(--swiper-pagination-bullet-size, 15px)
    );
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
    opacity: 0;
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
    transition: 0.5s all;
  }

  .project-content:hover .portfolio_btn {
    opacity: 1;
  }

  .team-category {
    background: white;
    width: fit-content;
    padding: 0.75rem;
    display: flex;
    gap: 0.5rem;
    border-radius: 999px;
    margin-bottom: 1rem;

    button {
      padding: 0.5rem 1.25rem;
      font-size: 17px;
      border-radius: 999px;
    }

    button.active {
      background: #b8b8b9;
      color: white;
      font-weight: bold;
    }
  }

  @media (max-width: 800px) {
    .project {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  @media (max-width: 550px) {
    .project-name {
      font-size: 22px;
    }
    .project-txt {
      padding-top: 20px;
      gap: 5px;
    }

    .project-detail {
      font-size: 15px;
    }
  }
`;
