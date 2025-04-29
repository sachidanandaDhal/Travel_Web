import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="text-center py-20">
        <h1 className="text-4xl font-semibold text-blue-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          We provide the best travel recommendations tailored to your needs. Whether you're a solo traveler or a family on vacation, we've got you covered.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Our goal is to make your travel experience seamless and unforgettable. We strive to provide personalized travel recommendations based on your preferences, budget, and travel dates.
        </p>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-blue-600 text-center">What We Offer</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Customized Travel Plans</h3>
              <p className="mt-4 text-gray-700">
                We provide tailored itineraries based on your preferences, whether you're seeking adventure, relaxation, or culture.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Budget-Friendly Options</h3>
              <p className="mt-4 text-gray-700">
                Our platform helps you find trips that match your budget, offering affordable options without compromising on quality.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">Comprehensive Sightseeing</h3>
              <p className="mt-4 text-gray-700">
                Explore the best attractions, cultural landmarks, and natural wonders during your trip with our curated sightseeing recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-semibold text-blue-600">Ready to Start Your Journey?</h2>
        <p className="mt-4 text-lg text-gray-700">
          Join us and get personalized travel recommendations that suit your unique preferences and budget. Let us help you plan your perfect trip!
        </p>
        <div className="mt-8">
          <button className="bg-blue-500 text-white px-8 py-4 rounded-full text-xl">
            Start Planning
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
