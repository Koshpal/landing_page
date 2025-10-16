import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedExperts from './components/TrustedExperts'
import WhatMakesUsDifferent from './components/WhatMakesUsDifferent'
import About from './components/About'
import TrustStats from './components/TrustStats'
import ProductCapabilities from './components/ProductCapabilities'
import KnowYourMoney from './components/KnowYourMoney'
import HowKoshpalWorks from './components/HowKoshpalWorks'
import CardsSection from './components/CardsSection'
import ContactForm from './components/ContactForm'
import ExploreArticles from './components/ExploreArticles'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navigation Bar Section */}
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Advisor Section */}
        <TrustedExperts />
        
        {/* What Makes Us Different? */}
        <WhatMakesUsDifferent />
        
        {/* About */}
        <About />
        
        {/* Stats */}
        <TrustStats />
        
        {/* Additional Features Section */}
        <ProductCapabilities />
        
        {/* Know your money */}
        <KnowYourMoney />
        
        {/* How it works Section */}
        <HowKoshpalWorks />
        
        {/* Cards Section */}
        <CardsSection />
        
        {/* Form Section */}
        <ContactForm />
        
        {/* Article Section */}
        <ExploreArticles />
      </main>
      
      {/* footer */}
      <Footer />
    </div>
  )
}
