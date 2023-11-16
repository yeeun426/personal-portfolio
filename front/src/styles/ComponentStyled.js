import styled from 'styled-components';

export const HeaderStyled = styled.div`
  position: fixed;
  left: 0px;
  z-index: 100;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f3f3f3;
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
    gap: 50px;
  }

  button {
    font-size: 16px;
  }
`;
