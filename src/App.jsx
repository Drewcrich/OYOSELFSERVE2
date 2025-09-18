import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import HeaderIndustrial from './components/HeaderIndustrial';
import FooterIndustrial from './components/FooterIndustrial';
import ScrollToTop from './components/ScrollToTop';
import CustomChatbot from './components/CustomChatbot';
import HomePageIndustrial from './pages/HomePageIndustrial';
import PricingPageIndustrial from './pages/PricingPageIndustrial';
import BookTourPageIndustrialJotForm from './pages/BookTourPageIndustrialJotForm';
import RentManagerGuide from './pages/RentManagerGuide';
import ConfirmationPage from './pages/ConfirmationPage';
import PrivacyPolicyPageIndustrial from './pages/PrivacyPolicyPageIndustrial';
import TermsOfServicePageIndustrial from './pages/TermsOfServicePageIndustrial';
import AccessibilityPageIndustrial from './pages/AccessibilityPageIndustrial';
import CookiePolicyPageIndustrial from './pages/CookiePolicyPageIndustrial';
import RefundPolicyPageIndustrial from './pages/RefundPolicyPageIndustrial';

import BookingConfirmedPage from './pages/BookingConfirmedPage';
import GoogleAdsLandingPage from './pages/GoogleAdsLandingPage';
import ContactUsPage from './pages/ContactUsPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <HeaderIndustrial />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePageIndustrial />} />
            <Route path="/ads" element={<GoogleAdsLandingPage />} />
            <Route path="/pricing" element={<PricingPageIndustrial />} />
            <Route path="/book-tour" element={<BookTourPageIndustrialJotForm />} />
            <Route path="/booking-confirmed" element={<BookingConfirmedPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />

          <Route path="/privacy-policy" element={<PrivacyPolicyPageIndustrial />} />
          <Route path="/terms-of-service" element={<TermsOfServicePageIndustrial />} />
            <Route path="/accessibility" element={<AccessibilityPageIndustrial />} />
            <Route path="/cookie-policy" element={<CookiePolicyPageIndustrial />} />
            <Route path="/refund-policy" element={<RefundPolicyPageIndustrial />} />
            <Route path="/rent-manager-guide" element={<RentManagerGuide />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <FooterIndustrial />
        <CustomChatbot />
      </div>
    </Router>
  );
}

export default App;

