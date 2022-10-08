import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../auth/AuthContext';
import axios from 'axios';

export default async function getCartInfo() {
  const { token } = useContext(AuthContext);
  const baseUrl = 'https://openmarket.weniv.co.kr';
  const [cartList, setCartList] = useState([]);
  try {
    const res = await axios.get(baseUrl + '/cart/', {
      headers: {
        Authorization: 'JWT ' + token,
      },
    });
    setCartList(res.data.results);

    console.log(res);
  } catch (err) {
    console.error(err);
  }
  return { cartList, setCartList, getCartInfo };
}
