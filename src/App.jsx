import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Comics from "./pages/Comics";
import ComicDetails from "./pages/ComicDetails";
import CartPage from "./pages/CartPage";
import "./App.css";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
          <Header />
          <main className="flex-grow container mx-auto px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/comics" element={<Comics />} />
              <Route path="/comics/:id" element={<ComicDetails />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
