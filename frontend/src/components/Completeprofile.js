import React, { useState } from "react";
import { FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CompleteProfile = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    college: "",
    degree: "",
    graduationYear: "",
    state: "",
    city: "",
    linkedin: "",
    skills: [],
    resume: null,
  });

  const skillsList = ["Java", "Python", "C++", "Web Development", "Machine Learning"];
  const degrees = ["B.Tech", "B.E", "M.Tech", "MCA", "B.Sc (CS)", "BCA"];
  const graduationYears = Array.from({ length: 11 }, (_, i) => (2025 + i).toString());
  const states = ["Maharashtra", "Karnataka", "Tamil Nadu", "Delhi", "Uttar Pradesh"];
  const cities = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
    Delhi: ["New Delhi"],
    "Uttar Pradesh": ["Lucknow", "Noida", "Kanpur"],
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      skills: checked ? [...prev.skills, value] : prev.skills.filter((skill) => skill !== value),
    }));
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen flex flex-col items-center p-4 transition-all bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Top Bar: Back Button + Dark Mode Toggle */}
        <div className="flex justify-between items-center w-full max-w-4xl px-4 py-2">
          <button
            onClick={() => navigate("/register")}
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

        {/* Profile Form Container */}
        <div className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl mt-4">
          <h2 className="text-2xl font-bold mb-6 text-green-500 text-center">Complete Your Profile</h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 w-full" required />

            <input type="email" name="email" placeholder="Email" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 w-full" required />

            <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 w-full" required />

            <input type="date" name="dob" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full" required />

            <select name="gender" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input type="text" name="college" placeholder="College/University" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 w-full" required />

            <select name="degree" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
              <option value="">Select Degree</option>
              {degrees.map((deg) => (
                <option key={deg} value={deg}>{deg}</option>
              ))}
            </select>

            <select name="graduationYear" onChange={handleChange} 
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
              <option value="">Select Graduation Year</option>
              {graduationYears.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            <select name="state" onChange={handleChange} className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>

          <select name="city" onChange={handleChange} className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full">
            <option value="">Select City</option>
            {(cities[formData.state] || []).map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>

          <input type="url" name="linkedin" placeholder="LinkedIn Profile (optional)" onChange={handleChange} className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full" />

            {/* Skills Section */}
            <fieldset className="col-span-2 flex flex-wrap gap-4">
              {skillsList.map((skill) => (
                <label key={skill} className="flex items-center gap-2 text-gray-900 dark:text-white">
                  <input type="checkbox" value={skill} onChange={handleSkillChange} className="form-checkbox text-green-500" />
                  {skill}
                </label>
              ))}
            </fieldset>

            {/* Resume Upload */}
            <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx"
              className="p-2 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white w-full col-span-2" />

            {/* Submit Button */}
            <button type="submit" className="bg-green-500 p-2 rounded font-bold hover:bg-green-600 col-span-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile;
