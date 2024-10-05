import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    } else {
      
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    navigate('/'); 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome, {userEmail ? `Hello ${userEmail}` : 'Guest'}
        </h1>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
