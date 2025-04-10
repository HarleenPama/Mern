// src/components/Hero.jsx
const Hero = () => {
    return (
      <div className="relative bg-gray-900 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-yellow-400">Discover the Latest Tech Gadgets</h1>
          <p className="text-lg mt-3 text-gray-400">High-quality gadgets at unbeatable prices.</p>
          <a href="#products" className="mt-5 inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg hover:bg-yellow-600 transition">
            Shop Now
          </a>
        </div>
      </div>
    );
  };
  
  export default Hero;
  