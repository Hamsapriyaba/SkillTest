import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen transition-all`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-primary shadow-lg">
        <h1 className="text-3xl font-bold text-darkBg dark:text-white">SkillTest</h1>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-[calc(100vh-72px)] text-center px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
          <span className="text-primary">IMAGINATION</span> IS MORE IMPORTANT THAN <br className="hidden md:block"/> KNOWLEDGE
        </h2>
        <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl">
          Together we achieve more than any single person could ever do alone.
        </p>
        <button 
          onClick={() => navigate('/register')} 
          className="mt-10 px-8 py-4 bg-primary text-darkBg dark:text-white font-semibold rounded-full hover:bg-green-400 transition-transform transform hover:scale-105 shadow-lg"
        >
          Get Started
        </button>
      </header>
    </div>
  );
}

export default Home;