import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { PhoneDropDown } from '../Common/DropDown';

import { SelectBtn } from '../../styles/components/User/SignupForm.style';
import {
  InputGroup,
  Label,
  Input,
} from '../../styles/components/Common/FormStyles.style';

export default function PhoneForm({ register }) {
  const { setValue } = useForm({ mode: 'onChange' });

  const [isDropDown, setIsDropDown] = useState(false);

  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDropDown(() => !isDropDown);
  };

  const handleFirstPhoneNum = (e) => {
    setValue('firstPhoneNum', e.target.value);
    e.currentTarget.previousElementSibling.textContent = e.target.value;
    setIsDropDown(false);
  };

  return (
    <>
      <Label htmlFor="phone">휴대폰번호</Label>
      <InputGroup>
        <SelectBtn
          type="button"
          value={'010'}
          onClick={handleDropDown}
          {...register('firstPhoneNum')}
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
          type="text"
          maxLength="4"
          name="middle"
          {...register('middlePhoneNum')}
        />
        <Input
          id="lastPhoneNum"
          type="text"
          maxLength="4"
          name="last"
          {...register('lastPhoneNum')}
        />
      </InputGroup>
    </>
  );
}
