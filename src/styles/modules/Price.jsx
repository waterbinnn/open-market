import { colors } from '../constants/colors';
import styled from '@emotion/styled';
import theme from '../constants/theme';

const priceSize = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: '700',
    s: {
        fontSize: '18px',
        lineHeight: '23px',
    },
    m: {
        fontSize: '24px',
        lineHeight: '30px',
    },
    l: {
        fontSize: '36px',
        lineHeight: '45px',
    },
};
const unitSize = {
    fontWeight: '400',
    margin: '2px 0 0 2px',

    s: {
        fontSize: '14px',
        lineHeight: '18px',
    },
    m: {
        fontSize: '16px',
        lineHeight: '20px',
    },
    l: {
        fontSize: '18px',
        lineHeight: '23px',
    },
};

//s 사이즈
export const S_Price = styled.strong({
    ...priceSize.s,
});
export const S_Unit = styled.span({
    ...unitSize.s,
});

//m 사이즈
export const M_Price = styled.strong({
    ...priceSize.m,
});
export const M_Unit = styled.span({
    ...unitSize.m,
});

// L 사이즈
export const L_Price = styled.strong(
    {
        ...priceSize.l,
    },
    (props) => ({
        color: props.color,
    })
);

export const L_Unit = styled.span(
    {
        ...unitSize.l,
    },
    (props) => ({
        color: props.color,
        margin: props.margin,
    })
);
