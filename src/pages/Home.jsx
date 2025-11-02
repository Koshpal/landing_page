import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FinancialWellness from "../components/FinancialWellness";
import EmployeeFinancialHealth from "../components/EmployeeFinancialHealth";
import TrustedExperts from "../components/TrustedExperts";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import About from "../components/About";
import TrustStats from "../components/TrustStats";
import ProductCapabilities from "../components/ProductCapabilities";
import KnowYourMoney from "../components/KnowYourMoney";
import HowKoshpalWorks from "../components/HowKoshpalWorks";
import CardsSection from "../components/CardsSection";
import ContactForm from "../components/ContactForm";
import ExploreArticles from "../components/ExploreArticles";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-white">
      {/* Navigation Bar Section */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Financial Wellness Section */}
        <FinancialWellness />

        {/* Employee Financial Health Section */}
        <EmployeeFinancialHealth />

        {/* What Makes Us Different? */}
        <WhatMakesUsDifferent />

        {/* Stats */}
        <TrustStats />

        {/* How it works Section */}
        <div id="how-it-works">
          <HowKoshpalWorks />
        </div>

         {/* Advisor Section */}
        <TrustedExperts />


        {/* Additional Features Section */}
        <div id="what-we-do">
          <ProductCapabilities />
        </div>

        {/* Cards Section */}
        <CardsSection />

         {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Form Section */}
        <div id="contact">
          <ContactForm />
        </div>
       

        {/* Article Section */}
        <div id="resources">
          <ExploreArticles />
        </div>
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
