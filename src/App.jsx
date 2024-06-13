import './App.css'
import About from './components/About'
import { Anticipate } from './components/Anticipate'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import React, { useEffect } from 'react';
import AOS from 'aos';
import Help from './components/Help'
import Bottom from './components/Bottom'
function App() {
  return (
    <>
      <div
        className=' bg-headerBackground bg-no-repeat bg-cover'
      >
        <Navbar />
        <Hero />
      </div>
      <About />
      <Testimonials />
      <Services />
      <Anticipate />
      <Help />
      <Team />
      <Footer />
      <Bottom />
    </>
  )
}

export default App
