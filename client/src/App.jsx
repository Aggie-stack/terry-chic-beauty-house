import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CategoriesOverview from "./pages/CategoriesOverview";
import CategoryDetail from "./pages/CategoryDetail";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import CompleteBooking from "./pages/CompleteBooking";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Post from "./pages/Post";

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<CategoriesOverview />} />
          <Route path="/category/:category" element={<CategoryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/complete-booking" element={<CompleteBooking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
