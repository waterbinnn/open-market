/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';
import theme from '../constants/theme';

export const FooterContainer = styled.footer`
    height: auto;
    background: #f2f2f2;
    padding: 60px 10%;
`;

export const IntroDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 30px;
    border-bottom: 1px solid #c4c4c4;
`;

export const Ul = styled.ul`
    display: flex;
`;

export const Li = styled.li`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    &:after {
        content: '|';
        width: 2px;
        height: 12px;
        margin: 0 14px;
    }
    &:last-child {
        &:after {
            content: '';
        }
    }
`;

export const IconImg = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 14px;
    cursor: pointer;
`;

export const SideDiv = styled.div`
    padding-top: 30px;
    color: ${colors.dark};
    font-size: 14px;
    line-height: 24px;
`;

export const Strong = styled.strong`
    font-weight: 700;
`;

export const DescriptSpan = styled.span`
    font-weight: 400;
`;
