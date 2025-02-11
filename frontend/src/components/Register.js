import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "user", // Default to 'user'
  });
  const [errors, setErrors] = useState({});

  // Set initial title when component mounts
  useEffect(() => {
    document.title = "Skill Test - Register";
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleAccountTypeChange = (type) => {
    setFormData({ ...formData, accountType: type });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration successful!");
      navigate(formData.accountType === "user" ? "/complete-profile" : "/corporate-dashboard");
    }
  };

  const handleLoginClick = () => {
    const newTitle =
      formData.accountType === "user"
        ? "Skill Test - User Login"
        : "Skill Test - Corporate Login";
    document.title = newTitle; // Change title based on account type
    navigate(formData.accountType === "user" ? "/login" : "/corporate-login");
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } min-h-screen flex flex-col items-center p-4 transition-all`}
    >
      {/* Top Bar: Back Button + Dark Mode Toggle */}
      <div className="flex justify-between items-center w-full max-w-md px-4 py-2">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition"
        >
          <FaArrowLeft /> Back
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition"
        >
          {darkMode ? <FaSun /> : <FaMoon />}{" "}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Registration Card */}
      <div
        className={`${
          darkMode ? "bg-gray-800" : "bg-white"
        } p-8 rounded-lg shadow-lg w-full max-w-md mt-4 transition-all`}
      >
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">
          Create an Account
        </h2>

        {/* Account Type Toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => handleAccountTypeChange("user")}
            className={`px-4 py-2 rounded-l ${
              formData.accountType === "user"
                ? "bg-green-500 text-white"
                : "bg-gray-500 text-gray-200"
            } focus:outline-none`}
          >
            User
          </button>
          <button
            onClick={() => handleAccountTypeChange("corporate")}
            className={`px-4 py-2 rounded-r ${
              formData.accountType === "corporate"
                ? "bg-green-500 text-white"
                : "bg-gray-500 text-gray-200"
            } focus:outline-none`}
          >
            Corporate
          </button>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-3 rounded ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 rounded ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Create a password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={`w-full p-3 rounded ${
                darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"
              } focus:outline-none focus:ring-2 focus:ring-green-500`}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 rounded font-bold hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <button
            onClick={handleLoginClick}
            className="text-green-400 hover:underline"
          >
            Login as {formData.accountType === "user" ? "User" : "Corporate"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Register;
