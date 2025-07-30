import React from "react";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-black text-white px-6 py-12 gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Glassmorphic Project Description */}
      <motion.div
        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 max-w-xl w-full shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4 drop-shadow-[0_0_10px_white]">
          SAILOR'S SENTINEL
        </h1>
        <p>
          This project focuses on optimizing maritime routes between key ports in the Indian Ocean,
          minimizing fuel consumption and voyage time while ensuring passenger comfort and safety.
        </p>
        <ul className="list-disc ml-6 mt-4 space-y-2 text-sm text-gray-200">
          <li>Machine learning models: Decision Trees & Random Forests</li>
          <li>Map visualization with Leaflet.js</li>
          <li>Built using Flask, React, and Tailwind CSS</li>
          <li>Login/signup system for route prediction access</li>
        </ul>
      </motion.div>

      {/* Right-side Image */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFwfGVufDB8fDB8fHww"
          alt="Ship route visualization"
          className="rounded-2xl shadow-lg border border-white/20"
        />
      </motion.div>
    </motion.div>
  );
};

export default Project;
