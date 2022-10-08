import Header from '../Common/Header';
import Footer from '../Common/Footer';
import CartProductTable from './components/CartProductTable';
import { LgButton } from '../../styles/modules/_Button';
import { colors } from '../../styles/constants/colors';
import {
  CartSection,
  H1,
  OrderLink,
} from '../../styles/components/Cart/UserCartPage.style';

function UserCartPage() {
  return (
    <>
      <Header />
      <CartSection>
        <H1>장바구니</H1>
        {/* <article>
                    <h2 className="visually-hidden">장바구니가 비었다.</h2>
                    <strong>장바구니에 담신 상품이 없습니다.</strong>
                    <p>원하는 상품을 장바구니에 담아보세요!</p>
                </article>{' '} */}
        <CartProductTable />
        <OrderLink href="/:username/order">
          <LgButton
            background={`${colors.green}`}
            width={'220px'}
            margin="40px auto"
          >
            주문하기
          </LgButton>
        </OrderLink>
      </CartSection>
      <Footer />
    </>
  );
}

export default UserCartPage;
