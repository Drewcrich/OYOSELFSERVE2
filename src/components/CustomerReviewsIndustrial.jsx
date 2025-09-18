import React from 'react';
import { Shield, CheckCircle, Star } from 'lucide-react';

const CustomerReviewsIndustrial = () => {
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
      <Star 
        key={i} 
        size={20} 
        className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`}
      />
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Reviews Grid - Industrial Style */}
      <div className="grid md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="bg-gray-800 border-4 border-gray-600 p-8 shadow-2xl relative">
            {/* Industrial Corner Accent */}
            <div className="absolute top-0 left-0 w-8 h-8 bg-orange-600 border-2 border-yellow-400"></div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-orange-600 border-2 border-yellow-400"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-orange-600 border-2 border-yellow-400"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-orange-600 border-2 border-yellow-400"></div>

            {/* Profile Header - Industrial Style */}
            <div className="flex items-start space-x-6 mb-8">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gray-700 border-4 border-orange-600 rounded-full flex items-center justify-center shadow-xl">
                  <img
                    src={review.profileImage}
                    alt={`${review.name} profile`}
                    className="w-16 h-16 rounded-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-black text-2xl" style={{display: 'none'}}>
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-black text-white text-xl mb-3 uppercase tracking-wide">
                  {review.name}
                </h3>
                
                {/* Star Rating - Industrial Style */}
                <div className="flex items-center mb-4 space-x-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>

            {/* Review Text - Industrial Style */}
            <div className="mb-8">
              <div className="bg-gray-900 border-2 border-gray-700 p-6 shadow-xl">
                <p className="text-gray-300 leading-relaxed text-lg font-bold italic">
                  "{review.text}"
                </p>
              </div>
            </div>

            {/* Verified Badge - Industrial Style */}
            <div className="flex items-center justify-center">
              <div className="bg-green-600 border-4 border-green-400 px-6 py-3 shadow-xl">
                <div className="flex items-center text-white font-black uppercase tracking-wide">
                  <CheckCircle size={20} className="mr-3 text-green-200" />
                  <span>{review.badge}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industrial Trust Section */}
      <div className="mt-16 bg-gray-900 border-4 border-yellow-500 p-10 shadow-2xl">
        <div className="text-center">
          <div className="inline-block bg-yellow-500 text-black px-8 py-4 mb-6 border-4 border-black shadow-xl">
            <h3 className="text-2xl font-black uppercase tracking-wider">Real Container Storage Reviews</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="bg-orange-600 border-4 border-orange-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Shield size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-black text-orange-400 mb-3 uppercase">100% Verified</h4>
              <p className="text-gray-300 font-bold">All reviews from actual container renters</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 border-4 border-green-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <Star size={32} className="text-white fill-white" />
              </div>
              <h4 className="text-xl font-black text-green-400 mb-3 uppercase">5-Star Rated</h4>
              <p className="text-gray-300 font-bold">Consistently excellent customer service</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 border-4 border-blue-400 w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-xl">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-black text-blue-400 mb-3 uppercase">Local Family</h4>
              <p className="text-gray-300 font-bold">Urbana family business you can trust</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewsIndustrial;

