/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';
import { TabLinkStyles } from '../components/FormStyles.style';

export const CustomerLink = styled.a({
  ...TabLinkStyles,
  left: '27.5px',
  padding: '17px 0 12px',
  background: `${colors.white}`,
  zIndex: '100',
});

export const SellerLink = styled.a({
  ...TabLinkStyles,
  right: '28px',
  padding: '14px 0 40px',
});

export const SelectBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 59px;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  strong {
    font-weight: 400;
    margin-right: 10px;
    margin-top: -4px;
  }
`;
