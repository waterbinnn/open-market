import styled from '@emotion/styled';
import { colors } from '../../constants/colors';

export const DeliverInfoSection = styled.section`
    width: 90%;
    margin: 0 auto;
`;
export const H2 = styled.h2`
    width: 90%;
    margin: 0 auto;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    padding: 18px 0;
    border-bottom: 2px solid ${colors.border};
`;
export const Form = styled.form`
    width: 90%;
    margin: 40px auto;
`;
export const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
`;
export const Legend = styled.legend`
    padding: 8px 0;
    border-bottom: 2px solid ${colors.border};
    width: 100%;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
`;
export const WrapperInput = styled.div`
    padding: 8px 0;
    border-bottom: 2px solid ${colors.border};
    width: 100%;

    label {
        display: inline-block;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        width: 170px;
    }

    input {
        padding: 0 8px;
        border: 1px solid ${colors.border};
        height: 40px;
    }
`;

export const WrapperAddress = styled.div`
    display: flex;

    div {
        &:last-child {
            display: flex;
            flex-direction: column;
            width: max-content;
        }
    }

    input {
        margin-bottom: 8px;
    }

    button {
        display: inline-block;
        padding: 11px;
        margin-left: 12px;
        width: 130px;
    }
`;
export const WideInput = styled.input`
    width: 800px;
`;
export const Dash = styled.span`
    padding: 0 10px;
`;
export const PhoneInput = styled.input`
    &:first-of-type {
        width: 80px;
    }
    width: 100px;
`;
export const Input = styled.input`
    width: 334px;
`;
