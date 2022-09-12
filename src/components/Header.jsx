import { Link } from 'react-router-dom';

import logo from '../assets/images/Logo-hodu.png';
import searchIcon from '../assets/icons/icon-search.svg';
import cartIcon from '../assets/icons/icon-shopping-cart.svg';
import myPageIcon from '../assets/icons/icon-user.svg';
import menuIcon from '../assets/icons/icon-menu.svg';

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
} from '../styles/components/Header.style';

//auth 여부에 따라 다르게 보여야 하기 때문에 나중에 auth 넣기

export default function Header() {
    return (
        <HeaderContainer>
            <NavWrapper>
                <h1 className="visually-hidden">호두마켓</h1>
                <GnbLeft>
                    <Link to="/">
                        <LogoImg src={logo} alt="호두마켓" />
                    </Link>
                    <WrapperSearch>
                        <InputSearch
                            type="text"
                            placeholder="상품을 검색해보세요!"
                        />
                        <ImgSearch src={searchIcon} alt="" />
                    </WrapperSearch>
                </GnbLeft>
                {/* 게스트 네브 */}
                <GnbRight>
                    <h2 className="visually-hidden">마이메뉴</h2>
                    <WrapperLink to="/">
                        <ImgIcon src={cartIcon} alt="장바구니" />
                        <P>장바구니</P>
                    </WrapperLink>
                    <WrapperLink href="/login">
                        <ImgIcon src={myPageIcon} alt="로그인" />
                        <P>로그인</P>
                    </WrapperLink>
                </GnbRight>

                {/* 셀러 네브  */}
                {/* <GnbRight>
                    <h2 className="visually-hidden">마이메뉴</h2>
                    <WrapperLink to="/">
                        <ImgIcon src={myPageIcon} alt="마이페이지" />
                        <P>마이페이지</P>
                    </WrapperLink>
                    <LinkWrapperBtn to="/">
                        <ButtonImg
                            src={
                                require('../assets/icons/icon-shopping-bag.svg')
                                    .default
                            }
                            alt=""
                        />
                        판매자센터
                    </LinkWrapperBtn>
                </GnbRight> */}
            </NavWrapper>
            <Link to="/">
                <MenuIcon src={menuIcon} alt="메뉴버튼" />
            </Link>
        </HeaderContainer>
    );
}
