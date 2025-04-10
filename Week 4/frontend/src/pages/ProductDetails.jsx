// src/pages/ProductDetails.jsx
import { useParams, Link } from "react-router-dom";

const products = {
  1: { name: "Laptop", price: "$999", description: "High-performance laptop with powerful specs.", image: "/images/laptop.jpg" },
  2: { name: "Smartwatch", price: "$199", description: "Stylish smartwatch with health tracking.", image: "/images/smartwatch.jpg" },
  3: { name: "Smartphone", price: "$699", description: "Feature-packed smartphone with stunning display.", image: "/images/smartphone.jpg" },
};

const ProductDetails = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div className="text-center text-red-500 text-xl font-bold mt-10">Product Not Found</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white flex justify-center items-center">
      <div className="max-w-4xl mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h2 className="text-4xl font-bold text-yellow-400">{product.name}</h2>
          <p className="text-lg text-gray-300 mt-3">{product.description}</p>
          <p className="text-2xl font-semibold text-yellow-500 mt-2">{product.price}</p>
          <Link 
            to="/" 
            className="mt-5 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
