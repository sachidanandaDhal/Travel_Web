import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TravelList = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recommendationsPerPage = 6;

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('/src/data/recommendations.json');
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  const totalPages = Math.ceil(recommendations.length / recommendationsPerPage);
  const indexOfLast = currentPage * recommendationsPerPage;
  const indexOfFirst = indexOfLast - recommendationsPerPage;
  const currentRecommendations = recommendations.slice(indexOfFirst, indexOfLast);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Generate pagination numbers with ellipsis
  const getPaginationRange = () => {
    const totalVisible = 3;
    const range = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) range.push(i);
    } else {
      range.push(1);
      if (currentPage > totalVisible + 2) range.push('...');
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        range.push(i);
      }
      if (currentPage < totalPages - totalVisible - 1) range.push('...');
      range.push(totalPages);
    }

    return range;
  };

  return (
    <div className="min-h-[90.9vh] bg-gradient-to-br from-blue-600 via-purple-500 to-pink-400 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-white mb-10">
        Explore Our Travel Recommendations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {currentRecommendations.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
            <img src={item.imageUrl} alt={item.destination} className="w-full h-48 object-cover" />
            <div className="p-4 text-gray-800 space-y-1">
              <h3 className="text-xl font-bold">{item.source} ➜ {item.destination}</h3>
              <p><strong>Budget:</strong> ₹{item.budget.toLocaleString()}</p>
              <p><strong>Sightseeing:</strong> {item.sightseeingLocations} spots</p>
              <p><strong>Dates:</strong> {item.startDate} → {item.endDate}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination with ellipsis */}
      <div className="mt-10 flex justify-center gap-2 flex-wrap text-sm font-medium">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-400 disabled:opacity-50"
        >
          Prev
        </button>

        {getPaginationRange().map((page, index) =>
          page === '...' ? (
            <span key={index} className="px-3 py-2 text-white">...</span>
          ) : (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`px-3 py-2 rounded ${
                currentPage === page
                  ? 'bg-black text-white'
                  : 'bg-white text-black hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-2 bg-yellow-300 text-black rounded hover:bg-yellow-400 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TravelList;