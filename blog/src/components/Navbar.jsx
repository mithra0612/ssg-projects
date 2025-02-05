import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-black opacity-75 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">My Blog</h1>
    <div className="space-x-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
