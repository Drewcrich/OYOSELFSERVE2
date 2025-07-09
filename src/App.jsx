import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import CustomChatbot from './components/CustomChatbot';
import HomePage from './pages/HomePage';
import BookTourPage from './pages/BookTourPage';
import RentManagerGuide from './pages/RentManagerGuide';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book-tour" element={<BookTourPage />} />
            <Route path="/rental-setup" element={<RentManagerGuide />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <CustomChatbot />
      </div>
    </Router>
  );
}

export default App;

