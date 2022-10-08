import { useState } from 'react';
import { Link } from 'react-router-dom';

//Assets
import logo from '../../assets/images/Logo-hodu.png';
import checkOffIcon from '../../assets/icons/icon-check-off.svg';
import checkOnIcon from '../../assets/icons/icon-check-on.svg';
import upArrow from '../../assets/icons/icon-up-arrow.svg';
import downArrow from '../../assets/icons/icon-down-arrow.svg';

import { colors } from '../../styles/constants/colors';

//Styles
import { MdButton, MsButton } from '../../styles/modules/_Button';
import {
  CustomerLink,
  SellerLink,
  SelectBtn,
} from '../../styles/components/User/SignupForm.style';

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
} from '../../styles/components/Common/FormStyles.style';
import { PhoneDropDown } from '../../components/Common/DropDown';

function Signup() {
  const [isDropDown, setIsDropDown] = useState('none');
  const [phoneArrow, setPhoneArrow] = useState(downArrow);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [firstPhoneNum, setFirstPhoneNum] = useState('010');
  const [middlePhoneNum, setMiddlePhoneNum] = useState('');
  const [lastPhoneNum, setLastPhoneNum] = useState('');
  const [emailId, setEmailId] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const baseUrl = 'https://openmarket.weniv.co.kr';
    userData = {
      username: username, // 아이디
      password: password,
      password2: repeatPassword,
      phone_number: phoneNumber, // 전화번호는 010으로 시작하는 10~11자리 숫자
      name: name, // 이름
    };
  }

  const handleDropDown = (e) => {
    e.preventDefault();
    if (isDropDown === 'none') {
      setIsDropDown('block');
      setPhoneArrow(upArrow);
    } else {
      setIsDropDown('none');
      setPhoneArrow(downArrow);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'userId') {
      setUserId(e.target.value);
    } else if (e.target.name === 'password') {
      setPassword(e.target.value);
    } else if (e.target.name === 'repeatPassword') {
      setRepeatPassword(e.target.value);
    } else if (e.target.value === 'username') {
      setUsername(e.target.value);
    }
  };

  return (
    <>
      <Section>
        <Link to="/">
          <ImgLogo src={logo} alt="호두마켓" />
        </Link>
        <CustomerLink href="/signup">구매회원가입</CustomerLink>
        <SellerLink href="/seller-signup">판매회원가입</SellerLink>
        <FormStyle onSubmit={handleSubmit}>
          <Fieldset>
            <legend className="visually-hidden">로그인</legend>
            <Label htmlFor="email">아이디</Label>
            <InputGroup>
              <Input
                type="text"
                value={userId}
                onChange={handleChange}
                name="userId"
              />
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
              <Input
                type="password"
                minLength="6"
                maxLength="16"
                value={password}
                onChange={handleChange}
                name="password"
              />
              <IconCheck src={checkOffIcon} alt="" />
            </InputPassword>

            <Label htmlFor="password">비밀번호 재확인</Label>
            <InputPassword>
              <Input
                type="password"
                minLength="6"
                maxLength="16"
                value={repeatPassword}
                onChange={handleChange}
                name="repeatPassword"
              />
              <IconCheck src={checkOffIcon} alt="" />
            </InputPassword>
            <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>

            <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              value={username}
              onChange={handleChange}
              name="username"
            />

            <Label htmlFor="phone">휴대폰번호</Label>
            <InputGroup>
              <SelectBtn type="button" onClick={handleDropDown}>
                <strong>{firstPhoneNum}</strong>
                <img src={phoneArrow} alt="" />
              </SelectBtn>
              <PhoneDropDown isDropDown={isDropDown} />

              <Input
                type="text"
                maxLength={'4'}
                value={middlePhoneNum}
                onChange={handleChange}
                name="middlePhoneNum"
              />
              <Input
                type="text"
                maxLength={'4'}
                value={lastPhoneNum}
                onChange={handleChange}
                name="lastPhoneNum"
              />
            </InputGroup>
            <Label htmlFor="email">이메일</Label>
            <InputGroup>
              <Input
                type="text"
                value={emailId}
                onChange={handleChange}
                name="email"
              />
              <span>@</span>
              <Input
                type="text"
                value={emailAddress}
                onChange={handleChange}
                name="email"
              />
            </InputGroup>
          </Fieldset>
        </FormStyle>
        <CheckGroup>
          {/* 클릭 시 체크박스 이미지 바뀌게 이벤트  */}
          <button>
            <img
              src={require('../../assets/icons/check-box.svg').default}
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
