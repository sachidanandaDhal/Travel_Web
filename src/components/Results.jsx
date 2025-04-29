import React from 'react';
import { useLocation } from 'react-router-dom';

const Results = () => {
  const { state } = useLocation();
  const { recommendations } = state || { recommendations: [] };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 flex flex-col items-center py-10 px-4">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Your Travel Recommendations</h2>

      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recommendations.length > 0 ? (
          recommendations.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-xl p-6 shadow-lg text-black hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={item.imageUrl}
                alt={item.destination}
                className="rounded-lg w-full h-48 object-cover mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.source} to {item.destination}
              </h3>
              <p className="text-sm text-gray-600 mb-1">Budget: ₹{item.budget}</p>
              <p className="text-sm text-gray-600 mb-1">Sightseeing Locations: {item.sightseeingLocations}</p>
              <p className="text-sm text-gray-600 mb-3">Travel Dates: {item.startDate} to {item.endDate}</p>

              <div className="flex items-center justify-between text-gray-700 mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </button>
                <span className="text-sm italic">Explore Now</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">No recommendations available.</p>
        )}
      </div>
    </div>
  );
};

export default Results;
