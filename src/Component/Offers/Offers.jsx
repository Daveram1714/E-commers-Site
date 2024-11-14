import React from 'react'
import './Offers.css'
import excluse_img from '../Asserts/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Excluseive</h1>
            <h1>Offers for you</h1>
            <p>ONLY ON BEST SELLERSS PRODUCTS</p>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src = {excluse_img } alt = "exclusive" / >         
        </div>
    </div>
  )
}

export default Offers