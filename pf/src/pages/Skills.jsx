import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaFileExcel,
} from "react-icons/fa";
import { SiIbm } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-blue-300 text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-red-400 text-5xl" /> },
  
  { name: "Excel", icon: <FaFileExcel className="text-green-400 text-5xl" /> },
];

const Skills = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-12 animate-pulse text-white drop-shadow-[0_0_10px_white]">
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-center w-60 hover:scale-105 transition-all duration-300 border border-gray-700"
            whileHover={{ scale: 1.1 }}
          >
            <div className="mb-4">{skill.icon}</div>
            <h2 className="text-xl font-semibold">{skill.name}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
