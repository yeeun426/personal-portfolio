import styled from 'styled-components';
import { EduStyled } from './MainEducation.styles';

// Education 섹션(EduStyled) 스타일을 그대로 쓰고, 경력 카드에 필요한 부분만 추가
export const CareerStyled = styled(EduStyled)`
  .aboutme-wrapper {
    padding-bottom: 0;
    min-height: auto;
  }

  .career .bg-color {
    border-radius: 0px 20px 20px 0px;
    display: flex;
    align-items: center;
  }

  .career-stack {
    font-size: 16px;
    color: #6e6e73;
  }

  @media (max-width: 800px) {
    .career .bg-color {
      border-radius: 0px 0px 20px 20px;
    }
  }
`;
