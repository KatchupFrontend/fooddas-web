import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Deals from './Deals'
import About from './About'
import Footer from './Footer'
const home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Services/>
        <Deals/>
        <About/>
        <Footer/>
    </div>
  )
}

export default home