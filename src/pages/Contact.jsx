import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="text-center py-20">
        <h1 className="text-4xl font-semibold text-blue-600">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-700">We are here to assist you</p>
        <form className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 mb-4 border rounded"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full w-full">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
