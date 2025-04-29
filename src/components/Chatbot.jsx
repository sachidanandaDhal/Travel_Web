import React, { useState } from 'react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 bg-blue-500 text-white rounded-full shadow-md"
      >
        Chat
      </button>
      {open && (
        <div className="mt-2 p-4 w-80 h-64 bg-white border shadow-lg rounded-md">
          <h4 className="font-semibold">Chatbot</h4>
          <p>How can I help you?</p>
          {/* Simulated dialog */}
        </div>
      )}
    </div>
  );
};

export default Chatbot;
