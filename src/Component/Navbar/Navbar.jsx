import React from 'react'
import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import logo from '../Asserts/logo.png' 


const Navbar = () => {

  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="Logo"/>
          <p>Shopping </p>
        </div>
        <ul className="nav-menu">
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className='nav-login-cart'>
          <button>Login <TiShoppingCart/></button>
          {/* <button>Cart </button> */}
        </div>
    </div>
  )
}

export default Navbar