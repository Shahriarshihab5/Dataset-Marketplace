// Pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import GradientLayout from "../components/GradientLayout";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username) {
      setUser({ name: username });
      navigate("/profile");
    }
  };

  return (
    <GradientLayout>
      <motion.h1
        className="text-5xl font-extrabold mb-8 text-white drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Login
      </motion.h1>

      <motion.form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-sm"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-3 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />

        <motion.button
          type="submit"
          className="bg-pink-500 text-white py-3 rounded-lg font-semibold shadow hover:bg-pink-600 hover:scale-105 transition transform"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue
        </motion.button>

        <motion.div
          className="flex justify-between text-sm text-gray-600 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            to="/register"
            className="hover:underline text-pink-500 font-medium"
          >
            Register
          </Link>
          <Link
            to="/forgot-password"
            className="hover:underline text-pink-500 font-medium"
          >
            Forgot Password?
          </Link>
        </motion.div>
      </motion.form>
    </GradientLayout>
  );
};

export default Login;
