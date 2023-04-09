import React from 'react'
import Navbar  from "./Component/Navbar";
import Hero  from "./Component/hero";
import Footer  from "./Component/Footer";
import Contact from './Component/Contact';

const Home = () => {
  return (
    <>
   <Navbar/>
   <Hero/>
   <Contact/>
   <Footer/>
    </>
  )
}

export default Home