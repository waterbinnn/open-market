import CartProduct from './CartProduct';
import CartTotalPrice from './CartTotalPrice';

import checkIcon from '../assets/icons/check-elip.svg';
import {
    CartTable,
    Thead,
    Tbody,
} from '../styles/components/CartProductTable.style';

function CartProductTable() {
    return (
        <>
            <CartTable>
                <caption className="visually-hidden">
                    상품정보, 판매가, 수량, 구매버튼으로 이루어져 있는 장바구니
                    목록 표{' '}
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
                    <CartProduct />
                    <CartProduct />
                </Tbody>
                <CartTotalPrice />
            </CartTable>
        </>
    );
}

export default CartProductTable;
