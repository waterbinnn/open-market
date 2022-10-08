import Footer from '../Common/Header';
import Header from '..//Common/Header';
import HomeCarousel from './HomeCarousel';
import ProductList from '../../components/Home/product/ProductList';

function HomePage() {
  return (
    <>
      <Header />
      <HomeCarousel />
      <ProductList />
      <Footer />
    </>
  );
}

export default HomePage;
