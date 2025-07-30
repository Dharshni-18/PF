import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4 } },
};

function Home() {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-6 drop-shadow-[0_0_10px_white]">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg md:text-xl text-center mb-10 drop-shadow-[0_0_6px_white]">
        
      </p>

      <Link to="/about">
        <button className="p-5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 shadow-xl text-white animate-pulse transition-all duration-300">
          <FaArrowRight size={24} className="text-white drop-shadow" />
        </button>
      </Link>

      <footer className="absolute bottom-4 text-sm text-gray-400">
        © {new Date().getFullYear()} All rights reserved.
      </footer>
    </motion.div>
  );
}

export default Home;
