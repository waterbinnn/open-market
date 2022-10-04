import { useState } from 'react';
import { Link } from 'react-router-dom';

//Assets
import logo from '../assets/images/Logo-hodu.png';
import checkOffIcon from '../assets/icons/icon-check-off.svg';
import checkOnIcon from '../assets/icons/icon-check-on.svg';
import upArrow from '../assets/icons/icon-up-arrow.svg';
import downArrow from '../assets/icons/icon-down-arrow.svg';

import { colors } from '../styles/constants/colors';

//Styles
import { MdButton, MsButton } from '../styles/modules/_Button';
import {
  CustomerLink,
  SellerLink,
  SelectBtn,
} from '../styles/pages/SignupForm.style';

import {
  Section,
  ImgLogo,
  FormStyle,
  Fieldset,
  Input,
  ErrorMsg,
  InputGroup,
  Label,
  IconCheck,
  InputPassword,
  CheckGroup,
} from '../styles/components/FormStyles.style';
import { PhoneDropDown } from '../components/DropDown';

function Signup() {
  const [isDropDown, setIsDropDown] = useState('none');

  const handleDropDown = (e) => {
    e.preventDefault();
    if (isDropDown === 'none') {
      setIsDropDown('block');
    } else {
      setIsDropDown('none');
    }
  };

  const handleChange = () => {};

  return (
    <>
      <Section>
        <Link to="/">
          <ImgLogo src={logo} alt="호두마켓" />
        </Link>
        <CustomerLink href="/signup">구매회원가입</CustomerLink>
        <SellerLink href="/seller-signup">판매회원가입</SellerLink>
        <FormStyle>
          <Fieldset>
            <legend className="visually-hidden">로그인</legend>
            <Label htmlFor="email">아이디</Label>
            <InputGroup>
              <Input type="email" onChange={handleChange} />
              <MsButton
                type="submit"
                width={'122px'}
                background={`${colors.green}`}
              >
                중복확인
              </MsButton>
            </InputGroup>
            <ErrorMsg>
              이미 사용 중인 아이디입니다.
              {/* 멋진 아이디네요 :)  */}
            </ErrorMsg>

            <Label htmlFor="password">비밀번호</Label>
            <InputPassword>
              <Input type="password" minLength="6" maxLength="16" />
              <IconCheck src={checkOffIcon} alt="" />
            </InputPassword>

            <Label htmlFor="password">비밀번호 재확인</Label>
            <InputPassword>
              <Input type="password" minLength="6" maxLength="16" />
              <IconCheck src={checkOffIcon} alt="" />
            </InputPassword>
            <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>

            <Label htmlFor="name">이름</Label>
            <Input type="text" />

            <Label htmlFor="phone">휴대폰번호</Label>
            <InputGroup>
              <SelectBtn type="button" onClick={handleDropDown}>
                <strong>010</strong>
                <img src={downArrow} alt="" />
              </SelectBtn>
              <PhoneDropDown isDropDown={isDropDown} />

              <Input type="text" maxLength={'4'} />
              <Input type="text" maxLength={'4'} />
            </InputGroup>
            <Label htmlFor="email">이메일</Label>
            <InputGroup>
              <Input type="text" />
              <span>@</span>
              <Input type="text" />
            </InputGroup>
          </Fieldset>
        </FormStyle>
        <CheckGroup>
          {/* 클릭 시 체크박스 이미지 바뀌게 이벤트  */}
          <button>
            <img
              src={require('../assets/icons/check-box.svg').default}
              alt="동의 체크박스"
            />
          </button>
          <p>
            호두샵의 <strong>이용약관 </strong> 및{' '}
            <strong>개인정보처리방침에</strong> 대한 내용을 확인하였고
            동의합니다.
          </p>
        </CheckGroup>
        <MdButton type="submit" width={'80%'} margin={'34px 0 0'}>
          가입하기
        </MdButton>
      </Section>
    </>
  );
}

export default Signup;
