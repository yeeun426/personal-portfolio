import styled from 'styled-components';

export const FooterStyled = styled.div`

  background: #f5f5f7;
  padding: 4em 0;

  .footer-my {
    display: flex;
    justify-content: center;
    gap: 80px;
  }

  .my-info {
    display: flex;
    align-items: center;
    gap: 15px;
    width: 210px;
    text-align: left;
  }
  .my-info > div {
    font-size: 16px;
  }

  .my-info img {
    padding: 10px;
    box-sizing: border-box;
    width: 60px;
    background: #45444414;
    border-radius: 100%;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 9em;
    margin: 4em;
  }

  @media (max-width: 800px) {
    padding: 2rem;

    .footer-my {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
