// src/pages/About.jsx
const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white flex justify-center items-center">
      <div className="max-w-3xl bg-gray-800 shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">About ShopNow</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to <span className="text-yellow-400 font-semibold">ShopNow</span>, your one-stop destination for the latest tech gadgets. 
          We believe in offering high-quality products at unbeatable prices, ensuring our customers get the best deals.
        </p>
        <h2 className="text-2xl font-semibold text-yellow-400 mt-6">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
          <li>🛒 Wide Range - Laptops, smartphones, smartwatches & more.</li>
          <li>🚀 Fast Shipping - Get your products delivered quickly.</li>
          <li>💰 Affordable Prices - Best deals on top-quality tech.</li>
          <li>💬 24/7 Support - Customer satisfaction is our priority.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-yellow-400 mt-6">Our Mission</h2>
        <p className="text-gray-300 mt-3">
          Our goal is to revolutionize online shopping by making premium tech accessible to everyone. 
          We are dedicated to providing a seamless and secure shopping experience for all our customers.
        </p>
        <h2 className="text-2xl font-semibold text-yellow-400 mt-6">Get in Touch</h2>
        <p className="text-gray-300 mt-3">
          Have questions? Reach out to us anytime! Follow us on our social media channels or drop us an email.
        </p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-yellow-400 hover:text-yellow-500 transition">Facebook</a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500 transition">Twitter</a>
          <a href="#" className="text-yellow-400 hover:text-yellow-500 transition">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default About;
