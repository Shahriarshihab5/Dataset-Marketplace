// Pages/ForgotPassword.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import GradientLayout from "../components/GradientLayout";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (email) {
      alert("Password reset link sent to " + email);
      navigate("/login"); // go back to login page
    }
  };

  return (
    <GradientLayout>
     <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <motion.h1
        className="text-5xl font-extrabold mb-8 text-white drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Forgot Password
      </motion.h1>

      <motion.form
        onSubmit={handleReset}
        className="flex flex-col gap-4 bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />

        <motion.button
          type="submit"
          className="bg-pink-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-pink-600 hover:scale-105 transition transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Reset Link
        </motion.button>

        <motion.div
          className="flex justify-center text-sm text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button
            type="button"
            className="hover:underline"
            onClick={() => navigate("/login")}
          >
            Back to Login
          </button>
        </motion.div>
      </motion.form>
    </div>
    
    </GradientLayout>
  );
};

export default ForgotPassword;
