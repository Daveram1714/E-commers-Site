import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrums/Breadcrum'

const Product = () => {
const {all_product} = useContext(ShopContext)
const {productid} = useParams()
const product = all_product.find(item => item.id === Number(productid))

  return (
    <div >
      <Breadcrum  product = {product}/>
    </div>
  )
}

export default Product