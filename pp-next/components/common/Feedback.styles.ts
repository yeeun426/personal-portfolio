import styled from 'styled-components';

export const FeedbackStyle = styled.div`

  position: fixed;
  right: 3.25rem;
  bottom: 3.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
  z-index: 100;

  .feedback-item {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    box-shadow: 2px 2px 6px #bcbcbcd1;
    padding: 5px;
    box-sizing: border-box;
    background: white;

    button,
    a {
      width: 100%;
      height: 100%;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .feedback-item svg {
    width: 27px;
    height: 27px;
  }

  .react-tooltip {
    pointer-events: none;
  }
`;
