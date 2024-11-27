import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Missing from './Missing';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Asserts/banner_mens.png';
import womens_banner from './Component/Asserts/banner_women.png';
import kids_banner from './Component/Asserts/banner_kids.png';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="mens" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="womens" element={<ShopCategory banner={womens_banner} category="women" />} />
        <Route path="kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
        <Route path="product/:productid" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="login" element={<LoginSignup />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
