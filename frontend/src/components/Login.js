import React, { useState } from 'react';

function Login() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex items-center justify-center bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark transition-all duration-500">
        
        {/* Login Card */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md">
          
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Login to SkillTest</h2>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-lightBg dark:bg-gray-700 text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-lightBg dark:bg-gray-700 text-textLight dark:text-textDark focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-primary text-darkBg font-bold rounded-lg hover:bg-green-400 transition-all duration-300"
            >
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-sm">
            Don't have an account? <a href="/signup" className="text-primary hover:underline">Sign Up</a>
          </p>

          {/* Dark Mode Toggle */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-white dark:bg-gray-700 rounded-lg text-darkBg dark:text-white"
            >
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Login;
