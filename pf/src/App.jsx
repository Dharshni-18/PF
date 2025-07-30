import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar"; // ✅ Case-sensitive match
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills"; // ✅ Skills import

function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/skills" element={<Skills />} /> {/* ✅ Added Skills route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
