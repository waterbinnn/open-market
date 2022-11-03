import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../auth/useAuth';
import { idRule, pwRule } from '../../../auth/reqExp';

//Assets
import logo from '../../assets/images/Logo-hodu.png';
import checkBox from '../../assets/icons/check-box.svg';
import checkFillBox from '../../assets/icons/check-fill-box.svg';
import checkOffIcon from '../../assets/icons/icon-check-off.svg';
import checkOnIcon from '../../assets/icons/icon-check-on.svg';

//Styles
import { colors } from '../../../styles/constants/colors';
import { MdButton } from '../../../styles/modules/_Button';
import {
  CustomerLink,
  SellerLink,
} from '../../../styles/components/User/SignupForm.style';
import { ErrorMsg } from '../../../styles/components/User/LoginForm.style';
import { MsButton } from '../../../styles/modules/_Button';

import {
  Section,
  ImgLogo,
  FormStyle,
  CheckGroup,
  Fieldset,
  InputGroup,
  Label,
  Input,
  InputPassword,
} from '../../../styles/components/Common/FormStyles.style';

import PhoneForm from './phoneForm';

import { useSignup } from '../hooks/useSignup';

function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    setValue,
    isSubmitting,
    setFocus,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  const [joinType, setJoinType] = useState('BUYER');
  const [btnColor, setBtnColor] = useState(colors.grey);

  const { signUp } = useAuth();

  const {
    checkIdValid,
    isUserIdValid,
    setIsUserIdValid,
    isPasswordValid,
    successMsg,
    pwMsg,
    checkPw,
    checkPWSame,
    checkIcon,
    checkRepeatIcon,
    msgColor,
  } = useSignup();

  useEffect(() => {
    setFocus('id');
  }, [setFocus]);

  const onSubmit = handleSubmit((data) => {
    signUp(setError, data, joinType);
    console.log(data);
  });

  return (
    <>
      <Section>
        <Link to="/">
          <ImgLogo src={logo} alt="호두마켓" />
        </Link>
        <CustomerLink href="/signup">구매회원가입</CustomerLink>
        <SellerLink href="/seller-signup">판매회원가입</SellerLink>

        <FormStyle onSubmit={onSubmit}>
          <Fieldset>
            <legend className="visually-hidden">구매회원가입</legend>
            <Label htmlFor="id">아이디</Label>
            <InputGroup>
              <Input
                id="id"
                type="text"
                {...register('id', {
                  required: '필수 정보입니다.',
                  pattern: {
                    value: idRule,
                    message:
                      '18자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
                  },
                  onChange: () => {
                    if (isUserIdValid) {
                      setIsUserIdValid(false);
                    }
                  },
                })}
              />
              <MsButton
                type="button"
                width={'122px'}
                background={colors.green}
                onClick={() => checkIdValid(setError, getValues)}
              >
                중복확인
              </MsButton>
            </InputGroup>
            {errors.id && <ErrorMsg>{errors.id.message}</ErrorMsg>}

            {errors.id === undefined && isUserIdValid && (
              <ErrorMsg color={colors.green}>{successMsg}</ErrorMsg>
            )}

            <Label htmlFor="password">비밀번호</Label>
            <InputPassword>
              <Input
                id="password"
                type="password"
                background={checkIcon}
                {...register('password', {
                  required: '필수 정보입니다.',
                  pattern: {
                    value: pwRule,
                    message: '8자 이상, 영소문자를 포함해 작성해주세요.',
                  },
                  onChange: () => {
                    checkPw(getValues);
                  },
                })}
              />
            </InputPassword>
            {errors.password && <ErrorMsg>{errors.password.message}</ErrorMsg>}

            <Label htmlFor="password2">비밀번호 재확인</Label>
            <InputPassword>
              <Input
                id="password2"
                type="password"
                background={checkRepeatIcon}
                {...register('password2', {
                  required: '필수 정보입니다.',
                  onChange: () => {
                    checkPWSame(setError, getValues);
                  },
                })}
              />
            </InputPassword>
            {errors.password2 && (
              <ErrorMsg>{errors.password2.message}</ErrorMsg>
            )}
            {errors.password2 === undefined && isPasswordValid && (
              <ErrorMsg color={msgColor}>{pwMsg}</ErrorMsg>
            )}

            <Label htmlFor="name">이름</Label>
            <InputGroup>
              <Input
                id="name"
                type="text"
                {...register('name', {
                  required: '필수 정보입니다.',
                })}
              />
            </InputGroup>
            {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}

            <PhoneForm register={register} />

            <MdButton
              type="submit"
              width={'100%'}
              margin={'34px 0 0'}
              background={btnColor}
              disabled={isSubmitting}
            >
              가입하기
            </MdButton>
          </Fieldset>
        </FormStyle>
      </Section>
    </>
  );
}
export default SignupForm;
