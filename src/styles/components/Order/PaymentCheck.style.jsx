import styled from '@emotion/styled';
import { colors } from '../../constants/colors';

export const Section = styled.section`
  div {
    width: 100%;
    display: flex;
    padding: 18px 0;
    border-bottom: 2px solid ${colors.border};
    border-top: 2px solid ${colors.border};
  }

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }

  input[type='radio'] {
    border: 2px solid #c4c4c4;
    margin: 0 10px;
  }
`;
export const H2 = styled.h2`
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  padding: 18px 0;
`;
