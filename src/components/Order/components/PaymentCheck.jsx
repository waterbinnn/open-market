import React from 'react';
import {
  Section,
  H2,
} from '../../../styles/components/Order/PaymentCheck.style';

function PaymentCheck() {
  return (
    <Section>
      <H2>결제수단</H2>
      <div>
        <input type="radio" name="payment" id="card" value="card" />
        <label htmlFor="card">신용 /체크카드</label>

        <input type="radio" name="payment" id="send" value="send" />
        <label htmlFor="send">무통장입금</label>

        <input type="radio" name="payment" id="phone" value="phone" />
        <label htmlFor="phone">휴대폰 결제</label>

        <input type="radio" name="payment" id="naver" value="naver" />
        <label htmlFor="naver">네이버페이</label>

        <input type="radio" name="payment" id="kakao" value="kakao" />
        <label htmlFor="kakao">카카오페이</label>
      </div>
    </Section>
  );
}

export default PaymentCheck;
