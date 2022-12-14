import { useNavigate } from 'react-router-dom';

import { getUser, clearUser } from '../../user-storage';

import {
  DropDownSection,
  Ul,
  Li,
  DropSection,
  Nums,
  MobileLi,
  BackContainer,
} from '../../styles/modules/DropDown.style';

export function MyPageDropDown(props) {
  const user = getUser();

  const handleLogout = (e) => {
    e.preventDefault();
    clearUser();
    location.reload();
  };

  return (
    <DropDownSection>
      <h2 className="visually-hidden">메뉴</h2>
      {/* 로그인 사용자  */}
      {user && (
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
  const navigate = useNavigate();
  const user = getUser();

  const Logout = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    location.reload();
  };

  return (
    <>
      <DropSection>
        {user ? (
          <>
            {/* 로그인 사용자 드롭박스  */}
            <Ul>
              <MobileLi>
                <button type="button">장바구니</button>
              </MobileLi>
              <MobileLi>
                <button type="button">마이페이지</button>
              </MobileLi>
              <MobileLi onClick={Logout}>
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
  const { isDropDown, handleClick } = props;

  return (
    <Nums isDropDown={isDropDown} onClick={handleClick}>
      <li>
        <button type="button" value={'010'}>
          010
        </button>
      </li>
      <li>
        <button type="button" value={'011'}>
          011
        </button>
      </li>
      <li>
        <button type="button" value={'016'}>
          016
        </button>
      </li>
      <li>
        <button type="button" value={'017'}>
          017
        </button>
      </li>
      <li>
        <button type="button" value={'018'}>
          018
        </button>
      </li>
      <li>
        <button type="button" value={'019'}>
          019
        </button>
      </li>
    </Nums>
  );
}
