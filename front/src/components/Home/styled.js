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
      width: 100%;
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
    --swiper-theme-color: #007aff;
    --swiper-navigation-size: 44px;
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-black: #000;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-primary-text-emphasis: #052c65;
    --bs-secondary-text-emphasis: #2b2f32;
    --bs-success-text-emphasis: #0a3622;
    --bs-info-text-emphasis: #055160;
    --bs-warning-text-emphasis: #664d03;
    --bs-danger-text-emphasis: #58151c;
    --bs-light-text-emphasis: #495057;
    --bs-dark-text-emphasis: #495057;
    --bs-primary-bg-subtle: #cfe2ff;
    --bs-secondary-bg-subtle: #e2e3e5;
    --bs-success-bg-subtle: #d1e7dd;
    --bs-info-bg-subtle: #cff4fc;
    --bs-warning-bg-subtle: #fff3cd;
    --bs-danger-bg-subtle: #f8d7da;
    --bs-light-bg-subtle: #fcfcfd;
    --bs-dark-bg-subtle: #ced4da;
    --bs-primary-border-subtle: #9ec5fe;
    --bs-secondary-border-subtle: #c4c8cb;
    --bs-success-border-subtle: #a3cfbb;
    --bs-info-border-subtle: #9eeaf9;
    --bs-warning-border-subtle: #ffe69c;
    --bs-danger-border-subtle: #f1aeb5;
    --bs-light-border-subtle: #e9ecef;
    --bs-dark-border-subtle: #adb5bd;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto,
      'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
      'Liberation Mono', 'Courier New', monospace;
    --bs-gradient: linear-gradient(180deg, #ffffff26, #fff0);
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg: #fff;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-emphasis-color: #000;
    --bs-emphasis-color-rgb: 0, 0, 0;
    --bs-secondary-color: #212529bf;
    --bs-secondary-color-rgb: 33, 37, 41;
    --bs-secondary-bg: #e9ecef;
    --bs-secondary-bg-rgb: 233, 236, 239;
    --bs-tertiary-color: #21252980;
    --bs-tertiary-color-rgb: 33, 37, 41;
    --bs-tertiary-bg: #f8f9fa;
    --bs-tertiary-bg-rgb: 248, 249, 250;
    --bs-heading-color: inherit;
    --bs-link-color: #0d6efd;
    --bs-link-color-rgb: 13, 110, 253;
    --bs-link-decoration: underline;
    --bs-link-hover-color: #0a58ca;
    --bs-link-hover-color-rgb: 10, 88, 202;
    --bs-code-color: #d63384;
    --bs-highlight-color: #212529;
    --bs-highlight-bg: #fff3cd;
    --bs-border-width: 1px;
    --bs-border-style: solid;
    --bs-border-color: #dee2e6;
    --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.5rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-xxl: 2rem;
    --bs-border-radius-2xl: var(--bs-border-radius-xxl);
    --bs-border-radius-pill: 50rem;
    --bs-box-shadow: 0 0.5rem 1rem #00000026;
    --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-focus-ring-width: 0.25rem;
    --bs-focus-ring-opacity: 0.25;
    --bs-focus-ring-color: #0d6efd40;
    --bs-form-valid-color: #198754;
    --bs-form-valid-border-color: #198754;
    --bs-form-invalid-color: #dc3545;
    --bs-form-invalid-border-color: #dc3545;
    --bs-breakpoint-xs: 0;
    --bs-breakpoint-sm: 576px;
    --bs-breakpoint-md: 768px;
    --bs-breakpoint-lg: 992px;
    --bs-breakpoint-xl: 1200px;
    --bs-breakpoint-xxl: 1400px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    color: var(--bs-body-color);
    font-weight: var(--bs-body-font-weight);
    font-family: Pretendard-Regular;
    line-height: 1.4;
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: initial;
    place-content: center;
    height: calc(100% - 50px);
    display: flex;
    width: 70%;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
    place-self: center;
    gap: 20px;
    text-align: center;
    font-size: 19px;
    flex-wrap: nowrap;
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

  .pc-right {
    max-width: 20rem;
    max-height: 100%;
  }

  @media (max-width: 1300px) {
    .pcl-title {
      font-size: 2em;
    }
    .popup-content {
      gap: 0px;
    }
  }
  @media (max-width: 850px) {
    .pr-top {
      display: none;
    }
    .pc-right {
      max-width: 10rem;
    }
  }
`;
