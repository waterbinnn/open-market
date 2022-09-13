import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import SellerSignup from './pages/SellerSignupPage';
import ProductDetailPage from './pages/ProductDetailPage';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route
                        path="/seller-signup"
                        element={<SellerSignup />}
                    ></Route>
                    <Route
                        path="/:postid"
                        element={<ProductDetailPage />}
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
