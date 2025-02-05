import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";

const App = () => {
  const [formData, setFormData] = useState({});

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact setFormData={setFormData} />} />
        <Route path="/about" element={<About formData={formData} />} />
      </Routes>
    </Router>
  );
};

export default App;
