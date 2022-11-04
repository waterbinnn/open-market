import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../axiosInstance';
import { useSignup } from '../components/User/hooks/useSignup';
import { setUser } from '../user-storage';

import checkOffIcon from '../assets/icons/icon-check-off.svg';

export const useAuth = () => {
  const [isSignupErr, setIsSignupErr] = useState(false);

  const navigate = useNavigate();

  const { setIsAllowed, setCheckRepeatIcon, setPwMsg } = useSignup;

  const login = async (setError, data, login_type, setFocus, resetField) => {
    const reqData = {
      username: data.id,
      password: data.password,
      login_type: login_type,
    };
    console.log(reqData);
    try {
      const { data: resData } = await axiosInstance.post(
        'accounts/login/',
        reqData
      );
      if (resData) {
        setUser(resData);
        navigate('/');
        location.reload();
      }
    } catch (error) {
      if (error) {
        if (error.response.status === 401) {
          setFocus('password');
          resetField('password');
          setError('password', {
            type: 'loginError',
            message: '아이디 또는 비밀번호가 일치하지 않습니다.',
          });
        } else {
          console.error(error);
        }
      }
    }
  };

  const signUp = async (data, resetField, setFocus) => {
    //휴대폰번호
    const phoneNumber =
      data.firstPhoneNum + data.middlePhoneNum + data.lastPhoneNum;

    const reqData = {
      username: data.id,
      password: data.password,
      password2: data.password2,
      phone_number: phoneNumber,
      name: data.name,
    };

    try {
      const { data: resData } = await axiosInstance.post(
        'accounts/signup/',
        reqData
      );
      if (resData) {
        console.log(resData);
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      setIsSignupErr(false);
      if ('password' in err.response.data) {
        alert(err.response.data.password[0]);
        setFocus('password');
        resetField('password');
        resetField('password2');
        setCheckRepeatIcon(checkOffIcon);
        setPwMsg('');
        setIsAllowed(true);
      }
      if ('phone_number' in err.response.data) {
        alert(err.response.data.phone_number[0]);
      }
    }
  };

  return { login, signUp };
};
