import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PhoneDropDown } from '../../Common/DropDown';

import { colors } from '../../../styles/constants/colors';
import { SelectBtn } from '../../../styles/components/User/SignupForm.style';
import {
  InputGroup,
  Label,
  Input,
  ErrorMsg,
} from '../../../styles/components/Common/FormStyles.style';

export default function PhoneForm({
  register,
  getValues,
  isPhone,
  setIsPhone,
}) {
  const { setValue } = useForm({ mode: 'onChange' });

  const [isDropDown, setIsDropDown] = useState(false);
  const [isErrorMsg, setIsErrorMsg] = useState('');

  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDropDown(() => !isDropDown);
  };

  const handleFirstPhoneNum = (e) => {
    setValue('firstPhoneNum', e.target.value);
    e.currentTarget.previousElementSibling.textContent = e.target.value;
    setIsDropDown(false);
  };

  //숫자 4자리 이상 안넘가게 제한 함수
  function maxLengthCheck(e) {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  }

  // 휴대폰 길이 10자리 이상인지 체크
  const checkPhoneLength = () => {
    const phoneNumber =
      getValues('firstPhoneNum') +
      getValues('middlePhoneNum') +
      getValues('lastPhoneNum');
    if (phoneNumber.length < 10) {
      setIsPhone(false);
      setIsErrorMsg('10자리 이상 입력해주세요');
    } else {
      setIsPhone(true);
    }
  };

  return (
    <>
      <Label htmlFor="phone">휴대폰번호</Label>
      <InputGroup>
        <SelectBtn
          type="button"
          value={'010'}
          {...register('firstPhoneNum')}
          onClick={handleDropDown}
        >
          <strong>010</strong>
        </SelectBtn>
        {isDropDown && (
          <PhoneDropDown
            isDropDown={isDropDown}
            handleClick={handleFirstPhoneNum}
          />
        )}
        <Input
          id="middlePhoneNum"
          type="number"
          minLength="3"
          maxLength="4"
          onInput={maxLengthCheck}
          name="middle"
          {...register('middlePhoneNum', {
            onBlur: () => {
              checkPhoneLength();
            },
          })}
        />

        <Input
          id="lastPhoneNum"
          onInput={maxLengthCheck}
          type="number"
          minLength="3"
          maxLength="4"
          name="last"
          {...register('lastPhoneNum', {
            onBlur: () => {
              checkPhoneLength();
            },
          })}
        />
      </InputGroup>

      {isPhone === false && (
        <ErrorMsg color={colors.red}>{isErrorMsg}</ErrorMsg>
      )}
    </>
  );
}
