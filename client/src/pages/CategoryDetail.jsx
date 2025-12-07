import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../services"; // adjust path if needed

export default function CategoryDetail() {
  const { category } = useParams();
  const navigate = useNavigate();

  const categoryObj = servicesData.find(
    (s) => s.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  if (!categoryObj) return <div className="container"><h2>Category not found</h2></div>;

  return (
    <div className="container">
      <h1>{categoryObj.category}</h1>
      <img
        src={categoryObj.image}
        alt={categoryObj.category}
        style={{ width: "100%", maxHeight: 300, objectFit: "cover", borderRadius: 8, marginTop: 12 }}
      />
      <p style={{ marginTop: 8 }}>{categoryObj.summary}</p>
      <p style={{ color: "var(--muted)" }}>{categoryObj.items.length} services available</p>

      <div className="services-grid" style={{ marginTop: 16 }}>
        {categoryObj.items.map((item) => (
          <div key={item.id} className="service-card">
            <img src={item.image} alt={item.title} className="service-image" />
            <h3>{item.title}</h3>
            <p className="text-muted">{item.description}</p>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center" }}>
              <div style={{ fontWeight: 700 }}>{item.price}</div>
              <button
                className="button"
                onClick={() => {
                  // prefill booking and navigate
                  const booking = {
                    id: Date.now(),
                    name: "",
                    email: "",
                    phone: "",
                    service: item.title,
                    date: "",
                    time: "",
                    price: item.price.replace(/[^\d]/g, ""), // numeric price
                    notes: ""
                  };
                  localStorage.setItem("currentBooking", JSON.stringify(booking));
                  navigate("/booking");
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
