import { useNavigate } from 'react-router-dom';
import {
  Li,
  Image,
  Span,
  P,
} from '../../../styles/components/Home/Product.style';
import { MdPrice, MdUnit } from '../../../styles/modules/Price';

function ProductItem(props) {
  const { productData } = props;
  const navigate = useNavigate();

  return (
    <>
      <Li
        key={productData.product_id}
        onClick={() => {
          navigate(`/:${productData.product_id}`);
        }}
      >
        <Image src={productData.image} alt={productData.product_name} />
        <Span>{productData.store_name}</Span>
        <P>{productData.product_name}</P>
        <div>
          <MdPrice>
            {typeof productData.price === 'number'
              ? `${productData.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
              : `-`}
          </MdPrice>
          <MdUnit>원</MdUnit>
        </div>
      </Li>
    </>
  );
}

export default ProductItem;
