import {
  FooterContainer,
  IntroDiv,
  Ul,
  Li,
  IconImg,
  Strong,
  SideDiv,
  DescriptSpan,
} from '../../styles/components/Common/Footer.style';

function Footer() {
  return (
    <>
      <FooterContainer>
        <IntroDiv>
          <nav>
            <h2 className="visually-hidden">기타정보</h2>
            <Ul>
              <Li>호두샵 소개</Li>
              <Li>이용약관</Li>
              <Li>개인정보처리방침</Li>
              <Li>전자금융거래약관</Li>
              <Li>청소년보호정책</Li>
              <Li>제휴문의</Li>
            </Ul>
          </nav>
          <div>
            <IconImg
              src={require('../../assets/icons/icon-insta.svg').default}
              alt="인스타그램으로 이동"
            />
            <IconImg
              src={require('../../assets/icons/icon-fb.svg').default}
              alt="페이스북으로 이동"
            />
            <IconImg
              src={require('../../assets/icons/icon-yt.svg').default}
              alt="유튜브로 이동"
            />
          </div>
        </IntroDiv>

        <SideDiv>
          <Strong>(주)HODU SHOP</Strong>
          <br />
          <DescriptSpan>
            제주특별자치도 제주시 동광고 137 제주코딩베이스캠프
          </DescriptSpan>
          <br />
          <DescriptSpan>사업자 번호 : 000-0000-0000 | 통신판매업</DescriptSpan>
          <br />
          <DescriptSpan>대표 : 김호두</DescriptSpan>
        </SideDiv>
      </FooterContainer>
    </>
  );
}

export default Footer;
