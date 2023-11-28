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

  .home-txt {
    font-family: 'Arial';
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 8rem;
    text-align: left;
    position: absolute;
    left: 0;
    padding: 5rem;
  }

  span {
    display: block;
  }

  span:not(.light) {
    opacity: 0;
    animation: flashText 0.8s ease-out alternate infinite;
  }

  span.light {
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
