import React, { useState } from 'react';

function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark transition-all duration-500">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center p-6 bg-primary dark:bg-primary shadow-lg">
          <h1 className="text-3xl font-bold text-darkBg dark:text-white">SkillTest</h1>
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg text-darkBg dark:text-white shadow-md"
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
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
          <button className="mt-10 px-8 py-4 bg-primary text-darkBg dark:text-white font-semibold rounded-full hover:bg-green-400 transition-transform transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </header>
        
      </div>
    </div>
  );
}

export default Home;
