import Header from '../components/Header';
import Footer from '../components/Footer';
import CartProductTable from '../components/Cart/CartProductTable';
import { LGButton } from '../styles/modules/_Button';
import { colors } from '../styles/constants/colors';
import { CartSection, H1, OrderLink } from '../styles/pages/UserCartPage.style';

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
                    <LGButton
                        background={`${colors.green}`}
                        width={'220px'}
                        margin="40px auto"
                    >
                        주문하기
                    </LGButton>
                </OrderLink>
            </CartSection>
            <Footer />
        </>
    );
}

export default UserCartPage;
