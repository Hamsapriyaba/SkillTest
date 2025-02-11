import React, { useState } from 'react';
import { FaArrowLeft, FaMoon, FaSun, FaUser, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('user'); // Default to User login

  // Form Fields (Optional, if you need to handle input data)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col items-center p-4 transition-all`}>

      {/* Top Bar: Back Button & Dark Mode Toggle */}
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

      {/* Login Card with Theme-Sensitive Background */}
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-8 rounded-lg shadow-lg w-full max-w-md mt-4 transition-all`}>

        <h2 className="text-2xl font-bold text-center text-green-400 mb-4">Login to SkillTest</h2>

        {/* Tabs for User & Corporate Login */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setActiveTab('Corporate')}
            className={`flex items-center gap-2 px-6 py-2 rounded-t-lg font-semibold transition 
                        ${activeTab === 'Corporate' 
                          ? darkMode 
                            ? "bg-gray-700 text-green-400" 
                            : "bg-gray-100 text-green-500" 
                          : "bg-transparent text-gray-400 hover:text-green-400"}`}
          >
            <FaBuilding /> Corporate Login
          </button>
          
        </div>

        {/* Dynamic Form Based on Active Tab */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} w-full p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400`}
              placeholder={`Enter your ${activeTab === 'corporate' ? 'corporate' : 'user'} email`}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} w-full p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400`}
              placeholder="Enter your password"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-green-500 rounded font-bold hover:bg-green-600 transition duration-300"
          >
             Login as Corporate
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Google Login Button with Theme Adaptation 
        <button 
          className={`flex items-center justify-center gap-3 w-full py-3 rounded transition duration-300 border 
            ${darkMode ? "bg-gray-700 text-white hover:bg-gray-600 border-gray-600" 
                       : "bg-white text-gray-900 hover:bg-gray-200 border-gray-300"}`}
          onClick={() => alert(`Google Sign-In Clicked for ${activeTab === 'corporate' ? 'Corporate' : 'User'}`)} 
        >
          <img src="https://www.google.com/favicon.ico" alt="Google Logo" className="w-5 h-5" />
          <span className="font-medium text-sm">Continue with Google</span>
        </button>*/}

        {/* Sign Up Link */}
        <p className="text-center mt-6 text-sm">
          Don't have an account? <button onClick={() => navigate('/register')} className="text-green-400 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
