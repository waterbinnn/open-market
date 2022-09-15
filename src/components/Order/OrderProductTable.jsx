import React from 'react';
import OrderProduct from './OrderProduct';
import {
    OrderTable,
    Thead,
    Tbody,
    Tfoot,
    TotalPrice,
} from '../../styles/components/Order/OrderProductTable.style';
import { MdPrice } from '../../styles/modules/Price';
import { colors } from '../../styles/constants/colors';

function OrderProductTable() {
    return (
        <>
            <OrderTable>
                <caption className="visually-hidden">
                    상품정보, 할인, 배송비, 주문금액으로 이루어져 있는 주문,
                    결제 목록 표
                </caption>
                <Thead>
                    <tr>
                        <th>상품정보</th>
                        <th>할인</th>
                        <th>배송비</th>
                        <th>주문금액</th>
                    </tr>
                </Thead>
                <Tbody>
                    <OrderProduct />
                    <OrderProduct />
                </Tbody>
                <Tfoot>
                    <tr>
                        <TotalPrice>총 주문금액</TotalPrice>
                        <td>
                            <MdPrice color={`${colors.red}`}>46,500 원</MdPrice>
                        </td>
                    </tr>
                </Tfoot>
            </OrderTable>
        </>
    );
}

export default OrderProductTable;
