import { Global, css } from '@emotion/react';

const style = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;

    :disabled {
      cursor: default;
    }
  }

  input:focus,
  input:active {
    outline: none;
  }

  fieldset {
    padding: 0;
  }

  .visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
