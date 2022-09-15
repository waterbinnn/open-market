/** @jsxImportSource @emotion/react */
import { colors } from '../constants/colors';
import styled from '@emotion/styled';

const sizeStyles = {
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

const buttonStyles = {
    border: 'none',
    borderRadius: '5px',
    background: colors.disabled,
    color: colors.white,
    textAlign: 'center',
    cursor: 'pointer',
};

export const SmButton = styled.button(
    {
        ...buttonStyles,
        ...sizeStyles.sm,
    },
    (props) => ({
        width: props.width,
        margin: props.margin,
        background: props.background,
    })
);
export const MsButton = styled.button(
    {
        ...buttonStyles,
        ...sizeStyles.ms,
    },
    (props) => ({
        width: props.width,
        margin: props.margin,
        background: props.background,
    })
);

export const MdButton = styled.button(
    {
        ...buttonStyles,
        ...sizeStyles.md,
        display: 'block',
        margin: '0 auto',
    },
    (props) => ({
        width: props.width,
        margin: props.margin,
        background: props.background,
    })
);
export const LgButton = styled.button(
    {
        ...buttonStyles,
        ...sizeStyles.lg,
        display: 'block',
        margin: '0 auto',
    },
    (props) => ({
        width: props.width,
        margin: props.margin,
        background: props.background,
    })
);
