import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import TrendingComponent from '../Component/TrendingComponent'
import { TrendData } from '../Data/TrendingData'

export default function TrendingPage() {
  return (
    <>
  
    <h1 className='text-4xl font-extrabold text-center my-9'>Trending Products</h1>

    <div className='text-center mb-6'>

    <button className=' mx-5  p-3 my-4 border-2 border-black rounded text-white bg-blue-500 hover:bg-blue-800'>Mens</button>
    <button className=' mx-5  p-3 my-4 border-2 border-black rounded text-white bg-pink-500 hover:bg-pink-800' >Womens</button>
    <button className=' mx-5  p-3 my-4 border-2 border-black rounded text-white bg-slate-500 hover:bg-slate-800' >All</button>

    </div>

    <div className='grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 place-items-center gap-y-10'>
    {TrendData.map((v,i)=>{
        return(
            <TrendingComponent TrendDataProps={v}/>
        )
    })}




    </div>
 

    </>
  )
}

