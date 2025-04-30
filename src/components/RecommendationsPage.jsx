import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Import recommendations data
import recommendationsData from '../data/recommendations.json'; // Adjust path if needed

const RecommendationsPage = () => {
  const { location } = useParams(); // Retrieve the selected city from URL params
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Filter recommendations based on the selected location
    const filteredRecommendations = recommendationsData.filter(
      (item) => item.source.toLowerCase() === location.toLowerCase()
    );
    setRecommendations(filteredRecommendations);
  }, [location]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Travel Recommendations for {location}
      </h2>
      {recommendations.length > 0 ? (
        recommendations.map((rec) => (
          <div key={rec.id} className="mb-6 p-4 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{rec.destination}</h3>
            <p className="text-sm text-gray-600">Budget: ₹{rec.budget}</p>
            <p className="text-sm text-gray-600">Sightseeing Locations: {rec.sightseeingLocations}</p>
            <p className="text-sm text-gray-600">Start Date: {rec.startDate}</p>
            <p className="text-sm text-gray-600">End Date: {rec.endDate}</p>
            <div className="mt-2">
              <img src={rec.imageUrl} alt={rec.destination} className="w-full h-64 object-cover rounded-md" />
            </div>
          </div>
        ))
      ) : (
        <p>No recommendations found for {location}.</p>
      )}
    </div>
  );
};

export default RecommendationsPage;
