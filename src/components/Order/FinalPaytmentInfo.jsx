import React from 'react';
import checkbox from '../../assets/icons/check-box.svg';

function FinalPaytmentInfo() {
    return (
        <section>
            <h2>최종결제 정보</h2>
            <ol>
                <li>
                    <strong>- 상품금액</strong>
                    <strong>
                        46,500
                        <span>원</span>
                    </strong>
                </li>
                <li>
                    <strong>- 할인금액</strong>
                    <strong>
                        0<span>원</span>
                    </strong>
                </li>
                <li>
                    <strong>- 배송비</strong>
                    <strong>
                        0<span>원</span>
                    </strong>
                </li>
                <li>
                    <strong>- 결제금액</strong>
                    <strong>46,500원</strong>
                </li>
            </ol>
            <div>
                <div>
                    <img src={checkbox} alt="" />
                    <span>
                        주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.
                    </span>
                </div>
                <button type="submit">주문하기</button>
            </div>
        </section>
    );
}

export default FinalPaytmentInfo;
