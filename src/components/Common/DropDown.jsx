import { useEffect } from 'react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import {
  DropDownSection,
  Ul,
  Li,
  DropSection,
  Nums,
  MobileLi,
} from '../../styles/modules/DropDown.style';

export function MyPageDropDown(props) {
  const { isDropDown } = props;

  const { token } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    location.reload();
  };

  return (
    <DropDownSection display={isDropDown}>
      <h2 className="visually-hidden">메뉴</h2>
      {/* 로그인 사용자  */}
      {token && (
        <Ul>
          <Li>
            <button type="button">마이페이지</button>
          </Li>
          <Li onClick={handleLogout}>
            <button type="button">로그아웃</button>
          </Li>
        </Ul>
      )}
    </DropDownSection>
  );
}

export function MobileDropDown(props) {
  const { isDropDown } = props;

  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    location.reload();
  };

  return (
    <>
      {/* 로그인 여부에 따라 달라 보임  */}
      <DropSection display={isDropDown}>
        {token ? (
          <>
            {/* 로그인 사용자 드롭박스  */}
            <Ul>
              <MobileLi>
                <button type="button">장바구니</button>
              </MobileLi>
              <MobileLi>
                <button type="button">마이페이지</button>
              </MobileLi>
              <MobileLi onClick={handleLogout}>
                <button type="button">로그아웃</button>
              </MobileLi>
            </Ul>
          </>
        ) : (
          <>
            {/* 로그인하지 않은 사용자 드롭박스  */}
            <Ul>
              <MobileLi>
                <button type="button">장바구니</button>
              </MobileLi>
              <MobileLi onClick={() => navigate('/login')}>
                <button type="button">로그인</button>
              </MobileLi>
            </Ul>
          </>
        )}

        {/* 로그인 판매자 드롭박스  */}
        {/* <Ul>
          <MobileLi>
            <button type="button">마이페이지</button>
          </MobileLi>
          <MobileLi>
            <button type="button">판매자센터</button>
          </MobileLi>
        </Ul> */}
      </DropSection>
    </>
  );
}

export function PhoneDropDown(props) {
  const { isDropDown } = props;

  return (
    <Nums display={isDropDown}>
      <li>
        <button type="button">010</button>
      </li>
      <li>
        <button type="button">011</button>
      </li>
      <li>
        <button type="button">016</button>
      </li>
      <li>
        <button type="button">017</button>
      </li>
      <li>
        <button type="button">018</button>
      </li>
      <li>
        <button type="button">019</button>
      </li>
    </Nums>
  );
}