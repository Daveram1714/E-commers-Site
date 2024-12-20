import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import "./Css/ShopCategory.css"
import droup_down from '../Component/Asserts/dropdown_icon.png'
import Item from '../Component/Items/Item'
import all_product from '../Component/Asserts/all_product'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner}  alt='category banner' />

      <div className="shopcategory-indexsort">
      <p>
        <span>
          Showing 1-12   </span>
          out of 36 product
      </p>
      <div className="shopcategory-sort">
        Sort by <img src={droup_down} alt=''/>
      </div>
    </div>

    <div className="shopcategory-products">
      {all_product.map((item,i)=>{
        if(props.category === item.category){
          return <Item  key = {i}
          id = {item.id}
          name = {item.name}
          image = {item.image}
          new_price = {item.new_price}
          old_price = {item.old_price} />
        }
        else{
          return null
        }
      })}
    </div>
    <div className="shopcategory-loadmore">
      Explore more
    </div>
    </div>
    
  )
}

export default ShopCategory