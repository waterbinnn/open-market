import React from 'react';
import { Link } from 'react-router-dom';

import emptyImage from '../../../assets/images/empty_image.png';
import { colors } from '../../../styles/constants/colors';
import { SmPrice } from '../../../styles/modules/Price';
import {
  Tr,
  ProductImg,
  ProductName,
  WrapperInfoLink,
  WrapperInfo,
  WrapperDiscount,
  WrapperTotal,
  WrapperDeliver,
  Discount,
} from '../../../styles/components/Order/OrderProduct.style';

function OrderProduct() {
  return (
    <>
      <Tr>
        <td>
          <div>
            <WrapperInfo>
              <Link to="#">
                <ProductImg src={emptyImage} alt="상품 이미지" />
              </Link>
              <div>
                <WrapperInfoLink href="#">
                  <span>회사명</span>
                  <ProductName>딥러닝 개발자 무릎 담요</ProductName>

                  <span>수량 : 1개</span>
                </WrapperInfoLink>
              </div>
            </WrapperInfo>
          </div>
          <WrapperDiscount>
            <Discount>-</Discount>
          </WrapperDiscount>
          <WrapperDeliver>
            <SmPrice fontWeight="400" color={`${colors.dark}`}>
              무료배송
            </SmPrice>
          </WrapperDeliver>
          <WrapperTotal>
            <SmPrice>17,500원</SmPrice>
          </WrapperTotal>
        </td>
      </Tr>
    </>
  );
}

export default OrderProduct;
