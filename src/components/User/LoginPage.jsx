import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../auth/useAuth';
import { getUser } from '../../user-storage';

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

function Login() {
  const { login } = useAuth();
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    resetField,
    setFocus,
  } = useForm({ mode: 'onBlur' });

  const navigate = useNavigate();

  const [login_type, setLoginType] = useState('BUYER');

  useEffect(() => {
    setFocus('id');
  }, [setFocus]);

  const onSubmit = handleSubmit((data) => {
    login(setError, data, login_type, setFocus, resetField);
  });

  const user = getUser();

  // 이미 로그인 한 회원일 경우
  if (user) {
    return (
      <>
        <h1>이미 로그인한 회원입니다.</h1>
        <Link to="/">홈으로 이동</Link>
      </>
    );
  }

  //로그인 폼
  return (
    <>
      <Section>
        <ImgLogo src={logo} alt="호두마켓" onClick={() => navigate('/')} />
        <CustomerLink href="/login">구매회원 로그인</CustomerLink>
        <SellerLink href="/login">판매회원 로그인</SellerLink>
        <FormStyle onSubmit={onSubmit}>
          <Fieldset>
            <legend className="visually-hidden">로그인</legend>
            <label htmlFor="email" className="visually-hidden">
              아이디
            </label>
            <Input
              id="id"
              type="text"
              placeholder="아이디"
              {...register('id', {
                required: '아이디를 입력해 주세요.',
              })}
            />
            <label className="visually-hidden" htmlFor="password">
              비밀번호
            </label>
            <Input
              id="pw"
              type="password"
              placeholder="비밀번호"
              {...register('pw', {
                required: '비밀번호를 입력해 주세요.',
              })}
            />
            {(errors.id && (
              <ErrorMsg>{errors.id.message.toString()}</ErrorMsg>
            )) ||
              (errors.pw && (
                <ErrorMsg>{errors.pw.message.toString()}</ErrorMsg>
              ))}
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
