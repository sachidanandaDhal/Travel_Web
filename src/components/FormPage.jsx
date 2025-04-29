import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormPage = () => {
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    sightseeingLocations: '',
  });

  const [errors, setErrors] = useState({
    source: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    sightseeingLocations: '',
  });

  const [sources, setSources] = useState([]);
  const [destinations, setDestinations] = useState([]);

  const navigate = useNavigate();

  // Fetch source and destination data
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const sourceRes = await axios.get('/src/data/sources.json');
        const destinationRes = await axios.get('/src/data/recommendations.json');

        // Get unique destinations from recommendations
        const uniqueDestinations = [...new Set(destinationRes.data.map(item => item.destination))];

        setSources(sourceRes.data);
        setDestinations(uniqueDestinations);
      } catch (err) {
        console.error('Error fetching dropdown data', err);
      }
    };

    fetchDropdownData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error message when user starts typing
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessages = {};

    // Check if fields are empty and set error messages
    for (let key in formData) {
      if (!formData[key]) {
        isValid = false;
        errorMessages[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required.`;
      }
    }

    setErrors(errorMessages);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.get('/src/data/recommendations.json');
      const allData = res.data;

      console.log('Fetched Recommendations:', allData); // Log data to see structure

      // Filter logic: matches destination and source at minimum
      const filteredData = allData.filter((item) => {
        // Ensure destination and source are defined before calling toLowerCase
        const destinationMatch = item.destination && item.destination.toLowerCase().includes(formData.destination.toLowerCase());
        const sourceMatch = item.source && item.source.toLowerCase().includes(formData.source.toLowerCase());

        // Check if budget is provided and valid
        const budgetMatch = formData.budget ? item.budget <= parseInt(formData.budget) : true;

        return destinationMatch && sourceMatch && budgetMatch;
      });

      if (filteredData.length > 0) {
        navigate('/results', { state: { recommendations: filteredData } });
      } else {
        alert("No matching travel recommendations found.");
      }
    } catch (err) {
      console.error('Failed to fetch recommendations', err);
    }
  };

  return (
    <div className="min-h-[90.9vh] bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 flex flex-col justify-center items-center py-6 px-4 mt-[-10px]">
      <div className="bg-white/20 backdrop-blur-md p-6 sm:p-8 rounded-lg shadow-xl w-full max-w-sm sm:max-w-md text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">Plan Your Dream Trip</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Source Dropdown */}
          <div className="flex flex-col space-y-3">
            <select
              name="source"
              value={formData.source}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-lg bg-white/80 text-black text-sm ${errors.source ? 'border-2 border-red-500' : ''}`}
            >
              <option value="">Select Source</option>
              {sources.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            {/* Destination Dropdown */}
            <select
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className={`w-full p-3 rounded-lg bg-white/80 text-black text-sm ${errors.destination ? 'border-2 border-red-500' : ''}`}
            >
              <option value="">Select Destination</option>
              {destinations.map((destination) => (
                <option key={destination} value={destination}>{destination}</option>
              ))}
            </select>
          </div>

          {/* Start and End Date */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className={`w-full sm:w-1/2 p-3 rounded-lg bg-white/80 text-black text-sm ${errors.startDate ? 'border-2 border-red-500' : ''}`}
            />

            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className={`w-full sm:w-1/2 p-3 rounded-lg bg-white/80 text-black text-sm ${errors.endDate ? 'border-2 border-red-500' : ''}`}
            />
          </div>

          {/* Budget Input */}
          <input
            type="number"
            name="budget"
            placeholder="Budget (in INR)"
            value={formData.budget}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-600 text-sm ${errors.budget ? 'border-2 border-red-500' : ''}`}
          />

          {/* Sightseeing Locations Input */}
          <input
            type="number"
            name="sightseeingLocations"
            placeholder="No. of Sightseeing Spots"
            value={formData.sightseeingLocations}
            onChange={handleInputChange}
            className={`w-full p-3 rounded-lg bg-white/80 text-black placeholder-gray-600 text-sm ${errors.sightseeingLocations ? 'border-2 border-red-500' : ''}`}
          />

          <button
            type="submit"
            className="w-full bg-yellow-300 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition text-sm"
          >
            Get Recommendations
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
