import styled from '@emotion/styled';
import { colors } from '../../constants/colors';

export const H2 = styled.h2`
  margin: 0 auto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  padding: 18px 0;
`;

export const WrapperInfo = styled.div`
  border: 2px solid ${colors.green};
  border-radius: 10px;
`;

export const WrapperButton = styled.div`
  background: #f2f2f2;
  border-radius: 0 0 10px 10px;
  padding-bottom: 34px;

  img {
    margin-right: 10px;
  }

  div {
    padding: 30px;
  }

  button {
    width: 220px;
  }
`;

export const Ol = styled.ol`
  padding: 34px 30px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:nth-of-type(3) {
      margin-bottom: 19px;
    }

    &:nth-of-type(4) {
      padding: 29px 0 0;
      border-top: 1px solid ${colors.border};
    }
  }
`;
export const Title = styled.strong`
  display: inline-flex;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 15px;
`;

export const PriceText = styled.strong`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

export const ConfirmText = styled.p`
  display: inline-block;
`;

export const Price = styled.strong`
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-left: 4px;
  }
`;
export const OrderPrice = styled.strong`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${colors.red};
`;
