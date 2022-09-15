/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';

export const DropDownSection = styled.section`
    position: absolute;
    top: 76px;
    left: -40px;
    width: 140px;
    padding: 10px 0;
    background: ${colors.white};
    border-radius: 10px;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
`;

export const MobileDropDown = styled.section`
    width: 140px;
    padding: 10px 0;
    background: ${colors.white};
    border-radius: 10px;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
`;

export const Ul = styled.ul`
    margin: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
export const Li = styled.li`
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.dark};

    button {
        width: 100%;
        padding: 10px 18px;
    }
    &:hover {
        outline: 1px solid ${colors.green};
        border-radius: 10px;
    }

    &:before {
        content: '';
        position: absolute;
        top: -30px;
        left: 35%;
        width: 30px;
        height: 30px;
        transform: rotate(45deg);
        background: ${colors.white};
        z-index: -1;
    }
`;

export const Nums = styled.ol`
    ${'' /* display: none; */}
    position: absolute;
    top: 56px;
    left: 0;
    margin-top: 10px;
    border: 1px solid ${colors.border};
    border-radius: 5px;
    background: white;
    overflow: scroll;
    z-index: 100;
    width: 144px;
    height: 150px;
    padding: 5px;
    button {
        padding: 18px 52px 8px 14px;
        width: 134px;
        font-weight: 500;
        margin: 0 auto;
        &:hover {
            color: ${colors.green};
        }
    }
`;
