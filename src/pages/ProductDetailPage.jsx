import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Amount from '../styles/modules/Amount';

import { colors } from '../styles/constants/colors';

import { L_Price, L_Unit } from '../styles/modules/Price';
import { MDButton } from '../styles/modules/_Button';
import {
    Container,
    SectionProduct,
    ImageBox,
    WrapperInfo,
    Span,
    ProductName,
    DeliveryText,
    WrapperOrder,
    WrapperAmount,
    WrapperTotalCount,
    Count,
    Slide,
    WrapperButton,
    TotalAcount,
    TotalCount,
    WrapperMoney,
    SectionDetailInfo,
    TabButton,
} from '../styles/pages/ProductDetail.style';

function ProductDetail() {
    return (
        <>
            <Header />
            <Container>
                <SectionProduct>
                    <h1 className="visually-hidden">상품 구매 정보</h1>
                    <ImageBox></ImageBox>
                    <WrapperInfo>
                        <section>
                            <h2 className="visually-hidden">제품명</h2>
                            <Span>회사명</Span>
                            <ProductName>딥러닝 개발자 무릎 담요</ProductName>
                            <div>
                                <L_Price>17,500</L_Price>
                                <L_Unit>원</L_Unit>
                            </div>
                        </section>

                        <WrapperOrder>
                            <div>
                                <DeliveryText>택배배송 / 무료배송</DeliveryText>
                                <WrapperAmount>
                                    <Amount />
                                </WrapperAmount>
                            </div>
                            <div>
                                <WrapperTotalCount>
                                    <TotalAcount>총 상품 금액</TotalAcount>
                                    <WrapperMoney>
                                        <TotalCount>
                                            총 수량 <Count>1 </Count>개
                                        </TotalCount>
                                        <Slide>|</Slide>
                                        <L_Price color={`${colors.green}`}>
                                            17,500
                                        </L_Price>
                                        <L_Unit
                                            color={`${colors.green}`}
                                            margin={'6px 0 0 3px'}
                                        >
                                            원
                                        </L_Unit>
                                    </WrapperMoney>
                                </WrapperTotalCount>
                                <WrapperButton>
                                    <Link to="/:username/order">
                                        <MDButton
                                            width={'416px'}
                                            background={`${colors.green}`}
                                        >
                                            바로구매
                                        </MDButton>
                                    </Link>
                                    <Link to="/:username/cart">
                                        <MDButton
                                            width={'200px'}
                                            background={`${colors.dark}`}
                                        >
                                            장바구니
                                        </MDButton>
                                    </Link>
                                </WrapperButton>
                            </div>
                        </WrapperOrder>
                    </WrapperInfo>
                </SectionProduct>

                <SectionDetailInfo>
                    <h2 className="visually-hidden">상품 상세 정보</h2>
                    <TabButton type="button">버튼</TabButton>
                    <TabButton type="button">리뷰</TabButton>
                    <TabButton type="button">Q&A</TabButton>
                    <TabButton type="button">반품/교환</TabButton>
                </SectionDetailInfo>
            </Container>
        </>
    );
}

export default ProductDetail;
