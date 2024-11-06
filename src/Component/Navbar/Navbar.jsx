import React, { useState } from 'react'
import './Navbar.css'
import { TiShoppingCart } from "react-icons/ti";
import logo from '../Asserts/logo.png' 


const Navbar = () => {
  const[menu,setMenu] = useState("")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="Logo"/>
          <p>Shopping </p>
        </div>
        <ul className="nav-menu">
          <li onClick={()=> setMenu("Shop")}> Shop{menu==="Shop" ? <hr/> : <></>}</li>
          <li onClick={()=>setMenu("Men")}>Men{menu=== "Men" ?<hr /> : <></>}</li>
          <li onClick={()=>setMenu("Women")}>Women {menu==="Women" ? <hr /> :<></>}</li>
          <li onClick={ ()=>setMenu("Kids")}>Kids {menu === "Kids" ? <hr /> : <></>} </li>
        </ul>
        <div className='nav-login-cart'>
          <button>Login <TiShoppingCart/></button>
          <div className="nav-cart-count">0</div>
          {/* <button>Cart </button> */}
        </div>
    </div>
  )
}

export default Navbar