import { useNavigate } from 'react-router-dom';
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

  const signUp = async (setError, data, type, setFocus, resetField) => {
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
        // setBtnColor(colors.green);
        navigate('/');
      }
      console.log(resData);
    } catch (err) {
      console.error(err);
      setBtnColor(colors.grey);
    }
  };

  return { login, signUp };
};
