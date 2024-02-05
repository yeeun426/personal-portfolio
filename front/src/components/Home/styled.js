import styled from 'styled-components';

export const PopupStyled = styled.div`
  z-index: 999;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${(props) => (props.open ? 1 : 0)};
  z-index: ${(props) => (props.open ? 100 : -100)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: all 0.5s;

  .popup-left {
    border-radius: 10px 0 0 10px;
    background: #e9e9e9cf;
    padding: 20px;
    box-sizing: border-box;
    width: 9rem;
    text-align: left;
    line-height: 1.7;
  }

  .pl-btn {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;

    button {
      border-radius: 50%;
      width: 14px;
      height: 14px;
      border: 1px solid #c1c1c1;
      box-sizing: border-box;
    }

    .popup-close {
      background-color: #ff4c3d;
    }
    .popup-down {
      background-color: #febc2e;
    }
    .popup-enlarge {
      background-color: #2ac840;
    }
  }

  .popup-favorite button {
    padding: 0;
    font-size: 15px;
    line-height: 2;
  }

  .pf-title {
    font-size: 12px;
    color: #8b8c8e;
    font-weight: bold;
  }

  .popup-right {
    width: 50rem;
    // margin: auto;
    border-radius: 0px 10px 10px 0;
    background: white;
  }

  .pr-top {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: right;
    gap: 10px;
    border-bottom: 1px solid #d9d9d9;
    background: #f9f4f9;
    border-top-right-radius: 10px;
  }

  .pr-popup {
    background: white;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    display: flex;
    place-content: center;
    align-items: center;

    img {
      width: 20px;
    }
  }

  .popup-content {
    padding: 25px 30px;
    display: flex;
    place-content: center;
    align-items: center;
    gap: 10%;
    text-align: right;
  }

  .pcl-title {
    font-size: 60px;
  }

  .pcl-title-name {
    font-weight: bold;
  }

  .pc-right {
    img {
      height: 350px;
    }
  }

  .pcl-txt {
    text-align: left;
  }

  .pcl-btns {
    display: flex;
    align-self: center;
    gap: 35px;
  }

  .pc-left {
    display: flex;
    gap: 20px;
    flex-direction: column;

    button {
      font-size: 15px;
      padding: 10px;
      border-radius: 15px;
      box-shadow: 2px 2px 4px #00000029;
    }

    .pcl-btn-contact {
      border: 3px solid #d483d0;
      color: #d483d0;
    }

    .pcl-btn-learn {
      background: #d483d0;
      color: white;
    }
  }
`;
