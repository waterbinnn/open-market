import { useState } from 'react';
import checkbox from '../../assets/icons/check-box.svg';
import checkFillBox from '../../assets/icons/check-fill-box.svg';
import { LgButton } from '../../styles/modules/_Button';

import {
    H2,
    Ol,
    Title,
    ConfirmText,
    Price,
    PriceText,
    OrderPrice,
    WrapperInfo,
    WrapperButton,
} from '../../styles/components/Order/FinalPaymentInfo.style';

function FinalPaytmentInfo() {
    const [check, SetCheck] = useState(checkbox);
    const [orderButton, SetOrderButton] = useState('disabled');
    const handleCheckBox = (e) => {
        if (e.target.src.includes('fill')) {
            SetCheck(checkbox);
            SetOrderButton('#C4C4C4');
        } else {
            SetCheck(checkFillBox);
            SetOrderButton('#21BF48');
        }
    };

    return (
        <section>
            <H2>최종결제 정보</H2>
            <WrapperInfo>
                <Ol>
                    <li>
                        <Title>- 상품금액</Title>
                        <Price>
                            46,500
                            <span>원</span>
                        </Price>
                    </li>
                    <li>
                        <Title>- 할인금액</Title>
                        <Price>
                            0<span>원</span>
                        </Price>
                    </li>
                    <li>
                        <Title>- 배송비</Title>
                        <Price>
                            0<span>원</span>
                        </Price>
                    </li>
                    <li>
                        <PriceText>- 결제금액</PriceText>
                        <OrderPrice>46,500원</OrderPrice>
                    </li>
                </Ol>
                <WrapperButton>
                    <div>
                        <img
                            src={check}
                            alt="체크박스"
                            onClick={handleCheckBox}
                        />
                        <ConfirmText>
                            주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                        </ConfirmText>
                    </div>
                    <LgButton background={orderButton} type="submit">
                        결제하기
                    </LgButton>
                </WrapperButton>
            </WrapperInfo>
        </section>
    );
}

export default FinalPaytmentInfo;
