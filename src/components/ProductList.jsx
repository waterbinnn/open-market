/** @jsxImportSource @emotion/react */
import { SectionItem, Ul } from '../styles/components/Product.style';
import ProductItem from './ProductItem';

function ProductList() {
    return (
        <SectionItem>
            <h2 className="visually-hidden">상품목록</h2>
            <Ul>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </Ul>
        </SectionItem>
    );
}

export default ProductList;
