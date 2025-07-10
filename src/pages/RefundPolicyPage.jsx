import React from 'react';
import { DollarSign, Calendar, AlertTriangle, CheckCircle, Mail, MapPin } from 'lucide-react';

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <DollarSign size={48} className="text-green-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Refund & Cancellation Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Clear policies for security deposits, refunds, and lease cancellations.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            <strong>Last Updated:</strong> July 10, 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          
          {/* Overview */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Overview</h2>
            <p className="text-gray-600 mb-4">
              This Refund & Cancellation Policy explains our procedures for security deposit returns, 
              lease cancellations, early termination, and refund processing for OwnYourOwnStorage services.
            </p>
            <p className="text-gray-600">
              We are committed to fair and transparent policies that protect both our customers and our business. 
              Please read this policy carefully before signing your lease agreement.
            </p>
          </section>

          {/* Security Deposit */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <CheckCircle size={24} className="text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Security Deposit Policy</h2>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Security Deposit Amount</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800 font-semibold">
                Security Deposit: Equal to one month's rent
              </p>
              <ul className="text-blue-700 mt-2 space-y-1">
                <li>• 6-Month Standard Plan: $95 security deposit</li>
                <li>• 6-Month Saver Plan: $75 security deposit</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">When Security Deposit is Required</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>Security deposit must be paid before container access is granted</li>
              <li>Payment is required along with the first month's rent</li>
              <li>Deposit secures your container and covers potential damages or unpaid rent</li>
              <li>No container access will be provided until deposit is received and processed</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Security Deposit Return Process</h3>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
              <p className="text-green-800 font-semibold mb-2">Standard Return Timeline: 30 Days</p>
              <p className="text-green-700">
                Your security deposit will be refunded within 30 days of lease termination, 
                provided all conditions are met.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Conditions for Full Deposit Return</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Container is completely emptied of all belongings</li>
              <li>Container is left in clean, undamaged condition</li>
              <li>All rent and fees are paid in full</li>
              <li>Proper 30-day notice was given for lease termination</li>
              <li>Keys/access codes are returned (if applicable)</li>
              <li>Final inspection is completed satisfactorily</li>
            </ul>
          </section>

          {/* Deductions from Security Deposit */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <AlertTriangle size={24} className="text-yellow-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Security Deposit Deductions</h2>
            </div>
            
            <p className="text-gray-600 mb-4">
              The following items may be deducted from your security deposit:
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Damage-Related Deductions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>Container Damage:</strong> Repairs to walls, floors, doors, or locks</li>
              <li><strong>Structural Modifications:</strong> Unauthorized alterations or installations</li>
              <li><strong>Excessive Wear:</strong> Damage beyond normal wear and tear</li>
              <li><strong>Vandalism or Graffiti:</strong> Removal and repair costs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Cleaning-Related Deductions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>Deep Cleaning:</strong> Professional cleaning if container is left dirty</li>
              <li><strong>Debris Removal:</strong> Cost to remove abandoned items or trash</li>
              <li><strong>Pest Control:</strong> Treatment for pest infestations caused by improper storage</li>
              <li><strong>Odor Removal:</strong> Professional treatment for strong odors</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Financial Deductions</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Unpaid Rent:</strong> Any outstanding monthly payments</li>
              <li><strong>Late Fees:</strong> Accumulated late payment charges</li>
              <li><strong>Early Termination Fees:</strong> If applicable per lease terms</li>
              <li><strong>Administrative Costs:</strong> Processing fees for damage assessment</li>
            </ul>
          </section>

          {/* Lease Cancellation */}
          <section className="mb-8">
            <div className="flex items-center mb-4">
              <Calendar size={24} className="text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800">Lease Cancellation Policy</h2>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Standard Cancellation Process</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="font-semibold text-gray-800 mb-2">Required Notice Period: 30 Days</p>
              <p className="text-gray-600">
                You must provide written notice at least 30 days before your intended move-out date.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">How to Cancel Your Lease</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
              <li>Send written cancellation notice to drewcrichardson1999@gmail.com</li>
              <li>Include your name, container number, and intended move-out date</li>
              <li>Ensure notice is received at least 30 days before move-out</li>
              <li>Wait for confirmation of your cancellation request</li>
              <li>Schedule final inspection before your move-out date</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Minimum Lease Commitment</h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
              <p className="text-yellow-800 font-semibold mb-2">6-Month Minimum Lease Term</p>
              <p className="text-yellow-700">
                All storage container rentals require a minimum 6-month lease commitment. 
                Early termination may result in additional fees.
              </p>
            </div>
          </section>

          {/* Early Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Early Termination Policy</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Early Termination Conditions</h3>
            <p className="text-gray-600 mb-4">
              If you need to terminate your lease before the 6-month minimum commitment:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>30-day written notice is still required</li>
              <li>You remain responsible for rent through the minimum 6-month period</li>
              <li>No prorated refunds for prepaid plans (6-Month Saver)</li>
              <li>Security deposit return follows standard procedures</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Exceptions for Early Termination</h3>
            <p className="text-gray-600 mb-4">
              Early termination without penalty may be allowed in these circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li><strong>Military Deployment:</strong> Active duty military orders (documentation required)</li>
              <li><strong>Job Relocation:</strong> Employment transfer more than 50 miles away</li>
              <li><strong>Medical Emergency:</strong> Serious illness or disability (documentation required)</li>
              <li><strong>Facility Issues:</strong> If we cannot provide agreed-upon services</li>
            </ul>
          </section>

          {/* Refund Processing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Refund Processing</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Refund Timeline</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                <div>
                  <p className="font-semibold text-blue-800">Final Inspection (Within 5 days of move-out)</p>
                  <p className="text-blue-600 text-sm">We inspect the container and assess any damages or cleaning needs</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                <div>
                  <p className="font-semibold text-green-800">Deposit Calculation (Within 15 days)</p>
                  <p className="text-green-600 text-sm">We calculate any deductions and prepare refund documentation</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                <div>
                  <p className="font-semibold text-purple-800">Refund Issued (Within 30 days total)</p>
                  <p className="text-purple-600 text-sm">Refund is processed to your original payment method</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Refund Methods</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li><strong>Original Payment Method:</strong> Refunds are issued to the same card/account used for payment</li>
              <li><strong>ACH Transfer:</strong> For bank payments, refunds go back to the same account</li>
              <li><strong>Check:</strong> If original payment method is unavailable, we may issue a check</li>
              <li><strong>Processing Time:</strong> 3-5 business days for electronic refunds, 7-10 days for checks</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Refund Documentation</h3>
            <p className="text-gray-600 mb-4">
              You will receive detailed documentation including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Itemized list of any deductions from security deposit</li>
              <li>Photos of container condition (if applicable)</li>
              <li>Receipts for any repair or cleaning costs</li>
              <li>Final account statement showing all charges and credits</li>
            </ul>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">If You Disagree with Deductions</h3>
            <p className="text-gray-600 mb-4">
              If you believe deductions from your security deposit are unfair or incorrect:
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-4">
              <li>Contact us within 10 days of receiving your refund statement</li>
              <li>Provide specific details about which charges you dispute</li>
              <li>Submit any supporting documentation or photos</li>
              <li>We will review your dispute within 5 business days</li>
              <li>If needed, we may arrange for a third-party inspection</li>
            </ol>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Mediation Process</h3>
            <p className="text-gray-600 mb-4">
              For unresolved disputes, we encourage mediation before legal action:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Both parties agree to use a neutral third-party mediator</li>
              <li>Mediation costs are split equally between parties</li>
              <li>Mediation decisions are binding if both parties agree</li>
              <li>Legal action may be pursued if mediation fails</li>
            </ul>
          </section>

          {/* Special Circumstances */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Special Circumstances</h2>
            
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Abandoned Property</h3>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
              <p className="text-red-800 font-semibold mb-2">Important Notice:</p>
              <p className="text-red-700">
                If you fail to remove your belongings within 30 days of lease termination, 
                your property may be considered abandoned.
              </p>
            </div>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
              <li>We will attempt to contact you about abandoned property</li>
              <li>Storage and disposal costs will be deducted from your security deposit</li>
              <li>Any remaining deposit will be forfeited after 60 days</li>
              <li>We are not responsible for abandoned items after disposal</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mb-3">Emergency Situations</h3>
            <p className="text-gray-600 mb-4">
              In case of emergencies affecting your ability to access or maintain your storage:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Contact us immediately to discuss your situation</li>
              <li>We may offer temporary payment deferrals or modified terms</li>
              <li>Documentation may be required for emergency considerations</li>
              <li>Each situation will be evaluated on a case-by-case basis</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About Refunds or Cancellations</h2>
            <p className="text-gray-600 mb-4">
              If you have questions about this policy or need to process a cancellation or refund:
            </p>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-800 mb-2">OwnYourOwnStorage</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Mail size={16} className="mr-2 text-green-500" />
                  <span><strong>Email:</strong> drewcrichardson1999@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <MapPin size={16} className="mr-2 text-green-500" />
                  <span><strong>Address:</strong> 1502 Airport Road, Urbana, IL 61802</span>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Policy Updates</h2>
            <p className="text-gray-600 mb-4">
              This Refund & Cancellation Policy may be updated from time to time. Changes will:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Be posted on our website with an updated "Last Updated" date</li>
              <li>Be communicated to existing customers via email</li>
              <li>Not affect existing lease agreements unless required by law</li>
              <li>Take effect 30 days after notification for new agreements</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;

