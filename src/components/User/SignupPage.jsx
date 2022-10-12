import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { baseUrl } from '../../axiosInstance/constants';

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
  UsernameForm,
} from '../../styles/components/Common/FormStyles.style';
import { PhoneDropDown } from '../../components/Common/DropDown';

function Signup() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [phoneArrow, setPhoneArrow] = useState(downArrow);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [name, setName] = useState('');
  const [firstPhoneNum, setFirstPhoneNum] = useState('010');
  const [middlePhoneNum, setMiddlePhoneNum] = useState('');
  const [lastPhoneNum, setLastPhoneNum] = useState('');
  const [emailId, setEmailId] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnColor, setBtnColor] = useState(colors.grey);
  const [msg, setMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');
  const [checkPasswordMsg, setCheckPasswordMsg] = useState('');
  const [msgColor, setMsgColor] = useState(colors.red);
  const [isChecked, setIsChecked] = useState(false);
  const [checkIcon, setCheckIcon] = useState(checkOffIcon);
  const [checkRePwIcon, setCheckRePwIcon] = useState(checkOffIcon);
  const [checkPasswordMsgColor, setCheckPassworMsgColor] = useState(colors.red);

  //영문 , 패스워드 정규식
  const checkEn = /^[a-zA-Z0-9]*$/;
  // const passwordRule = /^[A-Za-z0-9]{8,18}$/;
  const passwordRule = /^[a-zA-Z](?=.{0,28}[0-9])[0-9a-zA-Z]{6,29}$/;
  const telRule = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4}$/;

  //회원가입 함수
  async function submitSignUp(e) {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
      password2: repeatPassword,
      phone_number: phoneNumber, // 전화번호는 010으로 시작하는 10~11자리 숫자
      name: name, // 이름
    };

    try {
      const res = await axios.post(baseUrl + '/accounts/signup/', userData);
      console.log(res);
      if (res.status === 200) {
        console.log(res);
        setBtnDisabled(false);
        setBtnColor(green);
      }
    } catch (err) {
      console.error(err.response.data);
    }
  }

  //아이디 중복확인
  async function checkIdVaildate(e) {
    e.preventDefault();
    const data = { username: username };
    if (username.length === 0) {
      setMsg('아이디를 입력해 주세요.');
    }
    if (username.length > 6 && checkEn.test(username)) {
      try {
        const res = await axios.post(
          baseUrl + '/accounts/signup/valid/username/',
          data
        );
        if (res.status === 202) {
          setMsg(res.data.Success);
          setMsgColor(colors.green);
          setIsChecked(true);
        }
      } catch (err) {
        setMsg(err.response.data.FAIL_Message);
        setMsgColor(colors.red);
      }
    } else {
      setMsg('영문 6~16자 이내로 입력해 주세요.');
      setMsgColor(colors.red);
    }
  }

  // 비밀번호 검증
  function handleBlurPassword() {
    if (password.length > 7 && passwordRule.test(password)) {
      setPasswordMsg('');
      setCheckIcon(checkOnIcon);
    } else {
      setPasswordMsg('8자 이상, 영소문자를 포함해 작성해주세요');
      setCheckIcon(checkOffIcon);
    }
  }

  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    setRepeatPassword(e.target.value);
    if (passwordRule.test(password) && password === repeatPassword) {
      setCheckPasswordMsg('');
      setCheckRePwIcon(checkOnIcon);
    } else {
      setCheckPasswordMsg('비밀번호가 일치하지 않습니다');
      setCheckRePwIcon(checkOffIcon);
      setCheckPassworMsgColor(colors.red);
    }
  };

  //휴대폰 드롭다운
  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDropDown(() => !isDropDown);
    setPhoneArrow(upArrow);
    if (phoneArrow === upArrow) {
      setPhoneArrow(downArrow);
    }
  };

  const handleFirstPhoneNum = (e) => {
    setFirstPhoneNum(e.target.innerText);
    setPhoneArrow(downArrow);
    setIsDropDown(false);
  };

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
            <legend className="visually-hidden">회원가입</legend>
            <Label htmlFor="username">아이디</Label>
            <InputGroup>
              <Input
                type="text"
                value={username}
                minLength={6}
                maxLength={16}
                onChange={(e) => setUsername(e.target.value)}
              />
              <MsButton
                type="button"
                width={'122px'}
                background={`${colors.green}`}
                onClick={checkIdVaildate}
              >
                중복확인
              </MsButton>
            </InputGroup>
            <ErrorMsg color={msgColor}>{msg}</ErrorMsg>

            <Label htmlFor="password">비밀번호</Label>
            <InputPassword>
              <Input
                type="text"
                minLength="8"
                maxLength="18"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlurPassword}
              />
              <IconCheck src={checkIcon} alt="" />
            </InputPassword>
            <ErrorMsg color={msgColor}>{passwordMsg}</ErrorMsg>

            <Label htmlFor="password">비밀번호 재확인</Label>
            <InputPassword>
              <Input
                type="text"
                minLength="8"
                maxLength="18"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                onBlur={checkPassword}
              />
              <IconCheck src={checkRePwIcon} alt="" />
            </InputPassword>
            <ErrorMsg color={checkPasswordMsgColor}>
              {checkPasswordMsg}
            </ErrorMsg>

            <Label htmlFor="name">이름</Label>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Label htmlFor="phone">휴대폰번호</Label>
            <InputGroup>
              <SelectBtn type="button" onClick={handleDropDown}>
                <strong>{firstPhoneNum}</strong>
                <img src={phoneArrow} alt="화살표" />
              </SelectBtn>
              {isDropDown && (
                <PhoneDropDown
                  isDropDown={isDropDown}
                  handleClick={handleFirstPhoneNum}
                />
              )}

              <Input
                type="text"
                maxLength={'4'}
                value={middlePhoneNum}
                onChange={(e) => setMiddlePhoneNum(e.target.value)}
              />
              <Input
                type="text"
                maxLength={'4'}
                value={lastPhoneNum}
                onChange={(e) => setLastPhoneNum(e.target.value)}
              />
            </InputGroup>
            <Label htmlFor="email">이메일</Label>
            <InputGroup>
              <Input
                type="text"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              <span>@</span>
              <Input
                type="text"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
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
        <MdButton
          type="button"
          width={'80%'}
          margin={'34px 0 0'}
          background={setBtnColor}
          onClick={submitSignUp}
        >
          가입하기
        </MdButton>
      </Section>
    </>
  );
}

export default Signup;
