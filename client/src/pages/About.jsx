import React from "react";

export default function About() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">About Us</h1>

      {/* Our Story */}
      <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Terry Chic Beauty House started with a passion for transforming beauty experiences. Our founders envisioned a space where clients not only leave looking great but feeling confident and cared for.
        </p>
      </div>

      {/* Our Mission */}
      <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide top-quality styling, hair care, and spa services in a professional, welcoming environment that prioritizes the unique needs of every client.
        </p>
      </div>

      {/* Our Vision */}
      <div className="bg-white shadow-sm rounded-2xl p-8 border border-gray-200 mb-8 hover:shadow-md transition-all duration-300">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          We aim to be a leading beauty destination known for excellence, innovation, and client satisfaction, inspiring confidence and beauty in every person who walks through our doors.
        </p>
      </div>
    </div>
  );
}