import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RoleTabs from "../components/RoleTabs";
import DatasetCard from "../components/Datasetcard";

const dummyDatasets = [
  { name: "Sample Dataset 1", domain: "AI", type: "CSV", price: "$10" },
  { name: "Sample Dataset 2", domain: "ML", type: "JSON", price: "$15" },
  { name: "Sample Dataset 3", domain: "NLP", type: "TXT", price: "$12" },
  { name: "Sample Dataset 4", domain: "CV", type: "JSON", price: "$20" },
];

const Dashboard = () => {
  const [role, setRole] = useState("Upload");
  const [file, setFile] = useState(null);

  return (
    <div className="mt-10 min-h-screen bg-gradient-to-r from-[#feac5e] via-[#c779d0] to-[#4bc0c8] py-10 px-4">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-8 text-center text-white drop-shadow-lg"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Dashboard
      </motion.h1>

      {/* Role Tabs */}
      <RoleTabs role={role} setRole={setRole} />

      {/* Role-based sections */}
      <AnimatePresence mode="wait">
        {/* Upload Section */}
        {role === "Upload" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 text-pink-500 font-semibold px-6 py-6 rounded-2xl shadow-2xl mt-6 border border-pink-200"
          >
            <h2 className="font-bold text-2xl mb-4 text-pink-600">
              Upload Dataset
            </h2>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 
                file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold 
                file:bg-pink-50 file:text-pink-600 hover:file:bg-pink-100 cursor-pointer"
            />
            {file && (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="mt-2 p-3 bg-white/80 rounded-xl border border-pink-200 shadow-sm"
              >
                <p>
                  <span className="font-semibold">Preview:</span> {file.name}
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Find Section */}
        {role === "Find" && (
          <motion.div
            key="find"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <h2 className="font-bold text-2xl mb-6 text-pink-600">
              Available Datasets
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {dummyDatasets.map((d, idx) => (
                <DatasetCard key={idx} dataset={d} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Annotate Section */}
        {role === "Annotate" && (
          <motion.div
            key="annotate"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className=" bg-white/90 text-pink-500 font-semibold px-6 py-6 rounded-2xl shadow-2xl mt-20 border border-pink-200"
          >
            <h2 className="font-bold text-2xl mb-4 text-pink-600">
              Request Annotation
            </h2>
            <p className="text-gray-700">
              This is a dummy UI for annotation requests. You can request
              annotators to work on datasets here.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;
