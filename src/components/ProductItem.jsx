import emptyImage from '../assets/images/empty_image.png';
import { useState } from 'react';
import {
    ProductLink,
    Image,
    Span,
    P,
} from '../styles/components/Product.style';
import { MdPrice, MdUnit } from '../styles/modules/Price';

function ProductItem(productList) {
    console.log(productList);
    return (
        <>
            {productList && (
                <>
                    {productList.map((product) => {
                        return (
                            <Li key={product.product_id}>
                                <Image
                                    src={product.Image}
                                    alt={product.product_name}
                                />
                                <Span>{product.store_name}</Span>
                                <P>{product.product_name}</P>
                                <div>
                                    <MdPrice>{product.price}</MdPrice>
                                    <MdUnit>원</MdUnit>
                                </div>
                            </Li>
                        );
                    })}
                </>
            )}
        </>
    );
}

export default ProductItem;
