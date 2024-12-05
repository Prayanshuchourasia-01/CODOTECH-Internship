import React from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function ProductList({ productData }) {
  return (
    <>
      <div className="grid text-center mb-5 place-content-center place-items-center min-h-72 max-h-fit min-w-72 max-w-80 bg-slate-100 rounded-xl">

        <NotificationContainer />
       
          <img src={productData.imageUrl}  className='min-h-44 max-h-72  rounded-full w-[90%] ' alt="image of the product" />
          <h5 className='px-9 my-3'>{productData.name}</h5>
          <h6 className='font-bold my-2'>$ {productData.price}</h6>
          <button  className='p-3 border-2 border-black my-5 rounded bg-blue-500 text-white hover:bg-blue-800' onClick={showNotification}>Add To Cart</button>


      </div>
    </>
  )
}

let showNotification = () => {
  NotificationManager.success('Item Added You Your Cart', "Cart")
}

