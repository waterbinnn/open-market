import emptyImage from '../assets/images/empty_image.png';

import {
    ProductLink,
    Image,
    Span,
    P,
} from '../styles/components/Product.style';
import { MdPrice, MdUnit } from '../styles/modules/Price';

function ProductItem() {
    return (
        <>
            <ProductLink href="/:productid">
                <Image src={emptyImage} alt="" />
                <Span>우당탕탕 라이캣의 실험실</Span>
                <P>Hack Your Life 개발자 노트북 파우치</P>
                <div>
                    <MdPrice>29,000</MdPrice>
                    <MdUnit>원</MdUnit>
                </div>
            </ProductLink>
        </>
    );
}

export default ProductItem;
