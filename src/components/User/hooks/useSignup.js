import { useState } from 'react';
import { axiosInstance } from '../../../axiosInstance';
import { colors } from '../../../styles/constants/colors';
import { idRule, pwRule } from '../../../auth/reqExp';

import checkOffIcon from '../../../assets/icons/icon-check-off.svg';
import checkOnIcon from '../../../assets/icons/icon-check-on.svg';

export const useSignup = () => {
  const [isUserIdValid, setIsUserIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [pwMsg, setPwMsg] = useState('');
  const [msgColor, setMsgColor] = useState(colors.red);
  const [checkIcon, setCheckIcon] = useState(checkOffIcon);
  const [checkRepeatIcon, setCheckRepeatIcon] = useState(checkOffIcon);
  const [isCheckedPw, setIsCheckedPw] = useState(false);
  const [isAllowed, setIsAllowed] = useState(true);

  //아이디 중복체크
  const checkIdValid = async (setError, getValues) => {
    if (getValues('id').length > 5) {
      try {
        const { data } = await axiosInstance.post(
          'accounts/signup/valid/username/',
          {
            username: getValues('id'),
          }
        );
        setIsUserIdValid(true);
        setSuccessMsg(data.Success);
      } catch (error) {
        console.error(error);
        setIsUserIdValid(false);
        if (error) {
          setError('id', {
            type: 'idError',
            message: error.response.data.FAIL_Message,
          });
        }
      }
    } else {
      setIsUserIdValid(false);
      setError('id', {
        type: 'idError',
        message: '6-16자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.',
      });
    }
  };

  //비밀번호 유효성 검사
  const checkPw = (getValues, reset) => {
    if (pwRule.test(getValues('password')) === true) {
      setCheckIcon(checkOnIcon);
      setIsCheckedPw(true);
      setIsAllowed(false);
    } else {
      setCheckIcon(checkOffIcon);
      setCheckRepeatIcon(checkOffIcon);
      setIsCheckedPw(false);
      setIsAllowed(true);
    }
  };

  //비밀번호 일치 검사
  const checkPWSame = (setError, getValues, resetField) => {
    if (getValues('password') === getValues('password2')) {
      setCheckRepeatIcon(checkOnIcon);
      setIsPasswordValid(true);
      setMsgColor(colors.green);
      setPwMsg('비밀번호가 일치합니다.');
    } else {
      setCheckRepeatIcon(checkOffIcon);
      setPwMsg('비밀번호가 일치하지 않습니다.');
      setMsgColor(colors.red);
    }
  };

  return {
    checkIdValid,
    isUserIdValid,
    setIsUserIdValid,
    isPasswordValid,
    isCheckedPw,
    successMsg,
    setSuccessMsg,
    pwMsg,
    msgColor,
    setMsgColor,
    checkPw,
    checkPWSame,
    checkIcon,
    checkRepeatIcon,
    isAllowed,
    setIsAllowed,
  };
};
