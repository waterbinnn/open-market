import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../../auth/AuthContext';
import { baseUrl } from '../../axiosInstance/constants';

import UserAccount from './SignUp/UserAccount';

//Assets
import logo from '../../assets/images/Logo-hodu.png';
import checkBox from '../../assets/icons/check-box.svg';
import checkFillBox from '../../assets/icons/check-fill-box.svg';

//Styles
import { colors } from '../../styles/constants/colors';
import { MdButton } from '../../styles/modules/_Button';
import {
  CustomerLink,
  SellerLink,
} from '../../styles/components/User/SignupForm.style';

import {
  Section,
  ImgLogo,
  FormStyle,
  CheckGroup,
} from '../../styles/components/Common/FormStyles.style';

import { clearStoredUser } from '../../user-storage';

function Signup() {
  const [isActive, setIsActive] = useState(true);
  const [btnColor, setBtnColor] = useState(colors.grey);
  const [checkedBox, setCheckedBox] = useState(checkBox);
  const [isName, setIsName] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstPhoneNum, setFirstPhoneNum] = useState('010');
  const [middlePhoneNum, setMiddlePhoneNum] = useState('');
  const [lastPhoneNum, setLastPhoneNum] = useState('');

  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  //휴대폰번호
  let phoneNumber = firstPhoneNum + middlePhoneNum + lastPhoneNum;

  //회원가입 함수
  async function submitSignUp(e) {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
      password2: repeatPassword,
      phone_number: phoneNumber,
      name: name,
    };

    try {
      const res = await axios.post(baseUrl + '/accounts/signup/', userData);
      if (res.status === 201) {
        setBtnColor(colors.green);
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setBtnColor(colors.grey);
      if ('password' in err.response.data) {
        alert(err.response.data.password[0]);
        setPassword('');
        setRepeatPassword('');
        setIsActive(true);
      } else {
        setIsActive(false);
        setBtnColor(colors.green);
      }

      if ('phone_number' in err.response.data) {
        alert(err.response.data.phone_number[0]);
        setMiddlePhoneNum('');
        setLastPhoneNum('');
        setIsActive(true);
      } else {
        setIsActive(false);
        setBtnColor(colors.green);
      }
    }
  }

  //체크박스
  const handleCheckBox = (e) => {
    if (e.target.src.includes('fill')) {
      setCheckedBox(checkBox);
    } else {
      setCheckedBox(checkFillBox);
      setIsChecked(true);
    }
  };

  //폰번호 유효성검사
  useEffect(() => {
    if (phoneNumber.length > 9) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  }, [phoneNumber]);

  //가입 버튼활성화
  useEffect(() => {
    if (
      isUsernameValid &&
      isPasswordValid &&
      isPhone &&
      isName &&
      isChecked === true
    ) {
      setBtnColor(colors.green);
      setIsActive(false);
    } else {
      setBtnColor(colors.grey);
      setIsActive(true);
    }
  }, [isUsernameValid, isPasswordValid, isPhone, isName, isChecked]);

  const Logout = () => {
    clearStoredUser();
    location.reload();
    navigate('/signUp');
  };

  if (token) {
    return (
      <>
        <h1>
          이미 로그인한 회원입니다.
          <br />
          로그아웃 후 가입하시겠습니까?
        </h1>
        <Link to="/">홈으로 이동</Link>
        <button onClick={Logout}>로그아웃</button>
      </>
    );
  }

  return (
    <>
      <Section>
        <Link to="/">
          <ImgLogo src={logo} alt="호두마켓" />
        </Link>
        <CustomerLink href="/signup">구매회원가입</CustomerLink>
        <SellerLink href="/seller-signup">판매회원가입</SellerLink>
        <FormStyle>
          <UserAccount
            username={username}
            setUsername={setUsername}
            name={name}
            setName={setName}
            password={password}
            setPassword={setPassword}
            repeatPassword={repeatPassword}
            setRepeatPassword={setRepeatPassword}
            phoneNumber={phoneNumber}
            firstPhoneNum={firstPhoneNum}
            setFirstPhoneNum={setFirstPhoneNum}
            middlePhoneNum={middlePhoneNum}
            setMiddlePhoneNum={setMiddlePhoneNum}
            lastPhoneNum={lastPhoneNum}
            setLastPhoneNum={setLastPhoneNum}
            isName={isName}
            setIsName={setIsName}
            isPasswordValid={setIsPasswordValid}
            setIsPasswordValid={setIsPasswordValid}
            isUsernameValid={isUsernameValid}
            setIsUsernameValid={setIsUsernameValid}
            isPhone={isPhone}
            setIsPhone={setIsPhone}
          />
        </FormStyle>
        <CheckGroup>
          <button type="button" onClick={handleCheckBox}>
            <img src={checkedBox} alt="동의 체크박스" />
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
          background={btnColor}
          onClick={submitSignUp}
          disabled={isActive}
        >
          가입하기
        </MdButton>
      </Section>
    </>
  );
}
export default Signup;

/*
Todo
1. 파일 분리 
2. 가입하기 버튼 활성화
3. 가입하기 클릭했을 때 중복확인 안했으면 하라고 알림창, 오류메세지
4. 가입 완료되면 홈페이지로 이동, 로그인 이미 된 상태로 만들기 
5. 유저 정보 쿼리에 저장 (?)
*/
