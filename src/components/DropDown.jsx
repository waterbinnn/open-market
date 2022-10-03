import {
  DropDownSection,
  Ul,
  Li,
  DropSection,
  Nums,
  MobileLi,
} from '../styles/modules/DropDown.style';

export function MyPageDropDown() {
  return (
    <DropDownSection>
      <h2 className="visually-hidden">메뉴</h2>
      <Ul>
        <Li>
          <button type="button">마이페이지</button>
        </Li>
        <Li>
          <button type="button">로그아웃</button>
        </Li>
      </Ul>
    </DropDownSection>
  );
}

export function MobileDropDown() {
  return (
    <>
      {/* 로그인 여부에 따라 달라 보임  */}
      <DropSection>
        <h2>
          {/* 로그인하지 않은 사용자 드롭박스  */}
          {/* <Ul>
                        <MobileLi>
                            <button type="button">장바구니</button>
                        </MobileLi>
                        <MobileLi>
                            <button type="button">로그인</button>
                        </MobileLi>
                    </Ul> */}

          {/* 로그인 사용자 드롭박스  */}
          <Ul>
            <MobileLi>
              <button type="button">장바구니</button>
            </MobileLi>
            <MobileLi>
              <button type="button">마이페이지</button>
            </MobileLi>
            <MobileLi>
              <button type="button">로그아웃</button>
            </MobileLi>
          </Ul>

          {/* 로그인 판매자 드롭박스  */}
          {/* <ul>
                        <MobileLi>
                            <button type="button">마이페이지</button>
                        </MobileLi>
                        <MobileLi>
                            <button type="button">판매자센터</button>
                        </MobileLi>
                    </ul> */}
        </h2>
      </DropSection>
    </>
  );
}

export function PhoneDropDown() {
  return (
    <Nums>
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
