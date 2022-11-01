import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FieldValues,
  UseFormGetValues,
  UseFormSetError,
} from 'react-hook-form';

import { axiosInstance } from '../axiosInstance';
import { setUser } from '../user-storage';

export const useAuth = () => {
  const navigate = useNavigate();

  const login = async (setError, data, login_type, setFocus, resetField) => {
    const reqData = {
      username: data.id,
      password: data.pw,
      login_type: login_type,
    };

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
          setFocus('pw');
          resetField('pw');
          setError('pw', {
            type: 'loginError',
            message: '아이디 또는 비밀번호가 일치하지 않습니다.',
          });
        } else {
          console.error(error);
        }
      }
    }
  };
  return { login };
};
