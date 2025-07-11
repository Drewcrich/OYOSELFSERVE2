const BookTourPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📋 Book Your Self-Service Tour
          </h1>
          <p className="text-xl opacity-90">
            Quick form • Instant confirmation • Tour in minutes
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Fill Form</h3>
            <p className="text-gray-600">1-minute booking form</p>
          </div>
          
          <div className="text-center bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Get Details</h3>
            <p className="text-gray-600">Text with location, number & access code</p>
          </div>
          
          <div className="text-center bg-white rounded-lg p-8 shadow-lg">
            <div className="w-16 h-16 bg-purple-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Tour & Rent</h3>
            <p className="text-gray-600">Self-guided tour</p>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            📋 Tour Booking Form
          </h2>
          
          <div className="mb-6 p-4 bg-green-50 rounded-lg">
            <div className="space-y-2 text-sm text-green-800">
              <div className="flex items-center">
                <span className="text-green-600 mr-2">✅</span>
                You'll receive instant email confirmation
              </div>
              <div className="flex items-center">
                <span className="text-blue-600 mr-2">📱</span>
                Container details sent via text within 30 minutes
              </div>
              <div className="flex items-center">
                <span className="text-purple-600 mr-2">🔄</span>
                After form submission, you'll be automatically redirected to your booking confirmation
              </div>
            </div>
          </div>

          {/* JotForm Embed */}
          <div className="w-full">
            <iframe
              title="Tour Booking Form"
              onLoad={() => {
                console.log('JotForm iframe loaded successfully');
              }}
              allowTransparency="true"
              allow="geolocation; microphone; camera; fullscreen"
              src="https://form.jotform.com/251895754464067?redirect=https://ownyourownselfserve.com/booking-confirmed"
              frameBorder="0"
              style={{
                width: '100%',
                height: '1350px',
                border: 'none',
                borderRadius: '8px',
                display: 'block'
              }}
              scrolling="no"
            />
          </div>
        </div>

        {/* What Happens Next Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">✉️</div>
            <h3 className="font-semibold mb-2">Instant Confirmation</h3>
            <p className="text-sm text-gray-600 mb-2">Confirmation sent to your email immediately after booking</p>
            <span className="text-green-600 font-medium">Instant</span>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="font-semibold mb-2">Container Details</h3>
            <p className="text-sm text-gray-600 mb-2">We'll text you exact container location (with photo), container number, and lock combination</p>
            <span className="text-blue-600 font-medium">Within 30 minutes</span>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">🔑</div>
            <h3 className="font-semibold mb-2">Self-Guided Tour</h3>
            <p className="text-sm text-gray-600 mb-2">Visit and inspect your container at your convenience</p>
            <span className="text-purple-600 font-medium">At your scheduled time</span>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <div className="text-3xl mb-3">📝</div>
            <h3 className="font-semibold mb-2">Easy Rental</h3>
            <p className="text-sm text-gray-600 mb-2">If you love it, complete the rental process online</p>
            <span className="text-green-600 font-medium">Same day if desired</span>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Self-Service Storage?</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Traditional Process */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-red-800">Traditional Storage Rental</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Visit Office", desc: "Drive to facility during business hours", time: "30+ minutes travel time" },
                  { step: "2", title: "Wait in Line", desc: "Wait for staff availability", time: "10-20 minutes waiting" },
                  { step: "3", title: "Paperwork", desc: "Fill out forms, provide ID, credit check", time: "15-30 minutes paperwork" },
                  { step: "4", title: "Tour with Staff", desc: "Guided tour during business hours only", time: "10-15 minutes tour" },
                  { step: "5", title: "Payment Setup", desc: "More paperwork, payment processing", time: "10-15 minutes setup" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                      <p className="text-xs text-red-600 font-medium">⏱️ {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-red-100 rounded-lg">
                <p className="font-bold text-red-800">Total Time: 75-120 minutes</p>
                <p className="text-sm text-red-700">Plus travel time and scheduling constraints</p>
              </div>
            </div>

            {/* Our Process */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6 text-green-800">Our Self-Service Process</h3>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Book Online", desc: "1-minute booking form from anywhere", time: "1 minute" },
                  { step: "2", title: "Get Details", desc: "Receive container info via text", time: "Within 30 minutes" },
                  { step: "3", title: "Self-Guided Tour", desc: "Tour at your convenience, 24/7", time: "5-10 minutes" },
                  { step: "4", title: "Rent Online", desc: "Electronic lease and payment setup", time: "5-8 minutes" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                      <p className="text-xs text-green-600 font-medium">⏱️ {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="font-bold text-green-800">Total Time: 11-19 minutes</p>
                <p className="text-sm text-green-700">No travel required, available 24/7</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">80%</div>
              <p className="font-semibold">Less Time Required</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <p className="font-semibold">Available Anytime</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
              <p className="font-semibold">Office Visits Needed</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-green-600">Booking Process</h3>
              <div className="space-y-3">
                <h4 className="font-medium">What happens after I submit the booking form?</h4>
                <h4 className="font-medium">How quickly will I receive container information?</h4>
                <h4 className="font-medium">Can I book a tour outside business hours?</h4>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Tour Experience</h3>
              <div className="space-y-3">
                <h4 className="font-medium">What do I need to bring for the tour?</h4>
                <h4 className="font-medium">How long does the tour take?</h4>
                <h4 className="font-medium">Can I tour multiple containers?</h4>
                <h4 className="font-medium">What if the container doesn't meet my needs?</h4>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Rental Process</h3>
              <div className="space-y-3">
                <h4 className="font-medium">How does the payment process work?</h4>
                <h4 className="font-medium">What payment methods do you accept?</h4>
                <h4 className="font-medium">What happens if I decide to rent?</h4>
                <h4 className="font-medium">Is there a security deposit required?</h4>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-600">Security & Safety</h3>
              <div className="space-y-3">
                <h4 className="font-medium">Is my banking information secure?</h4>
                <h4 className="font-medium">How secure are the storage containers?</h4>
                <h4 className="font-medium">What if I lose my access code?</h4>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">Still have questions?</h3>
            <p className="text-gray-600">We're here to help! Contact us anytime for personalized assistance.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTourPage;

