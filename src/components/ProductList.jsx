/** @jsxImportSource @emotion/react */
import { H2VisuallyHidden } from '../styles/modules/styles';
import { SectionItem, Ul } from '../styles/components/Product.style';
import ProductItem from './ProductItem';

function ProductList() {
    return (
        <SectionItem>
            <H2VisuallyHidden>상품목록</H2VisuallyHidden>
            <Ul>
                <ProductItem />
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
