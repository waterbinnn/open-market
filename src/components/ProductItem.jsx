import emptyImage from '../assets/images/empty_image.png';

import {
    ProductLink,
    Image,
    Span,
    P,
} from '../styles/components/Product.style';
import { M_Price, M_Unit } from '../styles/modules/Price';

function ProductItem() {
    return (
        <>
            <ProductLink href="/:productid">
                <Image src={emptyImage} alt="" />
                <Span>우당탕탕 라이캣의 실험실</Span>
                <P>Hack Your Life 개발자 노트북 파우치</P>
                <div>
                    <M_Price>29,000</M_Price>
                    <M_Unit>원</M_Unit>
                </div>
            </ProductLink>
        </>
    );
}

export default ProductItem;
