import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Hero from '../Component/Hero'
import TrendingPage from '../TrendingPage/TrendingPage'


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <TrendingPage/>
    <Footer/>
    </>
  )
}
