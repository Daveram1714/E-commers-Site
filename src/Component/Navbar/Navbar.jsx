// import React, { useState } from 'react'
// import './Navbar.css'
// import { TiShoppingCart } from "react-icons/ti";
// import logo from '../Asserts/logo.png' 
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   const[menu,setMenu] = useState("")

//   return (
//     <div className='navbar'>
//         <div className='nav-logo'>
//           <img src={logo} alt="Logo"/>
//           <p>Shopping </p>
//         </div>
//         <ul className="nav-menu">
//           <li onClick={()=> setMenu("Shop")}> <Link style={{textDecoration :'none'}} to = '/'> Shop</Link>  {menu==="Shop" ? <hr/> : <></>}</li>
//           <li onClick={()=>setMenu("Men")}><Link style={{textDecoration :'none'}} to = 'mens'>Men</Link> {menu=== "Men" ?<hr /> : <></>}</li>
//           <li onClick={()=>setMenu("Women")}><Link style={{textDecoration :'none'}} to = 'womens'>  Women</Link> {menu==="Women" ? <hr /> :<></>}</li>
//           <li onClick={ ()=>setMenu("Kids")}><Link style={{textDecoration :'none'}} to='kids'> Kids</Link>  {menu === "Kids" ? <hr /> : <></>} </li>
//         </ul>
//         <div className='nav-login-cart'>
//           <Link to = 'login'> <button>Login </button> </Link>
//          <Link to = 'cart'>  <div className="nav-cart-count"> <TiShoppingCart/> </div> </Link>
//           {/* <button>Cart </button> */}
//         </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { TiShoppingCart } from "react-icons/ti";
import logo from '../Asserts/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(window.scrollY || document.documentElement.scrollTop);
  const [prevDirection, setPrevDirection] = useState(0);

  const handleScroll = () => {
    const curScroll = window.scrollY || document.documentElement.scrollTop;
    let direction = 0;

    if (curScroll > prevScroll) {
      // scrolling down
      direction = 2;
    } else if (curScroll < prevScroll) {
      // scrolling up
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleNavbar(direction, curScroll);
    }

    setPrevScroll(curScroll);
  };

  const toggleNavbar = (direction, curScroll) => {
    if (direction === 2 && curScroll > 100) {
      setIsNavbarHidden(true);
      setPrevDirection(direction);
    } else if (direction === 1) {
      setIsNavbarHidden(false);
      setPrevDirection(direction);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScroll, prevDirection]);

  return (
    <div className={`navbar ${isNavbarHidden ? 'hide-navbar' : ''}`}>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>Shopping</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("Shop")}>
          <Link style={{ textDecoration: 'none' }} to='/'> Shop</Link>
          {menu === "Shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Men")}>
          <Link style={{ textDecoration: 'none' }} to='mens'>Men</Link>
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Women")}>
          <Link style={{ textDecoration: 'none' }} to='womens'>Women</Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("Kids")}>
          <Link style={{ textDecoration: 'none' }} to='kids'>Kids</Link>
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='login'><button>Login</button></Link>
        <Link to='cart'><div className="nav-cart-count"><TiShoppingCart /></div></Link>
      </div>
    </div>
  );
};

export default Navbar;
