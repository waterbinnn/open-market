/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../../constants/colors';
import { TabLinkStyles } from '../../components/Common/FormStyles.style';
import upArrow from '../../../assets/icons/icon-up-arrow.svg';
import downArrow from '../../../assets/icons/icon-down-arrow.svg';

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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 59px;
  border: 1px solid ${colors.border};
  border-radius: 5px;

  background-image: url(${downArrow});
  background-repeat: no-repeat;
  background-position: center right 12px;
  cursor: pointer;
  outline: none;

  &:focus {
    background-image: url(${upArrow});
    border: 1px solid ${colors.green};
  }

  strong {
    position: absolute;
    right: 68px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
  }
`;
