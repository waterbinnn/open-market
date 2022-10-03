import { useNavigate } from 'react-router-dom';
import { Li, Image, Span, P } from '../styles/components/Product.style';
import { MdPrice, MdUnit } from '../styles/modules/Price';

function ProductItem(props) {
  const { productList } = props;
  const navigate = useNavigate();
  return (
    <>
      {productList && (
        <>
          {productList.map((product) => {
            {
              return (
                <Li
                  key={product.product_id}
                  onClick={() => {
                    navigate(`/:${product.product_id}`);
                  }}
                >
                  <Image src={product.image} alt={product.product_name} />
                  <Span>{product.store_name}</Span>
                  <P>{product.product_name}</P>
                  <div>
                    <MdPrice>
                      {typeof product.price === 'number'
                        ? `${product.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
                        : `-`}
                    </MdPrice>
                    <MdUnit>원</MdUnit>
                  </div>
                </Li>
              );
            }
          })}
        </>
      )}
    </>
  );
}

export default ProductItem;
