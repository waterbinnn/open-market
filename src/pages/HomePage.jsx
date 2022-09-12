import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeCarousel from '../components/HomeCarousel';
import ProductList from '../components/ProductList';

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
