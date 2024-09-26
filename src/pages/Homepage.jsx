import React from 'react'
import Hero from '../components/HomeComp/Hero'
import Services from '../components/HomeComp/Services'
import AboutUs from '../components/HomeComp/AboutUs'
import Testimonies from '../components/HomeComp/Testimonies'
import Contact from '../components/HomeComp/Contact'
import Locate from '../components/HomeComp/Locate'
import Footer from '../components/HomeComp/Footer'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <AboutUs/>
        <Testimonies/>
        <Contact/>
        <Locate/>
        <Footer/>
    </div>
  )
}

export default Homepage