import iconMinus from '../assets/icons/icon-minus-line.svg';
import iconPlus from '../assets/icons/icon-plus-line.svg';

import { colors } from '../styles/constants/colors';
import {
    Td,
    Tfoot,
    Tr,
    Title,
    Icon,
} from '../styles/components/CartTotalPrice.style';
import { M_Price, M_Unit, L_Price, L_Unit } from '../styles/modules/Price';

function CartTotalPrice() {
    return (
        <Tfoot>
            <Tr>
                <Td>
                    <Title>총 상품금액</Title>
                    <div>
                        <M_Price margin="2px">46,500</M_Price>
                        <M_Unit>원</M_Unit>
                    </div>
                </Td>
                <Icon src={iconMinus} alt="빼기" />
                <Td>
                    <Title>상품 할인</Title>
                    <div>
                        <M_Price margin="2px">0</M_Price>
                        <M_Unit>원</M_Unit>
                    </div>
                </Td>
                <Icon src={iconPlus} alt="더하기" />
                <Td>
                    <Title>배송비</Title>
                    <div>
                        <M_Price margin="2px">0</M_Price>
                        <M_Unit>원</M_Unit>
                    </div>
                </Td>
                <Td>
                    <Title>결제예정금액</Title>
                    <div>
                        <L_Price color={`${colors.red}`}>46,500</L_Price>
                        <L_Unit color={`${colors.red}`}>원</L_Unit>
                    </div>
                </Td>
            </Tr>
        </Tfoot>
    );
}

export default CartTotalPrice;
