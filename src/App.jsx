// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

export default function App() {
  const [user, setUser] = useState(null); // Tracks logged-in user

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
      <Router>
        {/* Navbar receives user state */}
        <Navbar user={user} />

        <main className="flex-grow">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Authentication routes */}
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Protected route */}
            <Route
              path="/profile"
              element={<Profile user={user} setUser={setUser} />}
            />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}
