import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { baseUrl } from '../../axiosInstance/constants';

import Header from '../Common/Header';
import Footer from '../Common/Footer';
import Amount from '../Common/Amount';

import { colors } from '../../styles/constants/colors';

import { LgPrice, LgUnit } from '../../styles/modules/Price';
import { MdButton } from '../../styles/modules/_Button';
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
} from '../../styles/components/ProductDetail/ProductDetail.style';

function ProductDetail() {
  const params = useParams();
  const postId = params.postid.slice(1, params.postid.length);
  const [detail, setDetail] = useState([]);
  const [counter, setCounter] = useState(0);
  const [itemStock, setItemStock] = useState(0);
  const [shippingFee, setShippingFee] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    async function getProductDetail() {
      try {
        const res = await axios.get(baseUrl + '/products/' + postId);
        setDetail(res.data);
        setItemStock(res.data.stock);
        setShippingFee(res.data.shipping_fee);
        console.log(res);
      } catch (err) {
        navigate('*');
      }
    }
    getProductDetail();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <SectionProduct>
          <h1 className="visually-hidden">상품 구매 정보</h1>
          <ImageBox>
            <img src={detail.image} alt="상품이미지" />
          </ImageBox>
          <WrapperInfo>
            <section>
              <h2 className="visually-hidden">{detail.product_name}이미지</h2>
              <Span>{detail.store_name}</Span>
              <ProductName>{detail.product_name}</ProductName>
              <div>
                <LgPrice>
                  {typeof detail.price === 'number'
                    ? `${detail.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                    : `-`}
                </LgPrice>
                <LgUnit>원</LgUnit>
              </div>
            </section>

            <WrapperOrder>
              <div>
                {shippingFee === 0 ? (
                  <DeliveryText>무료배송</DeliveryText>
                ) : (
                  <DeliveryText>
                    택배배송 /{' '}
                    {typeof detail.price === 'number' &&
                      `${shippingFee
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
                  </DeliveryText>
                )}

                <WrapperAmount>
                  <Amount
                    counter={counter}
                    setCounter={setCounter}
                    stock={itemStock}
                  />
                </WrapperAmount>
              </div>
              <div>
                <WrapperTotalCount>
                  <TotalAcount>총 상품 금액</TotalAcount>
                  <WrapperMoney>
                    <TotalCount>
                      총 수량 <Count>{counter}</Count> 개
                    </TotalCount>
                    <Slide>|</Slide>
                    <LgPrice color={`${colors.green}`}>
                      {(counter * detail.price)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    </LgPrice>
                    <LgUnit color={`${colors.green}`} margin={'6px 0 0 3px'}>
                      원
                    </LgUnit>
                  </WrapperMoney>
                </WrapperTotalCount>
                <WrapperButton>
                  <Link to="/:userid/order">
                    <MdButton width={'416px'} background={`${colors.green}`}>
                      바로구매
                    </MdButton>
                  </Link>
                  <Link to="/:userid/cart">
                    <MdButton width={'200px'} background={`${colors.dark}`}>
                      장바구니
                    </MdButton>
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

      <Footer />
    </>
  );
}

export default ProductDetail;
