import styled from 'styled-components';

export const SearchStyled = styled.div`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);

  .search-container {
    display: flex;
    align-items: center;
    border-radius: 30%;
    background: white;

    input {
      border: 1px solid;
      min-height: 50px;
      padding: 10px;
      width: 45vw;
    }

    img {
      width: 50px;
      position: absolute;
      right: 0px;
    }
  }
`;

export const PopupStyled = styled.div`
  z-index: 999;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  //opacity: ${(props) => (props.open ? 1 : 0)};
  // z-index: ${(props) => (props.open ? 100 : -100)};
  // visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: all 0.5s;

  .container {
    display: flex;
  }

  .popup-left {
    border-radius: 10px 0 0 10px;
    background: #e9e9e9cf;
    padding: 20px;
    box-sizing: border-box;
    width: 12rem;
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
    font-size: 16px;
    line-height: 2;
  }

  .pf-title {
    font-size: 12px;
    color: #8b8c8e;
    font-weight: bold;
  }

  .popup-right {
    width: 55vw;
    border-radius: 0px 10px 10px 0;
    background: white;
    height: 60vh;

    .col {
      height: calc(100% - 50px);
      align-content: center;
    }
  }

  .popup-link {
    display: flex;
    flex-direction: column;
    gap: 9px;
    text-align-last: left;
    padding: 0 15px;
    margin-top: 10px;
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
    // padding: 25px 30px;
    display: flex;
    place-content: center;
    align-items: center;
    gap: 10%;
    text-align: right;
    height: calc(100% - 50px);

    video {
      height: 60%;
    }
  }

  .popup-content.share {
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    place-self: center;
    gap: 20px;
    text-align: center;
    font-size: 19px;
  }

  .tab-content,
  .tab-pane {
    height: 100%;
    align-content: center;
  }

  .pcl-title {
    font-size: 3em;
    line-height: 1.3;
  }

  .pc-right {
    img {
      // height: 350px;
    }
  }

  .pcl-txt {
    text-align: left;
    font-size: 19px;
  }

  .pcl-btns {
    margin-top: 30px;
    display: flex;
    align-self: center;
    gap: 35px;
  }

  .pc-left {
    display: flex;
    gap: 24px;
    flex-direction: column;
    text-align-last: left;
    font-size: 19px;
    button {
      font-size: 15px;
      padding: 15px 30px;
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

  @media (max-width: 850px) {
    .pr-top {
      display: none;
    }
  }
`;
