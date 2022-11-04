import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useAuth } from '../../../auth/useAuth';
import { useSignup } from '../hooks/useSignup';

import { idRule, pwRule } from '../../../auth/reqExp';
import PhoneForm from './phoneForm';

//Styles
import { colors } from '../../../styles/constants/colors';
import { MsButton } from '../../../styles/modules/_Button';
import { MdButton } from '../../../styles/modules/_Button';

import checkBox from '../../../assets/icons/check-box.svg';
import checkFillBox from '../../../assets/icons/check-fill-box.svg';

import { ErrorMsg } from '../../../styles/components/User/LoginForm.style';
import {
  InputGroup,
  Label,
  Input,
  InputPassword,
  FormStyle,
  CheckGroup,
  Fieldset,
} from '../../../styles/components/Common/FormStyles.style';

function SignupForm() {
  const [checkedBox, setCheckedBox] = useState(checkBox);
  const [isChecked, setIsChecked] = useState(false);
  const [btnColor, setBtnColor] = useState(colors.disabled);
  const [joinType, setJoinType] = useState('BUYER');
  const [isActive, setIsActive] = useState(true);
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  const {
    register,
    getValues,
    setError,
    setFocus,
    resetField,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const {
    checkIdValid,
    isUserIdValid,
    setIsUserIdValid,
    isPasswordValid,
    isCheckedPw,
    successMsg,
    pwMsg,
    checkPw,
    checkPWSame,
    checkIcon,
    checkRepeatIcon,
    msgColor,
    isAllowed,
  } = useSignup();

  useEffect(() => {
    setFocus('id');
  }, [setFocus]);

  //체크박스
  const handleCheckBox = (e) => {
    if (e.target.src.includes('fill')) {
      setCheckedBox(checkBox);
      setIsChecked(false);
    } else {
      setCheckedBox(checkFillBox);
      setIsChecked(true);
    }
  };
  const { signUp } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signUp(data, setError, joinType, resetField, setFocus);
    console.log(data);
  });

  useEffect(() => {
    if (
      isUserIdValid &&
      isPasswordValid &&
      isChecked &&
      isCheckedPw &&
      isName &&
      isPhone === true
    ) {
      setBtnColor(colors.green);
      setIsActive(false);
    } else {
      setBtnColor(colors.disabled);
      setIsActive(true);
    }
  }, [isUserIdValid, isPasswordValid, isChecked, isCheckedPw, isName, isPhone]);

  return (
    <>
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
                    '6-16자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
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
              maxLength={'18'}
              background={checkIcon}
              {...register('password', {
                required: '필수 정보입니다.',
                pattern: {
                  value: pwRule,
                  message: '8자 이상, 영소문자를 포함해 작성해주세요.',
                },
                onChange: () => {
                  checkPw(getValues, reset);
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
              maxLength={'18'}
              background={checkRepeatIcon}
              disabled={isAllowed}
              {...register('password2', {
                required: '필수 정보입니다.',
                onChange: () => {
                  checkPWSame(setError, getValues, resetField);
                },
              })}
            />
          </InputPassword>
          {errors.password2 && <ErrorMsg>{errors.password2.message}</ErrorMsg>}
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
                onBlur: () => {
                  setIsName(true);
                },
              })}
            />
          </InputGroup>
          {errors.name && <ErrorMsg>{errors.name.message}</ErrorMsg>}

          <PhoneForm
            register={register}
            getValues={getValues}
            isPhone={isPhone}
            setIsPhone={setIsPhone}
          />

          <CheckGroup>
            <button type="button" onClick={handleCheckBox}>
              <img src={checkedBox} alt="동의 여부 체크박스" />
            </button>
            <p>
              호두샵의 <strong>이용약관 </strong> 및{' '}
              <strong>개인정보처리방침에</strong> 대한 내용을 확인하였고
              동의합니다.
            </p>
          </CheckGroup>

          <MdButton
            type="submit"
            width={'100%'}
            margin={'34px 0 0'}
            background={btnColor}
            disabled={isActive}
          >
            가입하기
          </MdButton>
        </Fieldset>
      </FormStyle>
    </>
  );
}

export default SignupForm;
