/** @jsxImportSource @emotion/react */
import { colors } from '../constants/colors';
import styled from '@emotion/styled';

export const sizeStyles = {
    sm: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '10px 0',
    },

    ms: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '20px',
        padding: '17px 0',
    },
    md: {
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '22px',
        padding: '19px 0',
    },
    lg: {
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '30px',
        padding: '19px 0',
    },
};

export const MDButton = styled.button(
    {
        display: 'block',
        margin: '0 auto',
        border: 'none',
        borderRadius: '5px',
        background: colors.disabled,
        color: colors.white,
        ...sizeStyles.md,
        textAlign: 'center',
        cursor: 'pointer',
    },
    (props) => ({
        width: props.width,
        margin: props.margin,
        background: props.background,
    })
);

export const MSButton = styled.button(
    {
        border: 'none',
        borderRadius: '5px',
        background: colors.disabled,
        color: colors.white,
        ...sizeStyles.ms,
        textAlign: 'center',
        cursor: 'pointer',
    },
    (props) => ({
        width: props.width,
        margin: props.margin,
        background: props.background,
    })
);
