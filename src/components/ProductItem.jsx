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
                <Image
                    src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d1b70128-aa8f-488e-a5d5-08dd7f26dccd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220913%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220913T090813Z&X-Amz-Expires=86400&X-Amz-Signature=b2c04b8759de04ef5d6eac1c362694c8fb6ec8c560a8adefa79e7b7caed908de&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject"
                    alt=""
                />
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
