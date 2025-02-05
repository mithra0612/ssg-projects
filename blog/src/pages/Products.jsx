import { useState } from "react";
import shoes1 from "../assets/shoes1.jpeg";
import shoes2 from "../assets/shoes2.jpeg";
import shoes3 from "../assets/shoes3.jpeg";

const products = [
  { id: 1, image: shoes1, name: "Running Shoes", price: "590.99" },
  { id: 2, image: shoes2, name: "Casual Sneakers", price: "849.99" },
  { id: 3, image: shoes3, name: "Sports Shoes", price: "999.99" },
];

const Products = () => {
  const [items] = useState(products);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-75 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
