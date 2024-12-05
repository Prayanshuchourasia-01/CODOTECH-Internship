import React from 'react'
import { NotificationContainer, NotificationManager } from 'react-notifications'

export default function TrendingComponent({TrendDataProps}) {
  return (
    <>
    <div className="grid text-center mb-5 place-content-center place-items-center min-h-72 max-h-fit min-w-72 max-w-80 bg-slate-100 rounded-xl">
      
        <NotificationContainer/>
        <img src={TrendDataProps.imageUrl} className='min-h-44 max-h-72  rounded-full w-[90%] ' alt="trending image" />
        <h4 className='px-9 my-3'>{TrendDataProps.name}</h4>
        <h5 className='font-bold my-2'>$ {TrendDataProps.price}</h5>
        <button onClick={showNotification} className='p-3 border-2 border-black my-5 rounded bg-blue-500 text-white hover:bg-blue-800'>Add To Cart</button>
    </div>
    </>
  )
}

let showNotification=()=>{
    NotificationManager.success('Item Added You Your Cart',"Cart")
}