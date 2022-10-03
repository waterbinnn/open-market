import styled from '@emotion/styled';
import { colors } from '../../constants/colors';

export const Tr = styled.tr`
  display: block;
  margin-bottom: 20px;
  width: 90%;
  margin: 0 auto;
  border: 1px solid ${colors.border};
  border-radius: 10px;
  td {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    padding: 20px 20px;
    margin: 0 auto;
    text-align: center;
  }
`;

export const ImgDelete = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const ProductImg = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  border-radius: 10px;
  margin: 0 20px 0 40px;
  object-fit: cover;
`;

export const WrapperInfoLink = styled.a`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 386px;
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

export const WrapperPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 60px;

  button {
    margin-top: 26px;
  }
`;
