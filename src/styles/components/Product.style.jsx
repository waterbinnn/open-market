/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';

export const Li = styled.li`
    width: 380px;
    cursor: pointer;
`;

export const Image = styled.img`
    display: block;
    object-fit: cover;
    margin-bottom: 16px;
    width: 380px;
    height: 380px;
    border-radius: 10px;
    border: 1px solid ${colors.border};
`;
export const Span = styled.span`
    display: block;
    margin-bottom: 10px;
    color: ${colors.dark};
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
`;
export const P = styled.p`
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

export const Price = styled.strong`
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
`;

export const PriceSpan = styled.span`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin: 2px 0 0 2px;
`;

export const SectionItem = styled.section`
    width: 80%;
    height: auto;
    margin: 80px auto;
`;
export const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 35px;
`;
