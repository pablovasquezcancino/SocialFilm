import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import Landing from '../components/Landing'


const Home = () => {
  return (
    <div>
        <HomeNavbar />
        <HeroSection />
        <Landing />
        <Footer />
    </div>
  )
}

export default Home