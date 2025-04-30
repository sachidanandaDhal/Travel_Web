import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Import the Navbar
import FormPage from './components/FormPage';
import Results from './components/Results';
import TravelList from './components/TravelList.jsx';
import RecommendationsPage from './components/RecommendationsPage';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />  {/* Navbar should be placed at the top */}
      <div className='mt-16 '>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/travel_list" element={<TravelList />} />
        <Route path="/form" element={<FormPage />} />  {/* Corrected path */}
        <Route path="/results" element={<Results />} />
        <Route path="/recommendations/:location" element={<RecommendationsPage />} />
      </Routes>
     
      </div>
      
      <Chatbot /> 
     
    </Router>
  );
}

export default App;
