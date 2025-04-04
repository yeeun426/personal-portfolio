import styled from 'styled-components';

export const TypeItStyled = styled.div`
  background: black;
  .hi {
    height: 100vh;
  }
  .rellax {
    color: white;
  }
`;

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
    margin-top: -20px;
  }

  .home-txt,
  .name-wrapper button {
    font-family: 'Arial';
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 8rem;
    line-height: 1.3;
  }

  .home-txt.opacity {
    display: block;
    width: 100%;
    opacity: 0;
    animation: flashText 0.8s ease-out alternate infinite;
  }

  @media (max-width: 1160px) {
    .home-txt.opacity {
      display: none;
    }
  }
  .home-txt.disappear {
    animation: fadeOut 4s ease;
  }

  .home-click {
    z-index: 1;
    width: 26px;
    height: fit-content;
    position: absolute;
    right: -30px;
    bottom: 0;
    transform: translate(-70%);
  }

  .home-click.disappear {
    display: none;
  }

  .name-wrapper {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .light {
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translate(-50%);
    transition: left 5s ease;

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

  .light.moved {
    left: -30%;
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

  @keyframes fadeOut {
    0% {
      opacity: 0.15;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .home-folder-none {
    z-index: -1;
    opacity: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }

  .home-folder {
    animation: fadeIn 3s ease;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`;
