import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ContactPage from './pages/ContactPage'
import DemoPage from './pages/DemoPage'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import ScrollToTop from './components/ScrollToTop'
import './index.css'
import VideoWatchPage from './pages/VideoWatch'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/video" element={<VideoWatchPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


