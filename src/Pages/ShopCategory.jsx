import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import "./Css/ShopCategory.css"

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img src={props.banner}  alt='category banner' />
    </div>
  )
}

export default ShopCategory