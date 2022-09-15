import styled from '@emotion/styled';
import { colors } from '../constants/colors';

export const Tfoot = styled.tfoot`
    display: block;
    margin: 80px auto 0;
    width: 1084px;
    border-radius: 10px;
    background: #f2f2f2;
`;

export const Tr = styled.tr`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 46px 112px;
`;

export const Title = styled.strong`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 12px;
`;

export const Td = styled.td`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.img`
    display: block;
    padding: 8px;
    width: 34px;
    height: 34px;
    border-radius: 9999px;
    background: ${colors.white};
`;
