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
      if (event.origin === 'https://form.jotform.com') {
        if (event.data && typeof event.data === 'string') {
          try {
            const data = JSON.parse(event.data);
            if (data.type === 'form_submit' || data.action === 'submit') {
              // Redirect to confirmation page after successful submission
              setTimeout(() => {
                navigate('/booking-confirmed');
              }, 2000); // 2 second delay to allow form processing
            }
          } catch (e) {
            // If data is not JSON, check for submission indicators
            if (event.data.includes('submit') || event.data.includes('success')) {
              setTimeout(() => {
                navigate('/booking-confirmed');
              }, 2000);
            }
          }
        }
      }
    };

    // Add event listener for JotForm messages
    window.addEventListener('message', handleJotFormSubmission);

    // Cleanup event listener
    return () => {
      window.removeEventListener('message', handleJotFormSubmission);
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

