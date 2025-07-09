import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Patty Hubert",
      rating: 5,
      text: "It is close to where I live. The management is very friendly and always ready to help. I do recommend Own Your Own Storage. There is a storage size that fits your needs.",
      profileImage: "/patty-profile.png",
      badge: "Verified Customer"
    },
    {
      id: 2,
      name: "Jacklyn Harriger",
      rating: 5,
      text: "Management is nice and the units are clean. I would recommend it as long as you don't need anything temperature-controlled. I have had a small unit here for several months now and I've had no problems with safety as of yet. I did bring up one question to management and it was addressed under a week. I would definitely recommend you in here it's a nice place.",
      profileImage: "/jacklyn-profile.png",
      badge: "Verified Customer"
    },
    {
      id: 3,
      name: "Shawn Ballinger",
      rating: 5,
      text: "I have a buddy who has one he says it's good storage unit",
      profileImage: "/shawn-profile.png",
      badge: "Verified Customer"
    },
    {
      id: 4,
      name: "Kimberly Allison",
      rating: 5,
      text: "Nice clean storage facility. Easy to get to. Easy to get in and out of.",
      profileImage: "/kimberly-profile.png",
      badge: "Verified Customer"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Customers</span> Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real customers who chose the smarter way to store
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-8">
              {/* Profile Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={review.profileImage}
                    alt={`${review.name} profile`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {review.name}
                  </h3>
                  
                  {/* Star Rating */}
                  <div className="flex items-center mb-3">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-base italic">
                  "{review.text}"
                </p>
              </div>

              {/* Badge */}
              <div className="flex items-center text-sm text-green-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {review.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;

