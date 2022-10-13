import { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../auth/AuthContext';

import { baseUrl } from '../../axiosInstance/constants';

//Assets
import logo from '../../assets/images/Logo-hodu.png';
//Styles
import { MdButton } from '../../styles/modules/_Button';
import { colors } from '../../styles/constants/colors';
import {
  Input,
  Nav,
  ErrorMsg,
} from '../../styles/components/User/LoginForm.style';
import {
  CustomerLink,
  SellerLink,
} from '../../styles/components/User/SignupForm.style';
import {
  Section,
  ImgLogo,
  FormStyle,
  Fieldset,
} from '../../styles/components/Common/FormStyles.style';

import { setStoredUser } from '../../user-storage';

function Login() {
  const user = { username, password };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isBuyer, setIsBuyer] = useState('BUYER');
  const [isError, setIsError] = useState('none');
  const [errMsg, setErrMsg] = useState('');

  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { token } = useContext(AuthContext);

  async function handleSubmitLogin(e) {
    e.preventDefault();

    const loginData = {
      username: username,
      password: password,
      login_type: isBuyer,
    };

    try {
      const res = await axios.post(baseUrl + '/accounts/login/', loginData);
      if (res.status === 200) {
        setStoredUser(res.data.token);
        navigate('/');
        location.reload();
      }
    } catch (err) {
      if (err.request.response.includes('username')) {
        usernameRef.current.focus();
      } else if (err.request.response.includes('password')) {
        passwordRef.current.focus();
      } else if (err.request.response.includes('로그인 정보가 없습니다.')) {
        setIsError('true');
        setErrMsg('아이디 혹은 비밀번호를 다시 입력해주세요.');
        setPassword('');
      }
    }
  }

  if (token) {
    return (
      <>
        <h1>이미 로그인한 회원입니다.</h1>
        <Link to="/">홈으로 이동</Link>
      </>
    );
  }

  return (
    <>
      <Section>
        <ImgLogo src={logo} alt="호두마켓" onClick={() => navigate('/')} />
        <CustomerLink href="/login">구매회원 로그인</CustomerLink>
        <SellerLink href="#">판매회원 로그인</SellerLink>
        <FormStyle>
          <Fieldset>
            <legend className="visually-hidden">로그인</legend>
            <label htmlFor="email" className="visually-hidden">
              아이디
            </label>
            <Input
              type="text"
              placeholder="아이디"
              minLength="5"
              maxLength="12"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              ref={usernameRef}
            />
            <label className="visually-hidden" htmlFor="password">
              비밀번호
            </label>
            <Input
              type="password"
              placeholder="비밀번호"
              minLength="6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              maxLength="16"
              ref={passwordRef}
            />
            <ErrorMsg display={isError}>{errMsg}</ErrorMsg>
          </Fieldset>
          <MdButton
            padding={'19px 0'}
            width={'100%'}
            type="submit"
            margin={'26px 0 0'}
            background={`${colors.green}`}
            onClick={handleSubmitLogin}
          >
            로그인
          </MdButton>
        </FormStyle>
        <Nav>
          <Link to="/signup">회원가입</Link>
          <span>|</span>
          <Link to="/">비밀번호 찾기</Link>
        </Nav>
      </Section>
    </>
  );
}

export default Login;
