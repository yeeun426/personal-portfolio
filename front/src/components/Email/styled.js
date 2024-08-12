import styled from 'styled-components';

export const EmailStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: white;
    border-radius: 10px;
    padding: 30px;
    color: black;
    font-size: 16px;
    height: 65%;
    width: 35rem;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .email-items-contents {
    height: 70%;

    textarea {
      width: 80%;
      border: none;
      border-bottom: 1.5px solid #e5e5e5;
      height: 100%;
    }
  }

  .email-items,
  .email-items-contents {
    display: flex;
    gap: 10px;
    align-items: center;

    label {
      width: 60px;
    }

    input {
      width: 80%;
      height: 100%;
      border: none;
      border: none;
      border-bottom: 1.5px solid #e5e5e5;
    }
  }

  .email-items-btn {
    display: flex;
    gap: 10px;
    justify-content: center;
    padding-top: 10px;

    input {
      width: 45%;
      border: none;
      font-size: 15px;
      padding: 7px 0;
      border-radius: 5px;
    }

    button {
      width: 45%;
      border: 1.5px solid #e5e5e5;
      font-size: 15px;
      padding: 7px 0;
      border-radius: 5px;
    }
  }
`;
