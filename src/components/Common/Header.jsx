import { useState, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';

import logo from '../../assets/images/Logo-hodu.png';
import searchIcon from '../../assets/icons/icon-search.svg';
import cartIcon from '../../assets/icons/icon-shopping-cart.svg';
import myPageIcon from '../../assets/icons/icon-user.svg';
import menuIcon from '../../assets/icons/icon-menu.svg';

import {
  HeaderContainer,
  NavWrapper,
  GnbRight,
  GnbLeft,
  LinkImg,
  LogoImg,
  WrapperSearch,
  ImgSearch,
  InputSearch,
  WrapperLink,
  ImgIcon,
  P,
  MenuIcon,
  ButtonImg,
  LinkWrapperBtn,
  WrapperButton,
  WrapperMenu,
} from '../../styles/components/Common/Header.style';
import { MobileDropDown, MyPageDropDown } from './DropDown';
import { useEffect } from 'react';

function Header() {
  const { token } = useContext(AuthContext);
  const [isDropDown, setIsDropDown] = useState(false);
  const outSection = useRef();

  function openDropDown() {
    setIsDropDown(() => !isDropDown);
  }

  const handleClickOutside = ({ target }) => {
    // setIsDropDown(false);
    console.log(outSection.current);

    // if (isDropDown && !outSection.current.contains(target))
    //   setIsDropDown(false);
    // console.log(target);
  };
  // const handleClickOutside = ({ target }) => {
  //   if (isDropDown && !outSection.current.contains(target))
  //     setIsDropDown(false);
  //   console.log(target);
  // };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <NavWrapper>
          <h1 className="visually-hidden">호두마켓</h1>
          <GnbLeft>
            <Link to="/">
              <LogoImg src={logo} alt="호두마켓" />
            </Link>
            <WrapperSearch>
              <InputSearch type="text" placeholder="상품을 검색해보세요!" />
              <ImgSearch src={searchIcon} alt="" />
            </WrapperSearch>
          </GnbLeft>

          {token ? (
            <>
              {/* 로그인 사용자 헤더  */}
              <GnbRight>
                <h2 className="visually-hidden">마이메뉴</h2>
                <WrapperLink href="/:userid/cart">
                  <ImgIcon src={cartIcon} alt="장바구니" />
                  <P>장바구니</P>
                </WrapperLink>
                <WrapperButton type="button" onClick={openDropDown}>
                  <ImgIcon src={myPageIcon} alt="마이페이지" />
                  <P>마이페이지</P>
                  {isDropDown && <MyPageDropDown forwardRef={outSection} />}
                </WrapperButton>
              </GnbRight>
            </>
          ) : (
            <>
              {/* 로그인하지 않은 사용자 헤더 */}
              <GnbRight>
                <h2 className="visually-hidden">마이메뉴</h2>
                <WrapperLink href="/login">
                  <ImgIcon src={cartIcon} alt="장바구니" />
                  <P>장바구니</P>
                </WrapperLink>
                <WrapperLink href="/login">
                  <ImgIcon src={myPageIcon} alt="로그인" />
                  <P>로그인</P>
                </WrapperLink>
              </GnbRight>
            </>
          )}

          {/* 로그인 판매자 헤더  */}
          {/* <GnbRight>
            <h2 className="visually-hidden">마이메뉴</h2>
            <WrapperLink to="/">
              <ImgIcon src={myPageIcon} alt="마이페이지" />
              <P>마이페이지</P>
            </WrapperLink>
            <LinkWrapperBtn to="/">
              <ButtonImg
                src={require('../assets/icons/icon-shopping-bag.svg').default}
                alt=""
              />
              판매자센터
            </LinkWrapperBtn>
          </GnbRight> */}
          <WrapperMenu type="button" onClick={openDropDown}>
            <MenuIcon src={menuIcon} alt="메뉴버튼" />
            {isDropDown && (
              <MobileDropDown
                isDropDown={isDropDown}
                setIsDropDown={setIsDropDown}
              />
            )}
          </WrapperMenu>
        </NavWrapper>
      </HeaderContainer>
    </>
  );
}

export default Header;
