import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>E-commerce is the buying and selling of goods and services over the internet. It allows customers to browse products, compare prices, place orders, and make payments online. Businesses use e-commerce platforms to reach wider audiences and operate more efficiently.</p>
         <p>Modern e-commerce platforms integrate several functionalities such as product catalogs, user authentication, secure payment gateways, shopping carts, delivery tracking, and customer service systems. These technologies allow businesses to operate without geographical limitations, reaching global markets while offering customers a convenient, personalized shopping experience.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
