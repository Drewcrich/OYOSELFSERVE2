import React from 'react';
import { FileText, AlertTriangle, Shield, DollarSign } from 'lucide-react';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FileText size={48} className="text-green-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Terms of Service</h1>
          </div>
          <p className="text-lg text-gray-600">
            These terms govern your use of our storage services and website.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Last Updated:</strong> July 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Acceptance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing our website, booking a tour, or renting a storage container from OwnYourOwnStorage, 
              you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree 
              to these terms, please do not use our services.
            </p>
            <p className="text-gray-600">
              These terms constitute a legally binding agreement between you and OwnYourOwnStorage, 
              located at 1502 Airport Road, Urbana, IL 61802.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Services Description</h2>
            <p className="text-gray-600 mb-4">
              OwnYourOwnStorage provides self-service storage container rental services, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>40ft x 8ft x 10ft (320 sq ft) storage containers</li>
              <li>24/7 access to your rented container</li>
              <li>Drive-up access for convenient loading/unloading</li>
              <li>Online booking and tour scheduling</li>
              <li>Self-service rental process with electronic agreements</li>
              <li>Secure payment processing through third-party providers</li>
            </ul>
          </section>

          {/* Rental Agreement */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Rental Agreement Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Minimum Lease Term</h3>
            <p className="text-gray-600 mb-4">
              All storage container rentals require a minimum 6-month lease commitment. After the initial 
              6-month period, the lease may continue on a month-to-month basis unless terminated by either party.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Rental Rates and Payment</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li><strong>6-Month Standard Plan:</strong> $95/month, paid monthly</li>
              <li><strong>6-Month Saver Plan:</strong> $75/month, paid 6 months in advance</li>
              <li>All rates are subject to change with 30 days written notice</li>
              <li>Payments are due on the same date each month as your lease start date</li>
              <li>Late fees of $25 apply to payments more than 5 days overdue</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Security Deposit</h3>
            <p className="text-gray-600 mb-4">
              A security deposit equal to one month's rent is required before container access is granted. 
              The security deposit will be refunded within 30 days of lease termination, provided the 
              container is returned in good condition and all obligations are met.
            </p>
          </section>

          {/* Container Use Rules */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Container Use and Restrictions</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Permitted Uses</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Storage of personal belongings, furniture, and household items</li>
              <li>Business inventory and equipment storage</li>
              <li>Documents and records (in waterproof containers)</li>
              <li>Vehicles, boats, and recreational equipment</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Prohibited Items</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <div className="flex items-center mb-2">
                <AlertTriangle size={20} className="text-red-500 mr-2" />
                <span className="font-semibold text-red-700">The following items are strictly prohibited:</span>
              </div>
              <ul className="list-disc list-inside text-red-700 space-y-1">
                <li>Hazardous materials, chemicals, or flammable substances</li>
                <li>Illegal drugs, stolen goods, or contraband</li>
                <li>Perishable food items or anything that may attract pests</li>
                <li>Live animals or plants</li>
                <li>Firearms, ammunition, or explosives</li>
                <li>Items with strong odors or that may damage other containers</li>
                <li>Anything that violates local, state, or federal laws</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Container Condition</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>You are responsible for maintaining the container in good condition</li>
              <li>Report any damage or maintenance issues immediately</li>
              <li>Do not modify, paint, or alter the container structure</li>
              <li>Keep the container clean and free of debris</li>
              <li>Ensure proper ventilation to prevent moisture damage</li>
            </ul>
          </section>

          {/* Access and Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Access and Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Access Rights</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>You have 24/7 access to your rented container</li>
              <li>Access codes are provided upon lease signing and payment</li>
              <li>You are responsible for keeping access codes confidential</li>
              <li>Notify us immediately if you believe your access code has been compromised</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Security Measures</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Facility is monitored for security purposes</li>
              <li>You are responsible for securing your own belongings within the container</li>
              <li>We recommend using additional locks for valuable items</li>
              <li>Report any suspicious activity immediately</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Right of Access</h3>
            <p className="text-gray-600 mb-4">
              We reserve the right to access your container in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Emergency situations or safety concerns</li>
              <li>Suspected violation of these terms</li>
              <li>Non-payment of rent or fees</li>
              <li>Legal requirements or court orders</li>
              <li>Maintenance or inspection needs (with reasonable notice)</li>
            </ul>
          </section>

          {/* Liability and Insurance */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Liability and Insurance</h2>
            
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <div className="flex items-center mb-2">
                <Shield size={20} className="text-yellow-600 mr-2" />
                <span className="font-semibold text-yellow-800">Important Liability Information</span>
              </div>
              <p className="text-yellow-800">
                You store your belongings at your own risk. We strongly recommend obtaining insurance 
                coverage for your stored items.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Our Liability Limitations</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>We are not liable for damage to or loss of your stored items</li>
              <li>We are not responsible for theft, fire, water damage, or natural disasters</li>
              <li>Our liability is limited to the amount of rent paid for the affected period</li>
              <li>We are not liable for consequential or indirect damages</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Your Responsibilities</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Obtain appropriate insurance coverage for your stored items</li>
              <li>Inspect your belongings regularly</li>
              <li>Report any damage or issues immediately</li>
              <li>Indemnify us against claims arising from your stored items</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Insurance Recommendations</h3>
            <p className="text-gray-600">
              We recommend checking with your homeowner's, renter's, or business insurance provider 
              to see if your stored items are covered. If not, consider purchasing additional coverage 
              specifically for stored items.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Payment Methods</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Credit cards (Visa, MasterCard, American Express, Discover)</li>
              <li>ACH bank transfers</li>
              <li>Payments processed through our secure Rent Manager portal</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Payment Schedule</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>First month's rent and security deposit due before container access</li>
              <li>Monthly payments due on the same date each month</li>
              <li>6-Month Saver plan requires full 6-month payment in advance</li>
              <li>Automatic payment setup is available and recommended</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Late Payments and Fees</h3>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <ul className="list-disc list-inside text-red-700 space-y-2">
                <li><strong>Late Fee:</strong> $25 for payments more than 5 days overdue</li>
                <li><strong>Returned Payment Fee:</strong> $35 for insufficient funds or declined payments</li>
                <li><strong>Access Suspension:</strong> Access may be suspended for payments more than 10 days overdue</li>
                <li><strong>Default:</strong> Lease may be terminated for payments more than 30 days overdue</li>
              </ul>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Lease Termination</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Termination by You</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>30 days written notice required for termination</li>
              <li>Must complete minimum 6-month lease commitment</li>
              <li>Container must be completely emptied and cleaned</li>
              <li>Final inspection required before security deposit refund</li>
              <li>Prorated rent refunds not available for prepaid plans</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Termination by Us</h3>
            <p className="text-gray-600 mb-4">We may terminate your lease for:</p>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Non-payment of rent or fees</li>
              <li>Violation of these terms of service</li>
              <li>Storage of prohibited items</li>
              <li>Damage to the container or facility</li>
              <li>Illegal activities or behavior</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Abandoned Property</h3>
            <p className="text-gray-600">
              If your lease is terminated and you fail to remove your belongings within 30 days, 
              your property may be considered abandoned. We may dispose of abandoned property 
              and charge you for removal and disposal costs.
            </p>
          </section>

          {/* Website Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Website Use Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Acceptable Use</h3>
            <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
              <li>Use the website only for legitimate business purposes</li>
              <li>Provide accurate and truthful information</li>
              <li>Respect intellectual property rights</li>
              <li>Do not attempt to hack, disrupt, or damage the website</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Intellectual Property</h3>
            <p className="text-gray-600 mb-4">
              All content on our website, including text, images, logos, and design, is owned by 
              OwnYourOwnStorage or our licensors and is protected by copyright and trademark laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Third-Party Services</h3>
            <p className="text-gray-600">
              Our website uses third-party services (JotForm, Rent Manager, etc.) that have their 
              own terms of service. Your use of these services is subject to their respective terms.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Governing Law</h3>
            <p className="text-gray-600 mb-4">
              These terms are governed by the laws of the State of Illinois, without regard to 
              conflict of law principles.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Jurisdiction</h3>
            <p className="text-gray-600 mb-4">
              Any legal disputes will be resolved in the courts of Champaign County, Illinois.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Mediation</h3>
            <p className="text-gray-600">
              Before pursuing legal action, we encourage attempting to resolve disputes through 
              good faith negotiation or mediation.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-600 mb-4">
              We may update these Terms of Service from time to time. Significant changes will be 
              communicated via email or posted notice. Continued use of our services after changes 
              constitutes acceptance of the updated terms.
            </p>
            <p className="text-gray-600">
              For existing leases, material changes will not take effect until lease renewal unless 
              required by law.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Severability</h2>
            <p className="text-gray-600">
              If any provision of these terms is found to be unenforceable, the remaining provisions 
              will continue in full force and effect.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these Terms of Service or our storage services, contact us:
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">OwnYourOwnStorage</p>
              <p className="text-gray-700 mb-1"><strong>Address:</strong> 1502 Airport Road, Urbana, IL 61802</p>
              <p className="text-gray-700"><strong>Email:</strong> drewcrichardson1999@gmail.com</p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="mb-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Acknowledgment</h3>
              <p className="text-blue-700">
                By using our services, you acknowledge that you have read, understood, and agree 
                to be bound by these Terms of Service and our Privacy Policy.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;

