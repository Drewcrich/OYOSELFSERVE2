import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import HorizontalTimeline from '../components/HorizontalTimeline';
import ProcessFlowchart from '../components/ProcessFlowchart';
import FAQSection from '../components/FAQSection';

const BookTourPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for JotForm submission completion
    const handleJotFormSubmission = (event) => {
      console.log('Received message:', event); // Debug log
      
      // Check if message is from JotForm
      if (event.origin === 'https://form.jotform.com' || event.origin === 'https://www.jotform.com') {
        console.log('Message from JotForm:', event.data); // Debug log
        
        if (event.data) {
          let shouldRedirect = false;
          
          // Try to parse as JSON first
          try {
            const data = JSON.parse(event.data);
            console.log('Parsed data:', data); // Debug log
            
            if (data.type === 'form_submit' || 
                data.action === 'submit' || 
                data.type === 'form_ready' ||
                data.type === 'form_loaded' ||
                data.formSubmit === true) {
              shouldRedirect = true;
            }
          } catch (e) {
            // If not JSON, check string content
            const dataStr = String(event.data).toLowerCase();
            console.log('String data:', dataStr); // Debug log
            
            if (dataStr.includes('submit') || 
                dataStr.includes('success') || 
                dataStr.includes('thank') ||
                dataStr.includes('complete') ||
                dataStr.includes('form_submit')) {
              shouldRedirect = true;
            }
          }
          
          // Also check for iframe height changes which often indicate form submission
          if (typeof event.data === 'object' && event.data.height) {
            console.log('Height change detected:', event.data.height);
            // If height becomes very small, it might indicate form submission
            if (event.data.height < 200) {
              shouldRedirect = true;
            }
          }
          
          if (shouldRedirect) {
            console.log('Redirecting to booking-confirmed'); // Debug log
            setTimeout(() => {
              navigate('/booking-confirmed');
            }, 3000); // Increased delay to 3 seconds
          }
        }
      }
    };

    // Add event listener for JotForm messages
    window.addEventListener('message', handleJotFormSubmission);
    
    // Also add a backup method - check for form submission every few seconds
    const checkForSubmission = setInterval(() => {
      const iframe = document.getElementById('JotFormIFrame-251895754464067');
      if (iframe) {
        try {
          // Check if iframe content has changed to thank you page
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          if (iframeDoc && iframeDoc.body) {
            const bodyText = iframeDoc.body.innerText.toLowerCase();
            if (bodyText.includes('thank you') || bodyText.includes('submitted') || bodyText.includes('success')) {
              console.log('Form submission detected via iframe check');
              clearInterval(checkForSubmission);
              navigate('/booking-confirmed');
            }
          }
        } catch (e) {
          // Cross-origin restrictions prevent iframe access, this is expected
        }
      }
    }, 2000);

    // Cleanup
    return () => {
      window.removeEventListener('message', handleJotFormSubmission);
      clearInterval(checkForSubmission);
    };
  }, [navigate]);

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
            📱 Container details sent via text within 30 minutes<br/>
            🔄 You'll be redirected to confirmation page after submission
          </div>
        </div>
      </div>

      {/* Enhanced What Happens Next Timeline */}
      <HorizontalTimeline />

      {/* Process Comparison Flowchart */}
      <ProcessFlowchart />

      {/* FAQ Section */}
      <FAQSection />

      <style jsx>{`
        .booking-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          min-height: 100vh;
        }

        .booking-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .booking-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 1rem;
        }

        .booking-subtitle {
          font-size: 1.25rem;
          color: #64748b;
          margin-bottom: 2rem;
        }

        .process-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .process-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .process-card:hover {
          transform: translateY(-4px);
        }

        .process-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
          margin: 0 auto 1rem;
        }

        .process-number.green {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .process-number.blue {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .process-number.purple {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }

        .process-title {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .process-description {
          color: #6b7280;
          font-size: 0.875rem;
        }

        .form-container {
          margin: 3rem 0;
        }

        @media (max-width: 768px) {
          .booking-title {
            font-size: 2rem;
          }
          
          .booking-subtitle {
            font-size: 1rem;
          }
          
          .process-steps {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .process-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default BookTourPage;

