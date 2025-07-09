import React from 'react';
import { useNavigate } from 'react-router-dom';
import HorizontalTimeline from '../components/HorizontalTimeline';
import ProcessFlowchart from '../components/ProcessFlowchart';
import FAQSection from '../components/FAQSection';

const BookTourPage = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-container">
      {/* Header */}
      <div className="booking-header">
        <h1 className="booking-title">
          📋 Book Your Self-Service Tour
        </h1>
        <p className="booking-subtitle">
          Quick form • Instant confirmation • Tour in minutes
        </p>
      </div>

      {/* Process Steps */}
      <div className="process-steps">
        <div className="process-card">
          <div className="process-number green">1</div>
          <h3 className="process-title">Fill Form</h3>
          <p className="process-description">1-minute booking form</p>
        </div>
        
        <div className="process-card">
          <div className="process-number blue">2</div>
          <h3 className="process-title">Get Details</h3>
          <p className="process-description">Text with location, number & access code</p>
        </div>
        
        <div className="process-card">
          <div className="process-number purple">3</div>
          <h3 className="process-title">Tour & Rent</h3>
          <p className="process-description">Self-guided tour</p>
        </div>
      </div>

      {/* JotForm Booking Form */}
      <div className="form-container">
        <div style={{ 
          background: 'white', 
          borderRadius: '12px', 
          padding: '2rem', 
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          margin: '2rem 0'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem', 
            color: '#1f2937',
            textAlign: 'center'
          }}>
            📋 Tour Booking Form
          </h3>
          
          {/* JotForm Iframe */}
          <iframe
            id="JotFormIFrame-251895754464067"
            title="Storage Tour Booking Form"
            onLoad={() => window.parent.scrollTo(0,0)}
            allowTransparency="true"
            allow="geolocation; microphone; camera; fullscreen; payment"
            src="https://form.jotform.com/251895754464067"
            frameBorder="0"
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              height: '1500px',
              border: 'none',
              borderRadius: '8px'
            }}
            scrolling="no"
          />
          
          <div style={{ 
            textAlign: 'center', 
            marginTop: '1rem', 
            fontSize: '0.875rem', 
            color: '#6b7280' 
          }}>
            ✅ You'll receive instant email confirmation<br/>
            📱 Container details sent via text within 30 minutes
          </div>
        </div>
      </div>

      {/* Enhanced What Happens Next Timeline */}
      <HorizontalTimeline />

      {/* Process Comparison Flowchart */}
      <ProcessFlowchart />

      {/* FAQ Section */}
      <FAQSection />

      {/* Rental Process Information */}
      <div className="bg-white rounded-lg shadow-md p-8 my-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          After your tour, if you decide to rent:
        </h2>
        
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Electronic Lease</h3>
            <p className="text-sm text-gray-600">Simple DocuSign lease</p>
            <p className="text-xs text-green-600 mt-1">~3 minutes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Payment Setup</h3>
            <p className="text-sm text-gray-600">Secure Rent Manager portal</p>
            <p className="text-xs text-blue-600 mt-1">~5 minutes</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🔑</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Access Code</h3>
            <p className="text-sm text-gray-600">Becomes permanent</p>
            <p className="text-xs text-purple-600 mt-1">Instant</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="font-semibold text-gray-700 mb-1">Complete</h3>
            <p className="text-sm text-gray-600">No paperwork, no office visits</p>
            <p className="text-xs text-green-600 mt-1">Done!</p>
          </div>
        </div>
        
        <div className="text-center">
          <button 
            onClick={() => {
              navigate('/rental-setup');
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium bg-transparent border-none cursor-pointer text-lg"
          >
            Learn more about our payment setup process →
          </button>
        </div>
      </div>

      {/* JotForm Script */}
      <script src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js'></script>
      <script dangerouslySetInnerHTML={{
        __html: `window.jotformEmbedHandler && window.jotformEmbedHandler("iframe[id='JotFormIFrame-251895754464067']", "https://form.jotform.com/")`
      }} />
    </div>
  );
};

export default BookTourPage;

