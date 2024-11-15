import React from 'react'
import './Footer.css'
import footer_logo from '../Asserts/logo_big.png'
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
const today = new Date();

  return (
    <div className='footer'>
        <div className="footer-logo">
        <img src={footer_logo} />
        <p>Shopper</p>
        </div>
    <ul className="footer-links">
        <li> Company</li>
        <li> Products</li>
        <li> Offices</li>
        <li> About</li>
        <li> Contact</li>
    </ul>
    <div className="footer-social-icons">
        <div className="footer-icons-container">
        <FaInstagram />
        <FaPinterest />
        <FaWhatsapp />
        </div>

    </div>

    <div className="footer-copyright">
        <hr />
        <p> Copy rights &copy; {today.getFullYear()} All Rights Recived</p>
    </div>
    </div>
  )
}

export default Footer