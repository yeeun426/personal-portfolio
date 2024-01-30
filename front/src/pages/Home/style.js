import styled from 'styled-components';

export const HomeStyled = styled.div`
  height: 100vh;
  background-image: url('images/mac.jpeg');
  background-size: cover;

  .home-folder {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }

  .home-folder-img {
    width: 200px;
  }

  .home-wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .home-folder-name {
    color: white;
    font-size: 25px;
    font-weight: bold;
    margin-top: -10px;
  }

  .home-txt,
  button {
    font-family: 'Arial';
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 8rem;
  }

  span {
    display: block;
    width: 100%;
  }

  span:not(.light) {
    opacity: 0;
    animation: flashText 0.8s ease-out alternate infinite;
  }

  .light {
    position: relative;
    display: inline-block;

    &:before {
      position: absolute;
      left: 0;
      top: 0%;
      width: 100%;
      height: 100%;
      background: #fff;
      filter: blur(70px);
      content: '';
      opacity: 0;
      animation: flash 0.8s ease-out alternate infinite;
    }
  }

  .name-wrapper {
    text-align: center; /* 가운데 정렬 */
  }

  .moved {
    text-align: left; /* 왼쪽 정렬 */
    transition: margin-left 5s ease; /* 이동에 1초간의 애니메이션 적용 */
  }

  @keyframes flash {
    to {
      opacity: 1;
    }
  }

  @keyframes flashText {
    to {
      opacity: 0.15;
    }
  }
`;
