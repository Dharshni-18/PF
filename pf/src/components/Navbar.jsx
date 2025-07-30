import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-accent">Dharshni G</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-accent">Home</Link></li>
        <li><Link to="/about" className="hover:text-accent">About</Link></li>
        <li><Link to="/projects" className="hover:text-accent">Projects</Link></li>
        <li><Link to="/skills" className="hover:text-accent">Skills</Link></li> {/* 👈 Added this */}
        <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
