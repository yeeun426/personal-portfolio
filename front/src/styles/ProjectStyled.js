import styled from 'styled-components';

export const ProjectStyled = styled.div`
  background-color: #f5f5f7;
  
  .swiper-slide {
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    background-color: #fff;
    border-radius: 18px;
    width: 28.23529rem;
    height: 29.41176rem;
    white-space: normal;
    box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    text-align: left;
  }

  .swiper-wrapper  {
    width: 100%;
    vertical-align: top;
    display: inline-flex;
    padding-top: 10px;
    padding-bottom: 40px;s
  }

  .project-date  {
    font-size: 12px;
    line-height: 1.33337;
    color:#6e6e73;
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

  .project-txt {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px;
    width: 22rem;
  }
`;
