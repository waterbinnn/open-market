import Header from '../components/Header';
import Footer from '../components/Footer';

import OrderProductTable from '../components/Order/OrderProductTable';
import { OrderSection, H1 } from '../styles/pages/OrderPage.style';
import DeliverInfo from '../components/Order/DeliverInfo';
import PaymentCheck from '../components/Order/PaymentCheck';
import FinalPaytmentInfo from '../components/Order/FinalPaytmentInfo';

function OrderPage() {
    return (
        <>
            <Header />
            <OrderSection>
                <H1>주문 / 결제하기</H1>
                <OrderProductTable />
                <DeliverInfo />
                <PaymentCheck />
                <FinalPaytmentInfo />
            </OrderSection>
            <Footer />
        </>
    );
}

export default OrderPage;
