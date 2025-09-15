// components/GradientLayout.jsx
import React from "react";

const GradientLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4bc0c8] flex flex-col items-center justify-center px-4 animate-fade-in">
      {children}
    </div>
  );
};

export default GradientLayout;
