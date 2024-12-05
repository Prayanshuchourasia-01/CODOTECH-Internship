import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import ProductList from '../Component/ProductList'
import { productListData } from '../Data/Items'



export default function Product() {
  return (
    <>
      <Navbar />
      <h1 className='text-4xl font-extrabold font-mono  text-center my-8 mb-16'>All Products</h1>
<div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 place-items-center gap-y-10">
      {productListData.map((v, i) => {
        return (
          <ProductList productData={v} />
        )
      })}  
</div>
      <Footer />
    </>
  )
}


