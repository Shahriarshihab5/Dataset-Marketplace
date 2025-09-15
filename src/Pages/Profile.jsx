import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ email: "", role: "Buyer" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you would save real info later
    navigate("/"); // go back home after submit
  };

  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-4xl font-bold mb-6 text-white">Complete Your Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white/90 p-6 rounded shadow-lg w-80 animate-fade-in"
      >
        <input
          type="email"
          placeholder="Email"
          value={info.email}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
          required
          className="border p-2 rounded"
        />
        <select
          value={info.role}
          onChange={(e) => setInfo({ ...info, role: e.target.value })}
          className="border p-2 rounded"
        >
          <option>Buyer</option>
          <option>Seller</option>
          <option>Annotator</option>
        </select>
        <button
          type="submit"
          className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
