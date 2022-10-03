/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';
import theme from '../constants/theme';

export const SectionItem = styled.section`
    margin: 80px auto;
    ${theme.mq.mobile} {
        margin: 50px auto;
    }
`;
export const Ul = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 350px);
    width: 90%;
    margin: 0 auto;
    gap: 35px;
    ${theme.mq.tablet} {
        gap: 30px;
        grid-template-columns: repeat(2, 250px);
    }
    ${theme.mq.mobile} {
        grid-template-columns: repeat(1, 250px);
    }
`;

export const Li = styled.li`
    cursor: pointer;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    justify-content: center;
`;

export const Image = styled.img`
    display: block;
    object-fit: cover;
    margin-bottom: 16px;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    border: 1px solid ${colors.border};
    ${theme.mq.tablet} {
        margin-bottom: 6px;
        width: 250px;
        height: 250px;
    }
`;
export const Span = styled.span`
    display: block;
    margin-bottom: 10px;
    color: ${colors.dark};
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    ${theme.mq.tablet} {
        margin-bottom: 5px;
        font-size: 13px;
    }
`;
export const P = styled.p`
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    ${theme.mq.tablet} {
        margin-bottom: 3px;
        font-size: 15px;
    }
`;
