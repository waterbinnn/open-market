import {
    ProductLink,
    Image,
    Span,
    P,
    Price,
    PriceSpan,
} from '../styles/components/Product.style';

function ProductItem() {
    return (
        <>
            <ProductLink href="/:productid">
                <Image
                    src="https://cdn.lecturernews.com/news/photo/202208/103959_333869_3027.jpg"
                    alt=""
                />
                <Span>우당탕탕 라이캣의 실험실</Span>
                <P>Hack Your Life 개발자 노트북 파우치</P>
                <Price>
                    29,000<PriceSpan>원</PriceSpan>
                </Price>
            </ProductLink>
        </>
    );
}

export default ProductItem;
