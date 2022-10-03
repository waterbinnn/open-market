import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
//Assets
import logo from '../assets/images/Logo-hodu.png';
//Styles
import { Input, Nav, ErrorMsg } from '../styles/pages/LoginForm.style';
import { MdButton } from '../styles/modules/_Button';
import { CustomerLink, SellerLink } from '../styles/pages/SignupForm.style';
import {
  Section,
  ImgLogo,
  FormStyle,
  Fieldset,
} from '../styles/components/FormStyles.style';
import { colors } from '../styles/constants/colors';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isBuyer, setIsBuyer] = useState('BUYER');
  const [isError, setIsError] = useState('none');
  const [errMsg, setErrMsg] = useState('');

  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.type === 'text') {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  async function handleSubmitLogin(e) {
    e.preventDefault();
    const baseUrl = 'https://openmarket.weniv.co.kr';

    const loginData = {
      username: username,
      password: password,
      login_type: isBuyer, // BUYER : 일반 구매자, SELLER : 판매자
    };

    try {
      const res = await axios.post(baseUrl + '/accounts/login/', loginData);
      if (res.status === 200) {
        console.log(res.data);
        window.localStorage.setItem('username', res.data.id);
        window.localStorage.setItem('token', res.data.token);
        navigate('/');
      }
    } catch (err) {
      if (err.request.response.includes('username')) {
        usernameRef.current.focus();
      } else if (err.request.response.includes('password')) {
        passwordRef.current.focus();
      } else if (err.request.response.includes('로그인 정보가 없습니다.')) {
        setIsError('true');
        setErrMsg('아이디 혹은 비밀번호를 다시 입력해주세요.');
        passwordRef.current.focus();
        setPassword('');
      }
    }
  }

  return (
    <>
      <Section>
        <ImgLogo src={logo} alt="호두마켓" />
        <CustomerLink href="/login">구매회원 로그인</CustomerLink>
        <SellerLink href="#">판매회원 로그인</SellerLink>
        <FormStyle method="POST" onClick={handleSubmitLogin}>
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
              onChange={handleChange}
              ref={usernameRef}
              value={username}
            />
            <label className="visually-hidden" htmlFor="password">
              비밀번호
            </label>
            <Input
              type="password"
              placeholder="비밀번호"
              minLength="6"
              onChange={handleChange}
              maxLength="16"
              ref={passwordRef}
              value={password}
            />
            <ErrorMsg display={isError}>{errMsg}</ErrorMsg>
          </Fieldset>
          <MdButton
            padding={'19px 0'}
            width={'100%'}
            type="submit"
            margin={'26px 0 0'}
            background={`${colors.green}`}
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
