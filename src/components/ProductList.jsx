/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SectionItem, Ul } from '../styles/components/Product.style';
import ProductItem from './ProductItem';

function ProductList() {
    const baseUrl = 'https://openmarket.weniv.co.kr';
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        async function getProduct() {
            try {
                const res = await axios.get(baseUrl + '/products/');
                setProductList(res.data.results);
            } catch (err) {
                console.error(err);
            }
        }
        getProduct();
    }, []);

    return (
        <SectionItem>
            <h2 className="visually-hidden">상품목록</h2>
            <Ul>
                <ProductItem productList={productList} />
            </Ul>
        </SectionItem>
    );
}

export default ProductList;
