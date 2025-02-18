import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaMoon, FaSun } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "user",
  });
  const [errors, setErrors] = useState({});

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};
     
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!passwordRegex.test(formData.password)) 
      newErrors.password = "Password must have at least 1 uppercase, 1 lowercase, 1 special character, 1 number, and be at least 10 characters long";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        const user = userCredential.user;

        // Send email verification
        await sendEmailVerification(user);
        alert("Verification email sent! Please check your inbox.");

        // Store user details in Firestore
        await setDoc(doc(db, "users", user.uid), {
          name: formData.name,
          email: formData.email,
          accountType: formData.accountType,
          emailVerified: false, // Initially false, update it later
        });

        alert("Registration successful! Please verify your email before logging in.");
        navigate("/login"); // User can try logging in after verification

      } catch (error) {
        alert(error.message);
      }
    }
  };

  const handleLoginClick = () => {
    const newTitle =
      formData.accountType === "user"
        ? "Skill Test - User Login"
        : "Skill Test - Corporate Login";
    document.title = newTitle;
    navigate(formData.accountType === "user" ? "/login" : "/corporate-login");
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col items-center p-4 transition-all`}>
      <div className="flex justify-between items-center w-full max-w-md px-4 py-2">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-lg font-medium hover:text-green-400 transition">
          <FaArrowLeft /> Back
        </button>
        <button onClick={() => setDarkMode(!darkMode)} className="flex items-center gap-2 text-lg font-medium hover:text-yellow-400 transition">
          {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className={`${darkMode ? "bg-gray-800" : "bg-white"} p-8 rounded-lg shadow-lg w-full max-w-md mt-4 transition-all`}>
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Create an Account</h2>
        <div className="flex justify-center mb-6">
          <button onClick={() => handleAccountTypeChange("user")} className={`px-4 py-2 rounded-l ${formData.accountType === "user" ? "bg-green-500 text-white" : "bg-gray-500 text-gray-200"} focus:outline-none`}>User</button>
          <button onClick={() => handleAccountTypeChange("corporate")} className={`px-4 py-2 rounded-r ${formData.accountType === "corporate" ? "bg-green-500 text-white" : "bg-gray-500 text-gray-200"} focus:outline-none`}>Corporate</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="name">Full Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500`} placeholder="Enter your full name" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500`} placeholder="Enter your email" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleChange} className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500`} placeholder="Create a password" />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-2" htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} w-full p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500`} placeholder="Confirm your password" />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>
          <button type="submit" className="w-full py-3 bg-green-500 rounded font-bold hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-400">Register</button>
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
