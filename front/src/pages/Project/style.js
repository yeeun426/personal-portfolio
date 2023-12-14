import styled from 'styled-components';

export const ProjectStyled = styled.div`
  padding: 8rem 1rem;
  background-color: #f5f5f7;
  box-sizing: border-box;

  .test {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 12px;
    overflow: auto;
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
      height: 78%
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
`;
