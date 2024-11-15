import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Missing from './Missing'
import Footer from './Component/Footer/Footer'

const App = () => {




  
  return (<div>
    <Navbar />
    <Routes>
      <Route path = '/' element ={<Shop/>} />
      <Route path = 'mens' element = {<ShopCategory category = 'men' />}/>
      <Route path = 'womens' element = {<ShopCategory category = 'women'/>}/>
      <Route path = 'kids' element = {<ShopCategory category = 'kids' />} />
      <Route path = 'product' element ={<Product />} />
      <Route path = ':id' element = {<Product />} />
      <Route path = 'cart' element = {<Cart />} />
      <Route path = 'login' element ={<LoginSignup />} />
      <Route path = '*' element ={<Missing />} />

    </Routes>
    <Footer />
    </div>
  )
}

export default App