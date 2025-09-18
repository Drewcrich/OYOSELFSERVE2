import React from 'react';
import { DollarSign, Calendar, AlertTriangle, CheckCircle, Mail, MapPin, Shield, Clock, CreditCard, FileText } from 'lucide-react';

const RefundPolicyPageIndustrial = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      {/* Industrial Metal Texture Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/industrial_metal_texture.png')`,
          backgroundSize: 'cover'
        }}
      />
      
      {/* Container Corrugated Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url('/container_corrugated_texture.png')`,
          backgroundSize: '150px auto',
          backgroundRepeat: 'repeat'
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl py-20 relative z-10">
        
        {/* Industrial Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-600 text-white px-8 py-4 mb-6 border-4 border-yellow-400 shadow-xl">
            <div className="flex items-center justify-center">
              <DollarSign size={48} className="text-yellow-400 mr-4" />
              <h1 className="text-4xl font-black uppercase tracking-wider">Refund & Cancellation Policy</h1>
            </div>
          </div>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-bold uppercase tracking-wide">
            Clear policies for deposits, refunds, and lease cancellations
          </p>
          <div className="bg-yellow-500 text-black px-6 py-2 mt-4 inline-block border-4 border-black shadow-xl transform rotate-1">
            <p className="font-black uppercase">Last Updated: July 10, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Policy Overview - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <FileText size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Policy Overview</h2>
            </div>
            
            <div className="bg-blue-900 border-4 border-blue-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase text-center">💰 Fair & Transparent Refund Policy</h3>
              <p className="text-gray-300 text-lg font-bold mb-6">
                This Refund & Cancellation Policy explains our procedures for security deposit returns, 
                lease cancellations, early termination, and refund processing for RentYourOwnStorage container rental services.
              </p>
              <p className="text-gray-300 text-lg font-bold">
                As a local family business, we believe in fair treatment and transparent policies. 
                We want you to understand exactly what to expect regarding refunds and cancellations.
              </p>
            </div>
          </section>

          {/* Security Deposit Refunds - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Shield size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Security Deposit Refunds</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-900 border-4 border-green-600 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">✅ Full Refund Conditions</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">💰</span>
                    <div>
                      <strong className="text-white">$95 Security Deposit:</strong> Fully refundable when conditions are met
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🧹</span>
                    <div>
                      <strong className="text-white">Clean Container:</strong> Remove all belongings and debris
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🔧</span>
                    <div>
                      <strong className="text-white">No Damage:</strong> Container returned in original condition
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📅</span>
                    <div>
                      <strong className="text-white">Proper Notice:</strong> 30-day written notice provided
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">💳</span>
                    <div>
                      <strong className="text-white">No Outstanding Balance:</strong> All rent and fees paid
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-900 border-4 border-yellow-600 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-yellow-400 mb-6 uppercase">⏰ Refund Timeline</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Inspection:</strong> Container inspected within 3 business days
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">📧</span>
                    <div>
                      <strong className="text-white">Notification:</strong> Refund decision emailed within 5 business days
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">💰</span>
                    <div>
                      <strong className="text-white">Processing:</strong> Refund processed within 7-10 business days
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-4 text-2xl">🏦</span>
                    <div>
                      <strong className="text-white">Method:</strong> Refunded to original payment method
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Lease Cancellation - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <Calendar size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Lease Cancellation</h2>
            </div>
            
            <div className="space-y-8">
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">Standard Cancellation Process</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📧</span>
                    <div>
                      <strong className="text-white">Written Notice:</strong> Email 30-day notice to 3055092759
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📅</span>
                    <div>
                      <strong className="text-white">End Date:</strong> Specify your desired lease end date (minimum 30 days)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🧹</span>
                    <div>
                      <strong className="text-white">Clean Out:</strong> Remove all belongings by the end date
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🔑</span>
                    <div>
                      <strong className="text-white">Final Access:</strong> Provide access for final inspection
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">💰</span>
                    <div>
                      <strong className="text-white">Final Payment:</strong> Pay any outstanding balance
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900 border-4 border-red-600 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-red-400 mb-6 uppercase">⚠️ Early Termination</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-black text-yellow-400 mb-4 uppercase">6-Month Minimum Term:</h4>
                    <ul className="space-y-3 text-gray-300 text-lg">
                      <li className="flex items-start">
                        <span className="text-red-400 mr-4 text-2xl">📋</span>
                        <div><strong>Contract Requirement:</strong> All leases have 6-month minimum</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-4 text-2xl">💰</span>
                        <div><strong>Early Termination Fee:</strong> Remaining months must be paid</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-400 mr-4 text-2xl">🚫</span>
                        <div><strong>No Partial Refunds:</strong> Prepaid rent is non-refundable</div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-yellow-400 mb-4 uppercase">Exceptions:</h4>
                    <ul className="space-y-3 text-gray-300 text-lg">
                      <li className="flex items-start">
                        <span className="text-green-400 mr-4 text-2xl">🏥</span>
                        <div><strong>Medical Emergency:</strong> Documented medical necessity</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-4 text-2xl">💼</span>
                        <div><strong>Job Relocation:</strong> Employment-related move over 50 miles</div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-400 mr-4 text-2xl">🎓</span>
                        <div><strong>Student Graduation:</strong> UIUC students graduating early</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Refund Processing - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <CreditCard size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Refund Processing</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-900 border-4 border-green-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-green-400 mb-6 uppercase">Payment Methods</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">💳</span>
                    <div>
                      <strong className="text-white">Credit Cards:</strong> 3-5 business days to appear on statement
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">🏦</span>
                    <div>
                      <strong className="text-white">Debit Cards:</strong> 5-7 business days to appear in account
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">📧</span>
                    <div>
                      <strong className="text-white">Bank Transfer:</strong> 7-10 business days for processing
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-4 text-2xl">✉️</span>
                    <div>
                      <strong className="text-white">Check:</strong> Mailed within 10 business days if needed
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-900 border-4 border-blue-500 p-8 shadow-xl">
                <h3 className="text-2xl font-black text-blue-400 mb-6 uppercase">Refund Tracking</h3>
                <ul className="space-y-4 text-gray-300 text-lg">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📧</span>
                    <div>
                      <strong className="text-white">Email Confirmation:</strong> Refund processing notification sent
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">🔢</span>
                    <div>
                      <strong className="text-white">Reference Number:</strong> Tracking number provided for all refunds
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📞</span>
                    <div>
                      <strong className="text-white">Status Updates:</strong> Contact us for refund status inquiries
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-4 text-2xl">📋</span>
                    <div>
                      <strong className="text-white">Documentation:</strong> Keep all refund emails for your records
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Deductions from Deposit - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <AlertTriangle size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Deposit Deductions</h2>
            </div>
            
            <div className="bg-red-900 border-4 border-red-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-red-400 mb-6 uppercase text-center">⚠️ When Deposits May Be Withheld</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4 uppercase">Damage Charges:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🔧</span>
                      <div><strong>Container Damage:</strong> Dents, holes, or structural damage</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🚪</span>
                      <div><strong>Door Problems:</strong> Damaged locks, hinges, or door mechanisms</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🎨</span>
                      <div><strong>Paint/Graffiti:</strong> Unauthorized markings or modifications</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🔥</span>
                      <div><strong>Fire/Smoke Damage:</strong> From prohibited items or activities</div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-black text-yellow-400 mb-4 uppercase">Cleaning Fees:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🧹</span>
                      <div><strong>Excessive Cleaning:</strong> $50-150 depending on condition</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🗑️</span>
                      <div><strong>Debris Removal:</strong> $25-100 for items left behind</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🦨</span>
                      <div><strong>Odor Treatment:</strong> $75-200 for persistent odors</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-4 text-2xl">🐛</span>
                      <div><strong>Pest Control:</strong> $100-300 if pest treatment needed</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Dispute Resolution - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 border-4 border-yellow-400 p-4 mr-6 shadow-xl">
                <CheckCircle size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-3xl font-black text-yellow-400 uppercase tracking-wide">Dispute Resolution</h2>
            </div>
            
            <div className="bg-green-900 border-4 border-green-600 p-8 shadow-xl">
              <h3 className="text-2xl font-black text-green-400 mb-6 uppercase text-center">🤝 Fair Resolution Process</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-black text-orange-400 mb-4 uppercase">If You Disagree:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-4 text-2xl">📧</span>
                      <div><strong>Contact Us:</strong> Email your concerns within 10 days</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-4 text-2xl">📸</span>
                      <div><strong>Provide Evidence:</strong> Photos or documentation supporting your case</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-4 text-2xl">🤝</span>
                      <div><strong>Discussion:</strong> We'll review and discuss the situation</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-4 text-2xl">⚖️</span>
                      <div><strong>Fair Resolution:</strong> Reasonable solution for both parties</div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-black text-orange-400 mb-4 uppercase">Our Commitment:</h4>
                  <ul className="space-y-3 text-gray-300 text-lg">
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-4 text-2xl">👨‍👩‍👧‍👦</span>
                      <div><strong>Family Business:</strong> We treat customers like family</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-4 text-2xl">💬</span>
                      <div><strong>Open Communication:</strong> Honest discussion about all issues</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-4 text-2xl">⚖️</span>
                      <div><strong>Fair Treatment:</strong> Reasonable and transparent decisions</div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-4 text-2xl">🏆</span>
                      <div><strong>Reputation:</strong> Our local reputation depends on fairness</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information - Industrial Style */}
          <section className="bg-gray-800 border-4 border-gray-600 p-10 shadow-2xl">
            <div className="text-center">
              <div className="inline-block bg-orange-600 text-white px-6 py-3 border-4 border-yellow-400 shadow-xl transform -rotate-1">
                <h2 className="text-3xl font-black uppercase tracking-wide">Refund Questions?</h2>
              </div>
              
              <div className="mt-8 bg-gray-900 border-4 border-gray-700 p-8 shadow-xl">
                <p className="text-gray-300 text-xl font-bold mb-6">
                  Contact our family business directly about refunds, deposits, or cancellations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <Mail size={24} className="mr-4 text-orange-400" />
                    <span>3055092759</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-300 text-lg font-bold">
                    <MapPin size={24} className="mr-4 text-orange-400" />
                    <span>1502 Airport Road, Urbana, IL 61802</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPageIndustrial;

