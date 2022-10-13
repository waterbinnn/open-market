import { useState } from 'react';

import Username from './Username';

import {
  Fieldset,
  Input,
  Label,
} from '../../../styles/components/Common/FormStyles.style';
import UserPassword from './UserPassword';
import UserPhone from './UserPhone';

function UserAccount(props) {
  const {
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    repeatPassword,
    setRepeatPassword,
    firstPhoneNum,
    setFirstPhoneNum,
    middlePhoneNum,
    setMiddlePhoneNum,
    lastPhoneNum,
    setLastPhoneNum,
    isName,
    setIsName,
    isPasswordValid,
    setIsPasswordValid,
    isUsernameValid,
    setIsUsernameValid,
    isPhone,
    setIsPhone,
  } = props;

  const handleName = (e) => {
    setName(e.target.value);
    setIsName(true);
  };
  return (
    <>
      <Fieldset>
        <legend className="visually-hidden">회원가입</legend>
        <Username
          username={username}
          setUsername={setUsername}
          isUsernameValid={isUsernameValid}
          setIsUsernameValid={setIsUsernameValid}
        />
        <UserPassword
          password={password}
          setPassword={setPassword}
          repeatPassword={repeatPassword}
          setRepeatPassword={setRepeatPassword}
          isPasswordValid={isPasswordValid}
          setIsPasswordValid={setIsPasswordValid}
        />
        <Label htmlFor="name">이름</Label>
        <Input
          type="text"
          value={name}
          minLength={2}
          maxLength={10}
          onChange={handleName}
        />
        <UserPhone
          firstPhoneNum={firstPhoneNum}
          setFirstPhoneNum={setFirstPhoneNum}
          middlePhoneNum={middlePhoneNum}
          setMiddlePhoneNum={setMiddlePhoneNum}
          lastPhoneNum={lastPhoneNum}
          setLastPhoneNum={setLastPhoneNum}
          isPhone={isPhone}
          setIsPhone={setIsPhone}
        />
      </Fieldset>
    </>
  );
}

export default UserAccount;
