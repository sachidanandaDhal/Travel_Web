import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Importing the list of cities from the local data
import sourcesData from '../data/sources.json'; // Adjust path if needed

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState('');
  const [isLocationSelected, setIsLocationSelected] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const navigate = useNavigate(); // Initialize `useNavigate`

  // Handle location selection
  const handleLocationSelect = (e) => {
    setLocation(e.target.value);
    setIsLocationSelected(true);
  };

  // Handle confirmation and navigate to the next page with the selected data
  const handleConfirmLocation = () => {
    if (location) {
      setIsConfirmed(true);
      // Navigate to the new page with the selected location
      navigate(`/recommendations/${location}`);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 mb-16">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 bg-blue-500 text-white rounded-full shadow-md"
      >
        Chat
      </button>

      {open && (
        <div className="mt-2 p-4 w-80 sm:w-96 h-96 bg-white border shadow-lg rounded-md overflow-y-auto">
          <h4 className="font-semibold mb-2">
            {isConfirmed
              ? `You have selected: ${location}`
              : 'Welcome! Please select your location'}
          </h4>

          {isConfirmed ? (
            <div>
              <p className="text-sm text-gray-600">
                You have confirmed the location. Redirecting to recommendations...
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm text-gray-600 mb-2">Please select a location:</p>
              <select
                className="w-full p-2 border rounded"
                onChange={handleLocationSelect}
                value={location}
              >
                <option value="">Select a City</option>
                {sourcesData.length > 0 ? (
                  sourcesData.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))
                ) : (
                  <option disabled>No locations available</option>
                )}
              </select>
              {isLocationSelected && (
                <button
                  onClick={handleConfirmLocation}
                  className="mt-4 w-full p-2 bg-blue-500 text-white rounded"
                >
                  Confirm Location
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
