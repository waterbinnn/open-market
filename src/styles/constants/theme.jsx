import '@emotion/react';

export const size = {
    largest: '75em', //1200px
    large: '880px',
    small: '550px',
};

const theme = {
    mq: {
        laptop: `@media only screen and (max-width: ${size.largest})`,
        tablet: `@media only screen and (max-width: ${size.large})`,
        mobile: `@media only screen and (max-width: ${size.small})`,
    },
};

export default theme;
