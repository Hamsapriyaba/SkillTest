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
      <div className="min-h-screen flex flex-col items-center p-4 transition-all bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">

        {/* Top Bar */}
        <div className="flex justify-between items-center w-full max-w-4xl px-4 py-3 border-b border-gray-300 dark:border-gray-700">
          <button
            onClick={() => navigate("/register")}
            className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
          >
            <FaArrowLeft /> Back
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-yellow-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-4xl mt-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-green-600 dark:text-green-400">
            Complete Your Profile
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Input Fields */}
            <InputField name="fullName" placeholder="Full Name" onChange={handleChange} required />
            <InputField type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <InputField type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
            <InputField type="date" name="dob" onChange={handleChange} required />

            {/* Select Fields */}
            <SelectField name="gender" onChange={handleChange} options={["Male", "Female", "Other"]} placeholder="Select Gender" />
            <InputField name="college" placeholder="College/University" onChange={handleChange} required />
            <SelectField name="degree" onChange={handleChange} options={degrees} placeholder="Select Degree" />
            <SelectField name="graduationYear" onChange={handleChange} options={graduationYears} placeholder="Graduation Year" />

            <SelectField name="state" onChange={handleChange} options={states} placeholder="Select State" />
            <SelectField name="city" onChange={handleChange} options={cities[formData.state] || []} placeholder="Select City" />
            <InputField type="url" name="linkedin" placeholder="LinkedIn Profile (optional)" onChange={handleChange} />

            {/* Skills */}
            <fieldset className="col-span-2">
              <legend className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">Skills:</legend>
              <div className="flex flex-wrap gap-4">
                {skillsList.map((skill) => (
                  <label key={skill} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <input
                      type="checkbox"
                      value={skill}
                      onChange={handleSkillChange}
                      className="form-checkbox text-green-500"
                    />
                    {skill}
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Resume Upload */}
            <InputField type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" className="col-span-2" />

            {/* Submit Button */}
            <button
              type="submit"
              className="col-span-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 rounded-lg shadow-lg hover:from-green-600 hover:to-green-700 transition"
            >
              Submit Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable InputField Component
const InputField = ({ type = "text", name, placeholder, onChange, required = false, className = "", ...props }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    onChange={onChange}
    required={required}
    className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition w-full ${className}`}
    {...props}
  />
);

// Reusable SelectField Component
const SelectField = ({ name, onChange, options, placeholder, className = "" }) => (
  <select
    name={name}
    onChange={onChange}
    className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition w-full ${className}`}
  >
    <option value="">{placeholder}</option>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

export default CompleteProfile;
