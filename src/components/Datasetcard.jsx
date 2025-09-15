import React from "react";

const DatasetCard = ({ dataset }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="font-bold text-lg">{dataset.name}</h2>
      <p className="text-gray-500 text-sm">{dataset.domain} | {dataset.type}</p>
      <p className="mt-2 text-gray-700">Price: {dataset.price}</p>
    </div>
  );
};

export default DatasetCard;
