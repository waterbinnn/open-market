import { useState } from 'react';
import axios from 'axios';

import { baseUrl } from '../../../axiosInstance/constants';

import {
  Input,
  ErrorMsg,
  InputGroup,
  Label,
} from '../../../styles/components/Common/FormStyles.style';
import { MsButton } from '../../../styles/modules/_Button';
import { colors } from '../../../styles/constants/colors';

//아이디 영문 체크
const checkEn = /^[a-zA-Z0-9]*$/;

function Username(props) {
  const { username, setUsername, setIsUsernameValid } = props;

  const [msg, setMsg] = useState('');
  const [msgColor, setMsgColor] = useState(colors.green);

  //아이디 중복확인
  async function checkIdVaildate(e) {
    e.preventDefault();
    const userData = { username: username };

    if (username.length === 0) {
      setMsg('아이디를 입력해 주세요.');
      setMsgColor(colors.red);
    } else if (username.length > 5 && checkEn.test(username)) {
      try {
        const res = await axios.post(
          baseUrl + '/accounts/signup/valid/username/',
          userData
        );
        if (res.status === 202) {
          setMsg(res.data.Success);
          setMsgColor(colors.green);
          setIsUsernameValid(true);
        }
      } catch (err) {
        setMsg(err.response.data.FAIL_Message);
        setMsgColor(colors.red);
        setIsUsernameValid(false);
      }
    } else {
      setMsg('영문 6~16자 이내로 입력해 주세요.');
      setMsgColor(colors.red);
      setIsUsernameValid(false);
    }
  }

  const handleInput = (e) => {
    setUsername(e.target.value);
    if (e.target.value.length === 0) {
      setMsg('아이디를 입력해 주세요.');
      setMsgColor(colors.red);
      setIsUsernameValid(false);
    } else if (username.length > 5 && checkEn.test(username)) {
      setMsg('');
      setIsUsernameValid(false);
    } else {
      setMsg('영문 6~16자 이내로 입력해 주세요.');
      setMsgColor(colors.red);
    }
  };

  return (
    <>
      <Label htmlFor="username">아이디</Label>
      <InputGroup>
        <Input
          type="text"
          value={username}
          minLength={6}
          maxLength={16}
          onChange={handleInput}
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
    </>
  );
}

export default Username;
