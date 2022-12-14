/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../constants/colors';
import theme from '../constants/theme';

export const BackContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: black;
`;

export const DropDownSection = styled.section`
  display: block;
  position: absolute;
  top: 80px;
  right: -45px;
  width: 140px;
  padding: 10px 0;
  background: ${colors.white};
  border-radius: 10px;
  z-index: 100;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  ${theme.mq.tablet} {
    display: none;
  }
`;

export const DropSection = styled.section`
  display: none;
  position: absolute;
  top: 56px;
  left: -140px;
  width: 140px;
  padding: 10px 0;
  background: ${colors.white};
  border-radius: 10px;
  filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.25));
  ${theme.mq.tablet} {
    display: block;
  }
`;

export const Ul = styled.ul`
  margin: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.dark};
`;

export const MobileLi = styled.li`
  width: 100%;
  padding: 10px;
  &:hover {
    outline: 1px solid ${colors.green};
    border-radius: 10px;
  }
`;

export const Li = styled.li`
  button {
    width: 100%;
    padding: 10px;
  }
  &:hover {
    outline: 1px solid ${colors.green};
    border-radius: 10px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -30px;
    left: 37%;
    width: 30px;
    height: 30px;
    transform: rotate(45deg);
    background: ${colors.white};
    z-index: -1;
  }
`;

export const Nums = styled.ol`
  display: ${(props) => props.display};
  position: absolute;
  top: 56px;
  left: 0;
  margin-top: 10px;
  border: 1px solid ${colors.border};
  border-radius: 5px;
  background: white;
  overflow: scroll;
  z-index: 100;
  width: 144px;
  height: 200px;
  padding: 5px;
  overflow: auto;
  button {
    padding: 15px 20px;
    font-weight: 500;
    margin: 0 auto;
    width: 100%;
    &:hover {
      color: ${colors.green};
    }
  }
`;
