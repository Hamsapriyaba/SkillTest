import React, { useState } from 'react';
import { FaArrowLeft, FaMoon, FaSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col items-center p-4 transition-all`}>
      {/* Top Bar: Back Button + Dark Mode Toggle */}
      <div className="flex justify-between items-center w-full max-w-md px-4 py-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      
      {/* Login Card */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md mt-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Login to SkillTest</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-700"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded bg-gray-700"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit"
            className="w-full py-3 bg-green-500 rounded font-bold hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Don't have an account? <button onClick={() => navigate('/register')} className="text-green-400 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
