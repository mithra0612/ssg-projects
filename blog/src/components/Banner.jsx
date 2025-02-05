import { useState, useEffect } from "react";
import product1 from "../assets/product1.jpeg";
import product2 from "../assets/product2.jpeg";
import product3 from "../assets/product3.jpeg";

const images = [product1, product2, product3];

const Banner = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full">
      <img src={images[index]} alt="Banner" className="w-full h-full object-cover" />
    </div>
  );
};

export default Banner;
