// src/components/ProductList.jsx
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 2, name: "Smartwatch", price: "$199", image: "/images/smartwatch.jpg" },
  { id: 3, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
];

const ProductList = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-200">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border border-gray-700 rounded-lg shadow-lg bg-gray-800 hover:shadow-xl transition duration-300 p-5"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-56 object-cover rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4 text-gray-300">{product.name}</h3>
            <p className="text-lg text-gray-400">{product.price}</p>
            <Link 
              to={`/product/${product.id}`} 
              className="inline-block mt-4 px-6 py-2 text-gray-900 bg-yellow-500 hover:bg-yellow-600 rounded-lg transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
