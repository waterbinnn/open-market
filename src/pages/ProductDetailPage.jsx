import React from 'react';
import Amount from '../styles/modules/Amount';

function ProductDetail() {
    return (
        <>
            <article>
                <h1 className="visually-hidden">상품 구매 정보</h1>
                <img src="" alt="" />
                <section>
                    <h2 className="visually-hidden">제품명</h2>
                    <span>회사명</span>
                    <p>딥러닝 개발자 무릎 담요</p>
                    <strong>
                        17,500 <span>원</span>
                    </strong>
                </section>
                <section>
                    <h2>택배배송 / 무료배송</h2>
                    <Amount />
                </section>
                <section>
                    <h2>총 상품 금액</h2>
                    <span>
                        총 수량 <strong>1</strong>개
                    </span>
                    <span>|</span>
                    <strong>
                        17,500 <span>원</span>
                    </strong>
                    <button>바로구매</button>
                    <button>장바구니</button>
                </section>
            </article>

            <section>
                <h2 className="visually-hidden">상품 상세 정보</h2>
                <button type="button">버튼</button>
                <button type="button">리뷰</button>
                <button type="button">Q&A</button>
                <button type="button">반품/교환정보</button>
            </section>
        </>
    );
}

export default ProductDetail;
