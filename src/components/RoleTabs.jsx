import React from "react";

const RoleTabs = ({ role, setRole }) => {
  const roles = ["Upload", "Find", "Annotate"];

  return (
    <div className="flex justify-center gap-4 mb-6">
      {roles.map((r) => (
        <button
          key={r}
          onClick={() => setRole(r)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            role === r
              ? "bg-blue-600 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default RoleTabs;
