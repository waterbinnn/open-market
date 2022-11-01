import {
  InputGroup,
  Label,
  Input,
} from '../../../styles/components/Common/FormStyles.style';

import { ErrorMsg } from '../../../styles/components/User/LoginForm.style';
import { useForm } from 'react-hook-form';

import { MsButton } from '../../../styles/modules/_Button';
import { colors } from '../../../styles/constants/colors';

export const TextField = ({
  text,
  name,
  inputType = 'text',
  required,
  pattern,
  message,
  errorMsg,
  onClick,
}) => {
  const { register } = useForm({ mode: 'onChange' });

  return (
    <>
      {name !== 'id' && (
        <>
          <Label htmlFor={name}>{text}</Label>
          <InputGroup>
            <Input
              type={inputType}
              {...register(name, {
                required: { required },
                pattern: { pattern, message },
              })}
            />
            {errorMsg && <ErrorMsg color={colors.red}>{errorMsg}</ErrorMsg>}
          </InputGroup>
        </>
      )}

      {name === 'id' && (
        <>
          <Label htmlFor={name}>{text}</Label>
          <InputGroup>
            <Input
              type={inputType}
              {...register(name, {
                required: { required },
                pattern: { pattern, message },
              })}
            />
            <MsButton
              type="button"
              width={'122px'}
              background={colors.green}
              onClick={onClick}
            >
              중복확인
            </MsButton>
          </InputGroup>
          {errorMsg && <ErrorMsg color={colors.red}>{errorMsg}</ErrorMsg>}
        </>
      )}
    </>
  );
};

export const PhoneField = () => {
  const { register } = useForm({ mode: 'onChange' });

  return (
    <>
      <Label htmlFor={'phoneNumber'}>휴대폰번호</Label>
      <InputGroup>
        <Input type="number" {...register('firstNum')} />
        <Input type="number" {...register('middleNum')} />
        <Input type="number" {...register('lastNum')} />
      </InputGroup>
      {/* {errorMsg && <ErrorMsg color={msgColor}>{errorMsg}</ErrorMsg>} */}
    </>
  );
};
