import styled from 'styled-components';

export const AboutStyled = styled.div`
  background: white;

  ul {
    display: flex;
    flex-direction: column;
    padding: 10% 20%;
    gap: 36px;
  }

  .otherChat {
    display: flex;
    gap: 30px;

    img {
      width: 77px;
      height: 77px;
    }
  }

  .chat {
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
  }

  .chat.me {
    background: #0078ff;
    align-self: flex-end;

    img {
      width: 300px;
      height: 350px;
      object-fit: contain;
    }
  }
`;

export const SkillStyled = styled.div`
  background: black;

  h2 {
    font-size: 36px;
    color: #fff;
    font-weight: 700;
    text-align: center;
  }

  .skill-contents {
    display: flex;
    flex-wrap: wrap;
    padding: 5% 20% 10%;
    gap: 50px;
    justify-content: center;
  }

  .skill-title {
    font-family: Gilroy, sans-serif;
    font-size: 20px;
  }

  .skill-name {
    display: flex;
    flex-direction: column;
    margin-top: -10px;
    gap: 5px;
  }

  .skills-item {
    font-size: 20px;
    background: #171718;
    border-radius: 50%;
    color: white;
    width: 400px;
    box-sizing: border-box;
    height: 400px;
    align-content: center;
  }

  .skill-img {
    width: 180px;
  }
`;
