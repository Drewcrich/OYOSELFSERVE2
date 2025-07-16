import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="pricing-page">
      {/* Header */}
      <div className="pricing-header">
        <h1 className="pricing-title">
          💰 Storage Container Pricing
        </h1>
        <p className="pricing-subtitle">
          Simple, transparent pricing • No hidden fees • 6-month minimum lease
        </p>
      </div>

      {/* Container Size Info */}
      <div className="container-info">
        <div className="container-size-card">
          <h2 className="container-size-title">All Containers Are the Same Size</h2>
          <div className="size-details">
            <div className="size-item">
              <span className="size-number">40ft</span>
              <span className="size-label">Length</span>
            </div>
            <div className="size-item">
              <span className="size-number">8ft</span>
              <span className="size-label">Width</span>
            </div>
            <div className="size-item">
              <span className="size-number">10ft</span>
              <span className="size-label">Height</span>
            </div>
            <div className="size-item">
              <span className="size-number">320</span>
              <span className="size-label">Square Feet</span>
            </div>
          </div>
          <p className="size-description">
            Enough space for a 3-4 bedroom home with complete weather protection
          </p>
        </div>
      </div>

      {/* Grand Opening Banner */}
      <div className="grand-opening-banner">
        <h2 className="grand-opening-title">🎉 Grand Opening Pricing</h2>
        <p className="grand-opening-subtitle">
          Limited time launch pricing • 6-month minimum lease
        </p>
      </div>

      {/* Pricing Plans */}
      <div className="pricing-plans">
        <div className="pricing-plan standard">
          <div className="plan-header">
            <h3 className="plan-title">6-Month Standard</h3>
            <div className="plan-price">
              <span className="price-amount">$95</span>
              <span className="price-period">/month</span>
            </div>
            <p className="plan-description">Pay monthly within 6-month lease</p>
            <p className="plan-total">Total: $570 for 6 months</p>
          </div>
          
          <div className="plan-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">320 sq ft secure container</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Complete weather protection</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">24/7 access</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Drive-up access</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">6-month minimum commitment</span>
            </div>
          </div>
          
          <button 
            onClick={() => {
              navigate("/book-tour");
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="plan-button standard-button"
          >
            Choose This Plan
          </button>
          
          <div className="plan-badge">Most Popular</div>
        </div>

        <div className="pricing-plan saver">
          <div className="plan-header">
            <h3 className="plan-title">6-Month Saver</h3>
            <div className="plan-price">
              <span className="price-amount">$75</span>
              <span className="price-period">/month</span>
            </div>
            <div className="price-original">Was $95/month</div>
            <p className="plan-description">Pay 6 months upfront and save</p>
            <p className="plan-total">Total: $450 (Save $120!)</p>
          </div>
          
          <div className="plan-features">
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">320 sq ft secure container</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Complete weather protection</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">24/7 access</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">Drive-up access</span>
            </div>
            <div className="feature">
              <span className="feature-icon">✓</span>
              <span className="feature-text">$120 total savings</span>
            </div>
          </div>
          
          <button 
            onClick={() => {
              navigate("/book-tour");
              setTimeout(() => window.scrollTo(0, 0), 100);
            }}
            className="plan-button saver-button"
          >
            Choose This Plan
          </button>
          
          <div className="plan-badge best-value">Best Value</div>
        </div>
      </div>

      {/* Security Deposit Info */}
      <div className="security-deposit-info">
        <h3 className="deposit-title">Security Deposit Information</h3>
        <p className="deposit-description">
          We require a security deposit equal to one month's rent. For example: if you choose the $95/month plan, 
          your security deposit is $95. If you choose the $75/month plan, your security deposit is $75. 
          The good news is that your security deposit is fully refunded when your lease ends, as long as the 
          container is returned in good condition.
        </p>
      </div>

      {/* What's Included Section */}

      {/* FAQ Section */}
      <div className="pricing-faq">
        <h3 className="faq-title">Pricing Questions</h3>
        <div className="faq-grid">
          <div className="faq-item">
            <h4 className="faq-question">Are there any hidden fees?</h4>
            <p className="faq-answer">
              No hidden fees! The monthly rate plus security deposit is all you pay. 
              No setup fees, no administrative fees, no surprise charges.
            </p>
          </div>
          <div className="faq-item">
            <h4 className="faq-question">Can I pay monthly?</h4>
            <p className="faq-answer">
              Yes! The 6-Month Standard plan allows you to pay monthly at $95/month. 
              The 6-Month Saver plan requires upfront payment but saves you $120.
            </p>
          </div>
          <div className="faq-item">
            <h4 className="faq-question">What payment methods do you accept?</h4>
            <p className="faq-answer">
              We accept all major credit cards and ACH bank transfers through our 
              secure online payment portal.
            </p>
          </div>
          <div className="faq-item">
            <h4 className="faq-question">Can I extend my lease?</h4>
            <p className="faq-answer">
              Absolutely! After your initial 6-month commitment, you can continue 
              month-to-month or sign another term agreement.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="pricing-cta">
        <h3 className="cta-title">Ready to Get Started?</h3>
        <p className="cta-description">
          Book your free tour today and see your container before you commit
        </p>
        <button 
          onClick={() => {
            navigate('/book-tour');
            setTimeout(() => window.scrollTo(0, 0), 100);
          }}
          className="cta-button"
        >
          📋 Book Your Free Tour
        </button>
      </div>
    </div>
  );
};

export default PricingPage;

