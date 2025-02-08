import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import Login from './components/Login'; // Ensure this path is correct
import Register from './components/Register';
import CompleteProfile from './components/Completeprofile';
import { ThemeProvider } from './context/ThemeContext'; // 

function App() {
  return (
    <ThemeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />{/* Correct path */}
        <Route path="/register" element={<Register />}/>
        <Route path="/completeprofile" element={<CompleteProfile />}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
