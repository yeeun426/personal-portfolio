import styled from 'styled-components';

export const TestStyled = styled.div`
  background: black;

  .hi {
    height: 100vh;
  }

  .rellax {
    color: white;
  }
`;

export const TypeItStyled = styled.div`
  height: 100vh;

  .home-click {
    z-index: 1;
    width: 26px;
    height: fit-content;
    position: absolute;
    bottom: 50%;
    right: 30%;
    transform: translate(-50%, 0%);
  }

  .type-it {
    font-family: 'Arial';
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 8rem;
    line-height: 1.3;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
  }

  .my-name strong {
    font-family: 'Arial';
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 8rem;
    line-height: 1.3;
    position: relative;
    font-style: italic;

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

  .my-name strong:hover {
    color: red;
  }

  @keyframes flash {
    to {
      opacity: 1;
    }
  }

  .type-it-container {
    transition:
      transform 2s ease-out,
      opacity 1s;
  }

  .type-it-container.disappear {
    transform: translate(-100%, -50%);
    opacity: 0 !important;
  }

  // 폴더
  .home-folder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%);
    animation: dropBounce 3s ease-out forwards;
    opacity: 1;
  }

  .home-folder-none,
  .home-click.disappear {
    display: none;
  }

  .home-folder-img {
    width: 17em;
  }

  .home-folder-name {
    font-size: 2em;
    margin-top: -15px;
    color: white;
    align-self: center;
  }

  @keyframes dropBounce {
    0% {
      opacity: 0;
      transform: translate(-50%, -150%);
    }
    40% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
    60% {
      opacity: 1;
      transform: translate(-50%, -90%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
`;
