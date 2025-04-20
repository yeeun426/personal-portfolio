import styled from 'styled-components';

export const TypeItStyled = styled.div`
  height: 100vh;
  background-image: url('images/intro/macos.webp');
  background-size: cover;
  position: relative;

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
    line-height: 1.3;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: max-content;
  }

  .type-it.color-change {
    color: #ffffff5e;
  }

  .my-name {
    font-family: 'Arial';
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
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

  @keyframes flash {
    to {
      opacity: 1;
    }
  }

  .type-it-container {
    transition: opacity 1.5s ease-out;
  }

  .type-it-container.disappear {
    opacity: 0 !important;
  }

  .next-btn {
    position: absolute;
    bottom: 10%;
    z-index: 10;
    transform: translateX(-50%);

    svg {
      z-index: 100;
      width: 45px;
      color: white;
    }
  }

  // 폴더
  .home-folder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -150%);
    animation: dropBounce 3s ease-out forwards;
    animation-delay: 2s;
    opacity: 0;
    z-index: 1;
  }

  .open-folder {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 17em;
  }

  .home-folder-none,
  .home-click.disappear {
    display: none;
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
      opacity: 1;
    }
  }

  .folder-item {
    display: flex;
    color: white;
    align-items: center;
    font-size: 2em;
  }

  .folder-img {
    width: 6em;
  }

  .folder-img-name {
    font-size: 1rem;
    padding: 5px 28px;
    border-radius: 5px;
    border: 1px solid #523c73;
    font-family: monospace;
    background: #381c62;
    box-shadow: black 1px 1px 1px;
  }

  // test
  .folders {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    transition: transform 0.5s ease-in-out;
    height: 100%;
    width: 100%;
  }

  .folders.closed .folder-item {
    opacity: 0;
    z-index: -1;
  }

  .folder-item {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    transition:
      transform 1s ease-in-out,
      opacity 1s ease-in-out;
    opacity: 1;
  }

  .folders.open .folder-item:nth-child(1) {
    transform: translateX(-150%) translateY(-200%);
  }

  .folders.open .folder-item:nth-child(2) {
    transform: translateX(-165%) translateY(-100%);
  }

  .folders.open .folder-item:nth-child(3) {
    transform: translateX(-170%) translateY(0);
  }

  .folders.open .folder-item:nth-child(4) {
    transform: translateX(-150%) translateY(100%);
  }

  @media (min-width: 1080px) {
    .display-1 {
      font-size: 7rem;
    }
  }

  @media (max-width: 1080px) {
    // 폴더
    .home-folder.open {
      display: none;
    }

    .folders.open {
      justify-content: center;
      padding-left: 50px;
    }

    .folders.open .folder-item {
      transform: none !important;
      position: static;
      min-width: 400px;
      height: 15%;
    }

    .folder-item .folder-img {
      max-height: 80%;
      width: auto;
      object-fit: contain;
    }
  }

  @media (max-width: 1080px) {
    .home-folder-name {
      font-size: 20px;
    }
  }
`;
