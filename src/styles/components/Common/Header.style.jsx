/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { colors } from '../../constants/colors';
import theme from '../../constants/theme';

export const HeaderContainer = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  z-index: 10;
  background-color: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const NavWrapper = styled.nav`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 20px 0;
  margin: 0 auto;
  ${theme.mq.mobile} {
    width: 90%;
  }
`;
export const GnbLeft = styled.div`
  box-sizing: border-box;
  display: flex;
  width: auto;
  ${theme.mq.mobile} {
    margin: 0 auto;
  }
`;

export const GnbRight = styled.div`
  box-sizing: border-box;
  display: flex;
`;

export const LogoImg = styled.img`
  display: block;
  width: 124px;
  margin-top: 4px;
`;
export const WrapperSearch = styled.div`
  position: relative;
  width: 350px;
  margin-left: 30px;
  ${theme.mq.tablet} {
    width: 300px;
  }
  ${theme.mq.mobile} {
    display: none;
  }
`;
export const InputSearch = styled.input`
  box-sizing: border-box;
  border: 1px solid ${colors.green};
  padding: 13px 50px 13px 20px;
  border-radius: 50px;
  width: 100%;
  line-height: 1.3;
`;
export const ImgSearch = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
export const WrapperLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 50px;
  &: first-of-type {
    margin-right: 26px;
  }
  ${theme.mq.tablet} {
    display: none;
  }
`;

export const WrapperMenu = styled.button`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    position: relative;
  }
`;
export const MenuIcon = styled.img`
  display: none;
  ${theme.mq.tablet} {
    display: block;
    position: absolute;
    right: -10px;
    top: 10px;
    padding: 5px;
  }
`;

export const WrapperButton = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  ${theme.mq.tablet} {
    display: none;
  }
`;

export const ImgIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-bottom: 4px;
`;
export const P = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: ${colors.dark};
`;

export const ButtonImg = styled.img`
  width: 25px;
  margin-right: 8px;
`;

export const LinkWrapperBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 10px;
  border: none;
  border-radius: 5px;
  color: ${colors.white};
  background: ${colors.green};
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  cursor: pointer;
  ${theme.mq.tablet} {
    display: none;
  }
`;
