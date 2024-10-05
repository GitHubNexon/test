import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">EduTech</h1>
        <div className="space-y-4">
          <Link to="/login">
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded w-full md:w-48">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full md:w-48">
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
