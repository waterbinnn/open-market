import { useState } from 'react';

import upArrow from '../../../assets/icons/icon-up-arrow.svg';
import downArrow from '../../../assets/icons/icon-down-arrow.svg';

import {
  Input,
  InputGroup,
  Label,
} from '../../../styles/components/Common/FormStyles.style';

import { SelectBtn } from '../../../styles/components/User/SignupForm.style';

import { PhoneDropDown } from '../../../components/Common/DropDown';

function UserPhone(props) {
  const {
    firstPhoneNum,
    middlePhoneNum,
    lastPhoneNum,
    setFirstPhoneNum,
    setMiddlePhoneNum,
    setLastPhoneNum,
    isPhone,
    setIsPhone,
  } = props;

  const [isDropDown, setIsDropDown] = useState(false);
  const [phoneArrow, setPhoneArrow] = useState(downArrow);

  //휴대폰 번호 관련
  const handleDropDown = (e) => {
    e.preventDefault();
    setIsDropDown(() => !isDropDown);
    setPhoneArrow(upArrow);
    if (phoneArrow === upArrow) {
      setPhoneArrow(downArrow);
    }
  };

  const handleFirstPhoneNum = (e) => {
    setFirstPhoneNum(e.target.innerText);
    setPhoneArrow(downArrow);
    setIsDropDown(false);
  };

  const handlePhoneNum = (e) => {
    e.target.value = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
    if (e.target.name === 'middle') {
      setMiddlePhoneNum(e.target.value);
    } else {
      setLastPhoneNum(e.target.value);
    }
  };

  return (
    <>
      <Label htmlFor="phone">휴대폰번호</Label>
      <InputGroup>
        <SelectBtn type="button" onClick={handleDropDown}>
          <strong>{firstPhoneNum}</strong>
          <img src={phoneArrow} alt="화살표" />
        </SelectBtn>
        {isDropDown && (
          <PhoneDropDown
            isDropDown={isDropDown}
            handleClick={handleFirstPhoneNum}
          />
        )}
        <Input
          type="text"
          maxLength="4"
          value={middlePhoneNum}
          name="middle"
          onChange={handlePhoneNum}
        />
        <Input
          type="text"
          maxLength="4"
          value={lastPhoneNum}
          name="last"
          onChange={handlePhoneNum}
        />
      </InputGroup>
    </>
  );
}

export default UserPhone;
