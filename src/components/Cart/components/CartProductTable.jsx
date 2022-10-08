import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../../auth/AuthContext';

import CartProduct from './CartProduct';
import CartTotalPrice from './CartTotalPrice';

import checkIcon from '../../../assets/icons/check-elip.svg';
import {
  CartTable,
  Thead,
  Tbody,
} from '../../../styles/components/Cart/CartProductTable.style';

function CartProductTable(props) {
  const { token } = useContext(AuthContext);
  const baseUrl = 'https://openmarket.weniv.co.kr';
  const [cartList, setCartList] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    async function getCartInfo() {
      try {
        const res = await axios.get(baseUrl + '/cart/', {
          headers: {
            Authorization: 'JWT ' + token,
          },
        });
        setCartList(res.data.results);
        console.log(res.data.results);
      } catch (err) {
        console.error(err);
      }
    }
    getCartInfo();
  }, []);

  return (
    <>
      <CartTable>
        <caption className="visually-hidden">
          상품정보, 판매가, 수량, 구매버튼으로 이루어져 있는 장바구니 목록 표{' '}
        </caption>
        <Thead>
          <tr>
            <th>
              <img src={checkIcon} alt="" />
            </th>
            <th>상품정보</th>
            <th>수량</th>
            <th>상품금액</th>
          </tr>
        </Thead>
        <Tbody>
          {cartList &&
            cartList.map((item) => {
              return <CartProduct key={item.cart_item_id} counter={counter} />;
            })}
        </Tbody>
        <CartTotalPrice />
      </CartTable>
    </>
  );
}

export default CartProductTable;
