import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HorizontalTimeline from '../components/HorizontalTimeline';
import ProcessFlowchart from '../components/ProcessFlowchart';
import FAQSection from '../components/FAQSection';

const BookTourPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('BookTourPage: Checking URL parameters for submission confirmation');
    
    // Check if the URL contains the submitted parameter
    const urlParams = new URLSearchParams(location.search);
    const isSubmitted = urlParams.get('submitted');
    
    if (isSubmitted === 'true') {
      console.log('✅ Submission parameter detected! Redirecting to booking-confirmed...');
      
      // Clean the URL first (remove the parameter)
      window.history.replaceState({}, '', '/book-tour');
      
      // Redirect to confirmation page after a brief delay
      setTimeout(() => {
        navigate('/booking-confirmed');
      }, 1000);
    } else {
      console.log('No submission parameter found - showing booking form');
    }
  }, [location.search, navigate]);

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

      {/* Timeline */}
      <HorizontalTimeline />

      {/* JotForm Container */}
      <div className="jotform-container">
        <h2 className="form-title">
          📋 Tour Booking Form
        </h2>
        
        <div className="form-benefits">
          <p>✅ You'll receive instant email confirmation</p>
          <p>📱 Container details sent via text within 30 minutes</p>
          <p>🔄 You'll be redirected to confirmation page after submission</p>
        </div>

        {/* JotForm Embed */}
        <div className="jotform-embed">
          <iframe
            id="JotFormIFrame-251895754464067"
            title="Tour Booking Form"
            onLoad={() => window.parent.scrollTo(0,0)}
            allowTransparency="true"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/251895754464067"
            frameBorder="0"
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              height: '539px',
              border: 'none'
            }}
            scrolling="no"
          />
        </div>
        
        {/* Instructions for JotForm Configuration */}
        <div className="form-instructions" style={{ 
          background: '#f0f9ff', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginTop: '1rem',
          fontSize: '0.9rem',
          color: '#1e40af'
        }}>
          <p><strong>📝 JotForm Setup Required:</strong></p>
          <p>Configure your JotForm to redirect to: <code>https://ownyourownselfserve.com/book-tour?submitted=true</code></p>
          <p>This enables automatic redirect to the confirmation page for Google Ads tracking.</p>
        </div>
      </div>

      {/* Process Explanation */}
      <ProcessFlowchart />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
};

export default BookTourPage;

