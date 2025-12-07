import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaCheckCircle } from "react-icons/fa";

export default function Navbar(){
  return (
    <header className="header">
      <div className="container navbar">
        <div className="brand"><Link to="/">Terry Chic Beauty House</Link></div>
        <nav className="navlinks" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div> {/* REVIEW CART */}
          <Link 
            className="icon-button" to="/review-cart" title="Review Cart">
              <div className="cart-wrapper">
               <FaShoppingCart size={18} />
               <span className="cart-badge">
                 {localStorage.getItem("cartCount") || 0}
                </span>
                </div>
             </Link>

           <Link 
            className="icon-button" to="/complete-booking" title="Complete Booking">
               <FaCheckCircle size={18} />
            📅 
          </Link>
        </div>
      </div>
    </header>
  );
}
