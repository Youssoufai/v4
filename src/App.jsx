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
import 'aos/dist/aos.css';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Anticipate />
        <Team />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
