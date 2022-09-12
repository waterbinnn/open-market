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
        color: #767676;
        text-decoration: none;
    }

    input:focus,
    input:active {
        outline: none;
    }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;
