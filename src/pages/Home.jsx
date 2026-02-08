import React from 'react'
import PromotionBanner from '../components/PromotionBanner'
import Header from '../components/Header'
import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import ProfileMockup from '../components/ProfileMockup'
import Services from '../components/Services'
import Differences from '../components/Differences'
import Foundation from '../components/Foundation'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="app">
      <PromotionBanner />
      <Header />
      <Hero />
      <HowItWorks />
      <ProfileMockup />
      <Services />
      <Differences />
      <Foundation />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home
