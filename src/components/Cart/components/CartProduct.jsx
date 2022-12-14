import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Amount from '../../Common/Amount';
import { SmPrice, MdPrice } from '../../../styles/modules/Price';
import { MsButton } from '../../../styles/modules/_Button';

import checkIcon from '../../../assets/icons/check-elip.svg';
import DeleteIcon from '../../../assets/icons/icon-delete.svg';
import emptyImage from '../../../assets/images/empty_image.png';

import { colors } from '../../../styles/constants/colors';
import {
  Tr,
  ImgDelete,
  ProductImg,
  WrapperInfoLink,
  WrapperInfo,
  ProductName,
  WrapperPrice,
} from '../../../styles/components/Cart/CartProduct.style';

function CartProduct(props) {
  const { counter } = props;
  return (
    <>
      <Tr>
        <td>
          <div>
            <img src={checkIcon} alt="상품선택" />
          </div>
          <div>
            <WrapperInfo>
              <Link to="#">
                <ProductImg src={emptyImage} alt="상품 이미지" />
              </Link>
              <div>
                <WrapperInfoLink href="">
                  <span>회사명</span>
                  <ProductName>딥러닝 개발자 무릎 담요</ProductName>

                  <SmPrice>50,000원</SmPrice>
                  <span>택배배송 / 무료배송</span>
                </WrapperInfoLink>
              </div>
            </WrapperInfo>
          </div>

          <div>
            <Amount counter={counter} />
          </div>

          <WrapperPrice>
            <MdPrice color={`${colors.red}`} margin={'0 auto'}>
              17,500원
            </MdPrice>
            <MsButton
              type="button"
              href="/:productid/order"
              background={`${colors.green}`}
              width="130px"
            >
              주문하기
            </MsButton>
          </WrapperPrice>
          <button type="button">
            <ImgDelete src={DeleteIcon} alt="삭제" />
          </button>
        </td>
      </Tr>
    </>
  );
}

export default CartProduct;
