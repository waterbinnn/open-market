import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import Login from '../User/LoginPage';
import Signup from '../User/SignupPage';
import SellerSignup from '../User/SellerSignupPage';
import ProductDetailPage from '../ProductDetail/ProductDetailPage';
import UserCartPage from '../Cart/UserCartPage';
import OrderPage from '../Order/OrderPage';

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/seller-signup" element={<SellerSignup />}></Route>
          <Route path="/:postid" element={<ProductDetailPage />}></Route>
          <Route path="/:userid/cart" element={<UserCartPage />}></Route>
          <Route path="/:userid/order" element={<OrderPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routers;
