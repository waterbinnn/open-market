import styled from '@emotion/styled';
import { colors } from '../constants/colors';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.3);
`;
export const ModalSection = styled.section`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    height: 200px;
    margin: 0 auto;
    z-index: 100;
    background: ${colors.white};
    border-radius: 10px;
    padding: 50px 75px 40px;
`;
export const CloseBtn = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
`;

export const WrapperItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: 100px;

        &:nth-of-type(1) {
            border: 1px solid ${colors.border};
            margin-right: 10px;
        }
    }
`;

export const Text = styled.strong`
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 40px;
`;
