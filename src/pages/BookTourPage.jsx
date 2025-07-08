import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Phone, Zap, Calendar, MessageSquare, Home } from 'lucide-react';
import HorizontalTimeline from '../components/HorizontalTimeline';
import ProcessFlowchart from '../components/ProcessFlowchart';
import FAQSection from '../components/FAQSection';

const BookTourPage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    preferredTime: '',
    scheduledDate: '',
    scheduledTime: '',
    questions: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = 'service_mzjm45n';
      const templateID = 'template_tpasori';
      const publicKey = 'nkBo4RSj5XY1LaspO';

      // Format the preferred time for email
      let formattedTime = '';
      if (formData.preferredTime === 'within-1-hour') {
        formattedTime = 'Within 1 hour (ASAP)';
      } else if (formData.preferredTime === 'schedule-specific') {
        const date = formData.scheduledDate ? new Date(formData.scheduledDate).toLocaleDateString() : 'Not specified';
        const time = formData.scheduledTime || 'Not specified';
        formattedTime = `Scheduled for ${date} at ${time}`;
      }

      // Prepare email template parameters
      const templateParams = {
        to_email: 'Drewcrichardson1999@gmail.com',
        customer_name: formData.fullName,
        customer_phone: formData.phone,
        customer_email: formData.email,
        preferred_time: formattedTime,
        questions: formData.questions || 'No additional questions',
        reply_to: formData.email,
        
        response_template: `Hi ${formData.fullName}! Your tour is ready:

📍 Container #23 (red container, front row)
🔐 Combination: 4-7-2-1
📍 1502 Airport Road, Urbana IL
🕐 Available now for your tour
📱 Text me when you're done: (your number)

Take your time exploring!`
      };

      console.log('📧 Sending email via EmailJS:', templateParams);

      // Send actual email via EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Redirect to confirmation page
      navigate('/confirmation');

    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your tour request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Booking Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          
          {/* Personal Information */}
          <div className="form-section">
            <h3 className="section-title">
              <Phone size={24} style={{ color: '#22c55e' }} />
              Your Information
            </h3>
            
            <div className="form-grid">
              {/* Full Name */}
              <div className="form-field">
                <label className="form-label">
                  🏷️ Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Number */}
              <div className="form-field">
                <label className="form-label">
                  📱 Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-field" style={{ marginTop: '1.5rem' }}>
              <label className="form-label">
                📧 Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          {/* Tour Timing */}
          <div className="form-section">
            <h3 className="section-title">
              <Calendar size={24} style={{ color: '#3b82f6' }} />
              Preferred Tour Time *
            </h3>
            
            <div className="radio-options">
              <label className={`radio-option ${formData.preferredTime === 'within-1-hour' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="preferredTime"
                  value="within-1-hour"
                  checked={formData.preferredTime === 'within-1-hour'}
                  onChange={handleInputChange}
                  className="radio-input"
                />
                <div className="radio-content">
                  <Zap size={20} style={{ color: '#f59e0b' }} />
                  <span>Within 1 hour</span>
                </div>
              </label>

              <label className={`radio-option ${formData.preferredTime === 'schedule-specific' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="preferredTime"
                  value="schedule-specific"
                  checked={formData.preferredTime === 'schedule-specific'}
                  onChange={handleInputChange}
                  className="radio-input"
                />
                <div className="radio-content">
                  <Calendar size={20} style={{ color: '#3b82f6' }} />
                  <span>Schedule specific time</span>
                </div>
              </label>
            </div>

            {/* Date/Time Picker for Scheduled Tours */}
            {formData.preferredTime === 'schedule-specific' && (
              <div className="form-grid" style={{ marginTop: '1rem' }}>
                <div className="form-field">
                  <label className="form-label">
                    📅 Preferred Date
                  </label>
                  <input
                    type="date"
                    name="scheduledDate"
                    value={formData.scheduledDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="form-input"
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">
                    🕐 Preferred Time
                  </label>
                  <input
                    type="time"
                    name="scheduledTime"
                    value={formData.scheduledTime}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Optional Questions */}
          <div className="form-section">
            <label className="form-label">
              <MessageSquare size={20} style={{ color: '#8b5cf6' }} />
              Any specific questions? (Optional)
            </label>
            <textarea
              name="questions"
              value={formData.questions}
              onChange={handleInputChange}
              className="form-textarea"
              placeholder="Any questions about storage, pricing, or the facility?"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn"
          >
            {isSubmitting ? (
              <>
                <div style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  border: '2px solid transparent',
                  borderTop: '2px solid white',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }} />
                Booking Your Tour...
              </>
            ) : (
              <>
                <Home size={20} />
                Book My Tour
              </>
            )}
          </button>
        </form>
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

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default BookTourPage;

