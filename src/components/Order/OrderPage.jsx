import Header from '../Common/Header';
import Footer from '../Common/Footer';

import OrderProductTable from './components/OrderProductTable';
import {
  OrderSection,
  H1,
  WrapperPayment,
} from '../../styles/components/Order/OrderPage.style';
import DeliverInfo from './components/DeliverInfo';
import PaymentCheck from './components/PaymentCheck';
import FinalPaytmentInfo from './components/FinalPaytmentInfo';

function OrderPage() {
  return (
    <>
      <Header />
      <OrderSection>
        <H1>주문 / 결제하기</H1>
        <OrderProductTable />
        <DeliverInfo />
        <WrapperPayment>
          <PaymentCheck />
          <FinalPaytmentInfo />
        </WrapperPayment>
      </OrderSection>
      <Footer />
    </>
  );
}

export default OrderPage;
