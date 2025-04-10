import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";  // ✅ Added import
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />  {/* ✅ Added route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
