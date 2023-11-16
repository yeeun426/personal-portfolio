import styled from 'styled-components';

export const HomeStyled = styled.div`
  height: 100vh;
  background-image: url('https://images.hdqwalls.com/wallpapers/macos-monterey-2g.jpg');
  background-size: cover;

  .home-folder {
    display: flex;
    flex-direction: column;
    align-items: center;
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
`;
