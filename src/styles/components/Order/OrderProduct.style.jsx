import styled from '@emotion/styled';
import { colors } from '../../constants/colors';
import { WrapperPrice } from '../Cart/CartProduct.style';

export const Tr = styled.tr`
    display: block;
    width: 90%;
    margin: 0 auto 17px;
    border-bottom: 1px solid ${colors.border};
    td {
        width: 100%;
        height: 130px;
        position: relative;
        display: flex;
        align-items: center;
        padding: 20px 20px;
        margin: 0 auto;
        text-align: center;
    }
`;

export const ProductImg = styled.img`
    display: block;
    width: 104px;
    height: 104px;
    border-radius: 10px;
    margin: 10px 36px 0 0;
    object-fit: cover;
`;

export const WrapperInfoLink = styled.a`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 402px;
    padding: 20px;

    span {
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: ${colors.dark};
        margin-bottom: 10px;

        &:nth-of-type(4) {
            margin-top: 40px;
        }
    }
`;

export const ProductName = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 10px;
    line-height: 1.3;
`;

export const WrapperInfo = styled.div`
    display: flex;
`;

export const Discount = styled.strong`
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: ${colors.dark};
`;

export const WrapperDiscount = styled.div`
    width: 150px;
    margin-right: 35px;
`;
export const WrapperDeliver = styled.div`
    width: 150px;
    margin-right: 48px;
`;
export const WrapperTotal = styled.div`
    width: 114px;
`;
