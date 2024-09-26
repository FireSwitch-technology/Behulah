import React from 'react'
import Hero from '../components/AboutComp/Hero'
import Pastor from '../components/AboutComp/Pastor'
import Testimonies from '../components/HomeComp/Testimonies'
import Contact from '../components/HomeComp/Contact'
import Locate from "../components/HomeComp/Locate";
import Footer from '../components/HomeComp/Footer'


const Aboutpage = () => {
  return (
    <div>
      <Hero/>
      <Pastor/>
      <Testimonies/>
      <Contact/>
      <Locate/>
      <Footer/>
    </div>
  )
}

export default Aboutpage