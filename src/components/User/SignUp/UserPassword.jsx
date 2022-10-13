import { useState } from 'react';

import checkOffIcon from '../../../assets/icons/icon-check-off.svg';
import checkOnIcon from '../../../assets/icons/icon-check-on.svg';

import {
  Input,
  ErrorMsg,
  InputPassword,
  Label,
  IconCheck,
} from '../../../styles/components/Common/FormStyles.style';

import { colors } from '../../../styles/constants/colors';

//영문 , 패스워드 정규식
const passwordRule = /^[a-zA-Z](?=.{0,28}[0-9])[0-9a-zA-Z]{6,29}$/;

function UserPassword(props) {
  const {
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    isPasswordValid,
    setIsPasswordValid,
  } = props;

  const [passwordMsg, setPasswordMsg] = useState('');
  const [checkPasswordMsg, setCheckPasswordMsg] = useState('');
  const [checkPasswordMsgColor, setCheckPassworMsgColor] = useState(colors.red);
  const [checkIcon, setCheckIcon] = useState(checkOffIcon);
  const [checkRePwIcon, setCheckRePwIcon] = useState(checkOffIcon);
  const [isActive, setIsActive] = useState(true);

  // 비밀번호 검증
  function handleBlurPassword() {
    if (password.length > 7 && passwordRule.test(password)) {
      setPasswordMsg('');
      setCheckIcon(checkOnIcon);
      setIsActive(false);
    } else {
      setPasswordMsg('8자 이상, 영소문자를 포함해 작성해주세요');
      setCheckIcon(checkOffIcon);
      setCheckRePwIcon(checkOffIcon);
      setCheckPasswordMsg('');
      setIsActive(true);
    }
  }

  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    setRepeatPassword(e.target.value);
    if (passwordRule.test(password) && password === repeatPassword) {
      setCheckPasswordMsg('비밀번호가 일치합니다');
      setCheckRePwIcon(checkOnIcon);
      setCheckPassworMsgColor(colors.green);
      setIsPasswordValid(true);
    } else {
      setCheckPasswordMsg('비밀번호가 일치하지 않습니다');
      setCheckRePwIcon(checkOffIcon);
      setCheckPassworMsgColor(colors.red);
    }
  };

  return (
    <>
      <Label htmlFor="password">비밀번호</Label>
      <InputPassword>
        <Input
          type="password"
          minLength="8"
          maxLength="18"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={handleBlurPassword}
        />
        <IconCheck src={checkIcon} alt="" />
      </InputPassword>
      <ErrorMsg color={colors.red}>{passwordMsg}</ErrorMsg>

      <Label htmlFor="password">비밀번호 재확인</Label>
      <InputPassword>
        <Input
          type="password"
          minLength="8"
          maxLength="18"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          onBlur={checkPassword}
          disabled={isActive}
        />
        <IconCheck src={checkRePwIcon} alt="" />
      </InputPassword>
      <ErrorMsg color={checkPasswordMsgColor}>{checkPasswordMsg}</ErrorMsg>
    </>
  );
}

export default UserPassword;
