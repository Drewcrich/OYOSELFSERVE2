import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart, Shield, Clock, MapPin, Mail, Star, Award } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-green-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users size={48} className="text-green-500 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about the story behind OwnYourOwnStorage and our commitment to providing 
            affordable, convenient storage solutions in Urbana, Illinois.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          
          {/* Our Story */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Heart size={32} className="text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  OwnYourOwnStorage was born from a simple idea: storage should be easy, affordable, 
                  and accessible to everyone. As longtime residents of Urbana, we saw firsthand the 
                  challenges that University of Illinois students, local families, and businesses 
                  faced when looking for reliable storage solutions.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Traditional storage facilities often required long-term commitments, complicated 
                  paperwork, and inconvenient office hours. We knew there had to be a better way.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  That's why we created a storage experience that puts convenience first: book online 
                  in minutes, get instant access, and enjoy 24/7 availability without the hassle of 
                  traditional storage facilities.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Founded on Simple Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700"><strong>Simplicity:</strong> No complicated contracts or hidden fees</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700"><strong>Accessibility:</strong> 24/7 access when you need it</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700"><strong>Affordability:</strong> Fair pricing for everyone</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700"><strong>Community:</strong> Supporting local students and businesses</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Our Mission */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Shield size={32} className="text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </div>
            
            <div className="text-center">
              <div className="bg-green-50 p-8 rounded-lg mb-6">
                <p className="text-2xl font-semibold text-gray-800 mb-4">
                  "To provide secure, affordable, and convenient storage solutions that adapt to our customers' lives."
                </p>
                <p className="text-gray-600 text-lg">
                  We believe storage should work around your schedule, not the other way around.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={32} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Convenience First</h3>
                  <p className="text-gray-600">
                    Book online, access anytime, no office visits required. Storage that fits your busy life.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Security & Trust</h3>
                  <p className="text-gray-600">
                    Heavy-duty containers with secure access codes. Your belongings are safe with us.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart size={32} className="text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Focus</h3>
                  <p className="text-gray-600">
                    Proudly serving University of Illinois students, local families, and businesses.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Star size={32} className="text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Why Choose OwnYourOwnStorage?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What Makes Us Different</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">No Office Visits Required:</strong>
                      <span className="text-gray-600"> Complete everything online, from booking to payment</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Instant Access:</strong>
                      <span className="text-gray-600"> Get your access code within 30 minutes of booking</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Transparent Pricing:</strong>
                      <span className="text-gray-600"> No hidden fees, clear pricing, special student rates</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Flexible Terms:</strong>
                      <span className="text-gray-600"> 6-month minimum with options to extend as needed</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <strong className="text-gray-800">Local Expertise:</strong>
                      <span className="text-gray-600"> We understand the unique needs of the Urbana community</span>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Perfect For</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-blue-800">University Students</h4>
                    <p className="text-gray-600 text-sm">Summer storage, semester abroad, dorm transitions</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-semibold text-green-800">Local Families</h4>
                    <p className="text-gray-600 text-sm">Moving, downsizing, seasonal items, renovations</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-purple-800">Small Businesses</h4>
                    <p className="text-gray-600 text-sm">Inventory overflow, equipment, documents, supplies</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-orange-800">Anyone Who Values Convenience</h4>
                    <p className="text-gray-600 text-sm">24/7 access, no office hours, digital-first experience</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Commitment */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Award size={32} className="text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Our Commitment to You</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Security</h3>
                <p className="text-gray-600 text-sm">Heavy-duty containers with secure locks and personal access codes</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Availability</h3>
                <p className="text-gray-600 text-sm">24/7 access to your belongings whenever you need them</p>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
                <p className="text-gray-600 text-sm">Responsive customer service and assistance when you need it</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality</h3>
                <p className="text-gray-600 text-sm">Well-maintained containers with complete weather protection</p>
              </div>
            </div>
          </section>

          {/* Location & Contact */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MapPin size={32} className="text-green-500 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Visit Us</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Conveniently Located in Urbana</h3>
                <p className="text-gray-600 mb-4">
                  Our storage facility is strategically located on Airport Road, providing easy access 
                  for University of Illinois students and Urbana residents. The location offers 
                  convenient drive-up access to all containers.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center mb-2">
                    <MapPin size={20} className="text-green-500 mr-2" />
                    <span className="font-semibold text-gray-800">Address</span>
                  </div>
                  <p className="text-gray-700">1502 Airport Road, Urbana, IL 61802</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Mail size={20} className="text-blue-500 mr-2" />
                    <span className="font-semibold text-gray-800">Contact</span>
                  </div>
                  <p className="text-gray-700">drewcrichardson1999@gmail.com</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Easy Access</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span><strong>Close to Campus:</strong> Just minutes from University of Illinois</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span><strong>Major Roads:</strong> Easy access from I-74 and local highways</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span><strong>Drive-Up Access:</strong> Pull right up to your container</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span><strong>Well-Lit:</strong> Safe access during evening hours</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                    <span><strong>Ample Parking:</strong> Space for moving trucks and trailers</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-500">
                  <p className="text-yellow-800 font-semibold mb-1">Business Hours</p>
                  <p className="text-yellow-700 text-sm">
                    <strong>Container Access:</strong> 24/7<br />
                    <strong>Customer Support:</strong> Monday-Friday 9AM-6PM
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join hundreds of satisfied customers who've discovered a better way to store their belongings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-tour"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                📋 Book Your Free Tour
              </Link>
              <Link 
                to="/pricing"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
              >
                💰 View Pricing
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

