import React from "react";
import { useNavigate } from "react-router-dom";
import servicesData from "../services"; // adjust path if needed

export default function CategoriesOverview() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Our Services</h1>

      <div className="categories-grid" style={{ marginTop: 16 }}>
        {servicesData.map((cat) => {
          const slug = cat.category.toLowerCase().replace(/\s+/g, "-");
          return (
            <div key={cat.category} className="category-card">
              <img
                src={cat.image}
                alt={cat.category}
                className="category-image"
              />
              <h3 style={{ marginTop: 8 }}>{cat.category}</h3>
              <p className="text-muted" style={{ minHeight: "2.4em" }}>
                {cat.summary || `${cat.items.length} services available`}
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <button
                  className="button"
                  onClick={() => navigate(`/category/${slug}`)}
                >
                  View List
                </button>
                <div style={{ alignSelf: "center", color: "var(--muted)" }}>
                  {cat.items.length} items
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
