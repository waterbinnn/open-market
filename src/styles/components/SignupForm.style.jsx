/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';
import { TabLinkStyles } from './FormStyles.style';

export const CustomerLink = styled.a({
    ...TabLinkStyles,
    left: '27.5px',
    padding: '17px 0 12px',
    background: `${colors.white}`,
    zIndex: '100',
});

export const SellerLink = styled.a({
    ...TabLinkStyles,
    right: '28px',
    padding: '14px 0 40px',
});
