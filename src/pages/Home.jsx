import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlaneDeparture, FaMapMarkedAlt, FaUmbrellaBeach } from 'react-icons/fa';

const Home = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/form');  // Navigate to the form page when the button is clicked
      };

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-400 flex flex-col justify-center items-center text-white px-4 py-10 mt-[-10px] ">
      <div className="text-center">
        <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to TravelApp</h1>
        <p className="mt-4 text-xl font-light">Your Personalized Travel Guide to Adventures</p>

        <button
          onClick={handleNavigate}
          className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 hover:bg-yellow-400 hover:text-black"
        >
          Start Exploring
        </button>
      </div>

      {/* Travel Highlights Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl text-center mb-16">
        <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transform transition duration-300">
          <FaPlaneDeparture size={40} className="mx-auto text-yellow-300" />
          <h2 className="mt-4 text-xl font-semibold">Flight Booking</h2>
          <p className="text-white mt-2 text-sm">Best deals on flights to top destinations.</p>
        </div>

        <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transform transition duration-300">
          <FaMapMarkedAlt size={40} className="mx-auto text-green-300" />
          <h2 className="mt-4 text-xl font-semibold">Guided Tours</h2>
          <p className="text-white mt-2 text-sm">Explore cities with expert guides.</p>
        </div>
        

        <div className="bg-white/30 backdrop-blur-lg p-6 rounded-xl shadow-xl hover:scale-105 transform transition duration-300">
          <FaUmbrellaBeach size={40} className="mx-auto text-pink-300" />
          <h2 className="mt-4 text-xl font-semibold">Beach Holidays</h2>
          <p className="text-white mt-2 text-sm">Relax at top-rated beach destinations.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
