import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CustomChatbot from './components/CustomChatbot';
import HomePage from './pages/HomePage';
import PricingPage from './pages/PricingPage';
import BookTourPage from './pages/BookTourPage';
import RentManagerGuide from './pages/RentManagerGuide';
import ConfirmationPage from './pages/ConfirmationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import AccessibilityPage from './pages/AccessibilityPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import RefundPolicyPage from './pages/RefundPolicyPage';
import AboutUsPage from './pages/AboutUsPage';
import BookingConfirmedPage from './pages/BookingConfirmedPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/book-tour" element={<BookTourPage />} />
            <Route path="/rental-setup" element={<RentManagerGuide />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/accessibility" element={<AccessibilityPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/refund-policy" element={<RefundPolicyPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/booking-confirmed" element={<BookingConfirmedPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
        <CustomChatbot />
      </div>
    </Router>
  );
}

export default App;

