import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="p-10 flex flex-col items-center justify-center min-h-screen text-center"
    >
      <h2 className="text-4xl font-bold text-white mb-6 glow-text">
        Contact Me
      </h2>
      <a
        href="https://www.linkedin.com/in/dharshni-g-31127a259"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 text-lg hover:underline"
      >
        https://www.linkedin.com/in/dharshni-g-31127a259
      </a>
    </motion.div>
  );
};

export default Contact;
