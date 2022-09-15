import iconMinus from '../../assets/icons/icon-minus-line.svg';
import iconPlus from '../../assets/icons/icon-plus-line.svg';

import { colors } from '../../styles/constants/colors';
import {
    Td,
    Tfoot,
    Tr,
    Title,
    Icon,
} from '../../styles/components/CartTotalPrice.style';
import { MdPrice, MdUnit, LgPrice, LgUnit } from '../../styles/modules/Price';

function CartTotalPrice() {
    return (
        <Tfoot>
            <Tr>
                <Td>
                    <Title>총 상품금액</Title>
                    <div>
                        <MdPrice margin="2px">46,500</MdPrice>
                        <MdUnit>원</MdUnit>
                    </div>
                </Td>
                <Icon src={iconMinus} alt="빼기" />
                <Td>
                    <Title>상품 할인</Title>
                    <div>
                        <MdPrice margin="2px">0</MdPrice>
                        <MdUnit>원</MdUnit>
                    </div>
                </Td>
                <Icon src={iconPlus} alt="더하기" />
                <Td>
                    <Title>배송비</Title>
                    <div>
                        <MdPrice margin="2px">0</MdPrice>
                        <MdUnit>원</MdUnit>
                    </div>
                </Td>
                <Td>
                    <Title>결제예정금액</Title>
                    <div>
                        <LgPrice color={`${colors.red}`}>46,500</LgPrice>
                        <LgUnit color={`${colors.red}`}>원</LgUnit>
                    </div>
                </Td>
            </Tr>
        </Tfoot>
    );
}

export default CartTotalPrice;
