import React, { useState } from 'react';
import { FaArrowLeft, FaMoon, FaSun, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import Firebase authentication
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('user');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/completeprofile'); // Redirect after successful login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col items-center p-4 transition-all`}>
      <div className="flex justify-between items-center w-full max-w-md px-4 py-2">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition">
          <FaArrowLeft /> Back
        </button>
        <button onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition">
          {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-8 rounded-lg shadow-lg w-full max-w-md mt-4 transition-all`}>
        <h2 className="text-2xl font-bold text-center text-green-400 mb-4">Login to SkillTest</h2>
        <div className="flex justify-center mb-6">
          <button onClick={() => setActiveTab('user')} className={`flex items-center gap-2 px-6 py-2 rounded-t-lg font-semibold transition ${activeTab === 'user' ? darkMode ? "bg-gray-700 text-green-400" : "bg-gray-100 text-green-500" : "bg-transparent text-gray-400 hover:text-green-400"}`}>
            <FaUser /> User Login
          </button>
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} w-full p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400`} placeholder="Enter your email" required />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"} w-full p-3 rounded placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400`} placeholder="Enter your password" required />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full py-3 bg-green-500 rounded font-bold hover:bg-green-600 transition duration-300">
            Login as User
          </button>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <p className="text-center mt-6 text-sm">
          Don't have an account? <button onClick={() => navigate('/register')} className="text-green-400 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
