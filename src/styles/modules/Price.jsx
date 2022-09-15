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
export const SmPrice = styled.strong(
    {
        ...priceSize.s,
    },
    (props) => ({
        color: props.color,
        margin: props.margin,
        fontWeight: props.fontWeight,
    })
);
export const SmUnit = styled.span(
    {
        ...unitSize.s,
    },
    (props) => ({
        color: props.color,
        margin: props.margin,
    })
);

//m 사이즈
export const MdPrice = styled.strong(
    {
        ...priceSize.m,
    },
    (props) => ({
        color: props.color,
        margin: props.margin,
    })
);

export const MdUnit = styled.span(
    {
        ...unitSize.m,
    },
    (props) => ({
        color: props.color,
        margin: props.margin,
    })
);

// L 사이즈
export const LgPrice = styled.strong(
    {
        ...priceSize.l,
    },
    (props) => ({
        color: props.color,
    })
);

export const LgUnit = styled.span(
    {
        ...unitSize.l,
    },
    (props) => ({
        color: props.color,
        margin: props.margin,
    })
);
