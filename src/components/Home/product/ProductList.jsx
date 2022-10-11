import { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import { SectionItem, Ul } from '../../../styles/components/Home/Product.style';
import ProductItem from './ProductItem';

function ProductList() {
  const products = useProducts();

  return (
    <SectionItem>
      <h2 className="visually-hidden">상품목록</h2>
      <Ul>
        {products.map((productData) => (
          <ProductItem key={productData.product_id} productData={productData} />
        ))}
      </Ul>
    </SectionItem>
  );
}

export default ProductList;
