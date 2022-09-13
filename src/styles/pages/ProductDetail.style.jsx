/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';
import theme from '../constants/theme';

export const Container = styled.div`
    padding: 170px 10%;
`;
export const SectionProduct = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
export const ImageBox = styled.div`
    background-image: url('https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1b70128-aa8f-488e-a5d5-08dd7f26dccd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220913T090813Z&X-Amz-Expires=86400&X-Amz-Signature=b2c04b8759de04ef5d6eac1c362694c8fb6ec8c560a8adefa79e7b7caed908de&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: block;
    border-radius: 5px;
    width: 600px;
    min-width: 350px;
    height: 600px;
    margin-bottom: 50px;
    object-fit: cover;
    flex-shrink: 0;
    ${theme.mq.mobile} {
        width: 350px;
        height: 350px;
    }
`;

export const WrapperInfo = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    ${theme.mq.tablet} {
        width: 90%;
        margin-left: 0;
    }
    ${theme.mq.mobile} {
        width: 98%;
        margin-left: 0;
        margin-bottom: 50px;
    }
`;

export const Span = styled.span`
    display: block;
    margin-bottom: 16px;
    color: ${colors.dark};
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    ${theme.mq.mobile} {
        font-size: 13px;
        line-height: 16px;
    }
`;
export const ProductName = styled.strong`
    display: block;
    margin-bottom: 20px;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    ${theme.mq.mobile} {
        font-size: 20px;
        line-height: 24px;
    }
`;

export const DeliveryText = styled.span`
    display: block;
    margin-bottom: 20px;
    color: ${colors.dark};
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;

export const WrapperOrder = styled.div`
    margin-top: 118px;
`;

export const WrapperAmount = styled.div`
    padding: 30px 0;
    margin-bottom: 46px;
    border: 1px solid ${colors.border};
    border-right: none;
    border-left: none;
`;

export const WrapperTotalCount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    ${theme.mq.mobile} {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Count = styled.strong`
    color: ${colors.green};
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
`;

export const Slide = styled.span`
    margin: 0 11px;
    color: ${colors.border};
`;

export const WrapperButton = styled.div`
    display: flex;
    gap: 20px;
    ${theme.mq.tablet} {
        flex-direction: column;
        button {
            width: 100%;
        }
    }
    a {
        color: #ffffff;
    }
`;

export const TotalCount = styled.strong`
    color: ${colors.dark};
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
`;
export const TotalAcount = styled.strong`
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
`;

export const WrapperMoney = styled.div`
    display: flex;
    align-items: center;
`;

export const SectionDetailInfo = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 140px auto 0;
    width: 90%;
    ${theme.mq.mobile} {
        margin: 0 auto;
        width: 100%;
    }
`;

export const TabButton = styled.button`
    width: 320px;
    padding: 19px 0;
    background: ${colors.white};
    border-bottom: 6px solid ${colors.border};
    color: ${colors.dark};
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    &:focus,
    &:active {
        border-bottom: 6px solid ${colors.green};
        color: ${colors.green};
    }
    ${theme.mq.mobile} {
        font-size: 14px;
        line-height: 14px;
        padding: 15px 5px;
    }
`;
