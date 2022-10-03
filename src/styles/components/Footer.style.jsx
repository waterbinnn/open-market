/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';
import theme from '../constants/theme';

export const FooterContainer = styled.footer`
  height: auto;
  background: #f2f2f2;
  padding: 60px 10%;
`;

export const IntroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #c4c4c4;
  ${theme.mq.tablet} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${theme.mq.tablet} {
    gap: 4px;
  }
`;

export const Li = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
  &:after {
    content: '|';
    width: 2px;
    height: 12px;
    margin: 0 14px;
  }
  &:last-child {
    &:after {
      content: '';
    }
  }
  ${theme.mq.tablet} {
    font-size: 11px;
    line-height: 1.2;
    &:after {
      margin: 0 8px;
    }
  }
`;

export const IconImg = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 12px;
  cursor: pointer;
  ${theme.mq.tablet} {
    margin-left: 8px;
    width: 20px;
    height: 20px;
    margin-left: 0;
    margin: 10px 5px 0 0;
  }
`;

export const SideDiv = styled.div`
    padding-top: 30px;
    color: ${colors.dark};
    font-size: 14px;
    line-height: 24px;
    ${theme.mq.tablet} {
        font-size: 12px;
        line-height: 1.2;
`;

export const Strong = styled.strong`
  font-weight: 700;
`;

export const DescriptSpan = styled.span`
  font-weight: 400;
`;
