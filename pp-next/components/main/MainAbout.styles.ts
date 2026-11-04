import styled from 'styled-components';

export const AboutStyled = styled.div`

  background: white;

  ul {
    display: flex;
    flex-direction: column;
    padding: 5% 20%;
    gap: 20px;
  }

  .otherChat {
    display: flex;
    gap: 30px;

    div {
      max-width: 550px;
      border-radius: 40px;
      background: #353535;
      word-break: normal;
      white-space: pre-line;
      font-size: 18px;
      color: #ced4da;
      padding: 24px 32px;
      line-height: 1.5;
      text-align: left;
      word-break: keep-all;
    }

    img {
      width: 77px;
      height: 77px;
    }
  }

  .chat {
    max-width: 600px;
    border-radius: 40px;
    word-break: normal;
    white-space: pre-line;
    font-size: 18px;
    color: #ced4da;
    padding: 24px 32px;
    line-height: 1.5;
    text-align: left;
  }

  .chat.me {
    background: #0078ff;
    align-self: flex-end;
  }

  img.chat.me {
    width: 250px;
    height: fit-content;
    object-fit: contain;
  }

  /* 태블릿용 (1023px 이하일 때) */
  @media (max-width: 1023px) {
    ul {
      padding: 5% 10%;
    }

    .otherChat {
      padding: 0;
    }
  }
`;
