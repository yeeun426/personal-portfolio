import styled from 'styled-components';

export const HeaderStyled = styled.div`
  position: fixed;
  left: 0px;
  z-index: 100;
  width: 100%;
  background: #ffffff78;
  top: 0px;

  grid-template: auto / repeat(3, 1fr);
  display: grid;
  grid-column: 1 / auto;
  gap: 10px;
  align-items: center;

  .header-left {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    justify-self: center;

    img {
      width: 30px;
      border: 1px solid #c1bfbf;
      padding: 6px;
      border-radius: 50px;
    }
  }

  .header-logo {
    width: 95px;
    justify-self: center;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  button {
    font-size: 16px;
  }
`;

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

export const FeedbackStyle = styled.div`
  position: fixed;
  right: 3.25rem;
  bottom: 3.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  z-index: 100;

  .feedback-item {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 6px #bcbcbcd1;
    padding: 5px;
    box-sizing: border-box;

    button {
      width: 100%;
      height: 100%;
    }
  }

  .feedback-item svg {
    width: 27px;
    height: 27px;
  }

  .react-tooltip {
    pointer-events: none;
  }
`;
