import React, { useEffect, useState } from "react";
import servicesData from "../services";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // simulate API call
    const timer = setTimeout(() => setServices(servicesData), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <h1>Services & Pricing</h1>
      <div style={{ marginTop: 12 }}>
        {services.length === 0 ? (
          <div className="card">Loading services...</div>
        ) : (
          services.map((category) => (
            <div key={category.category} style={{ marginBottom: 24 }}>
              <h2 style={{ marginBottom: 12 }}>{category.category}</h2>
              {category.items.map((s) => (
                <div
                  className="card"
                  key={s.id}
                  style={{
                    marginBottom: 8,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 700 }}>{s.title}</div>
                    <div className="text-muted">{s.description}</div>
                  </div>
                  <div style={{ fontWeight: 800 }}>{s.price}</div>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
