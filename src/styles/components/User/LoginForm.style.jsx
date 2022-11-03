/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../../constants/colors';

export const ErrorMsg = styled.strong`
  display: ${(props) => props.display};
  margin-top: 10px;
  color: ${(props) => props.color || `${colors.red}`};
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.border};
  padding: 20px 0 15px;
  font-size: 14px;

  &::placeholder {
    font-size: 12px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 30px auto;
  width: fit-content;
  color: ${colors.dark};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;
