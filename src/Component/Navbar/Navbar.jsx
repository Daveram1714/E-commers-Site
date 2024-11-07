import React, { useState } from 'react'
import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import logo from '../Asserts/logo.png' 
import { Link } from 'react-router-dom';


const Navbar = () => {
  const[menu,setMenu] = useState("")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="Logo"/>
          <p>Shopping </p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=> setMenu("Shop")}> <Link to = '/'> Shop</Link>  {menu==="Shop" ? <hr/> : <></>}</li>
          <li onClick={()=>setMenu("Men")}><Link to = 'mens'>Men</Link> {menu=== "Men" ?<hr /> : <></>}</li>
          <li onClick={()=>setMenu("Women")}><Link to = 'womens'>  Women</Link> {menu==="Women" ? <hr /> :<></>}</li>
          <li onClick={ ()=>setMenu("Kids")}><Link to='kids'> Kids</Link>  {menu === "Kids" ? <hr /> : <></>} </li>
        </ul>
        <div className='nav-login-cart'>
          <Link to = 'login'> <button>Login <TiShoppingCart/></button> </Link>
         <Link to = 'cart'>  <div className="nav-cart-count">0</div> </Link>
          {/* <button>Cart </button> */}
        </div>
    </div>
  )
}

export default Navbar