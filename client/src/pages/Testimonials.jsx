import React, { useEffect, useState } from "react";
import { fetchTestimonials, addTestimonial } from "../api";

export default function Testimonials() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const loadTestimonials = () => {
    fetchTestimonials().then(setItems);
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await addTestimonial({ name, text });
    setLoading(false);

    // Reset form
    setName("");
    setText("");

    // Refresh testimonials immediately
    loadTestimonials();
  };

  return (
    <div className="container">
      <h1>Testimonials</h1>

      {/* --- User Submission Form --- */}
      <form onSubmit={handleSubmit} className="card" style={{ padding: 12, marginBottom: 20 }}>
        <h3>Add Your Testimonial</h3>

        <input
          className="form-control"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          className="form-control"
          placeholder="Write your testimonial..."
          style={{ marginTop: 10 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>

        <button className="btn btn-primary" style={{ marginTop: 10 }}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* --- Testimonials List --- */}
      <div style={{ marginTop: 12 }}>
        {items.length === 0 ? (
          <div className="card">Loading...</div>
        ) : (
          items.map((t) => (
            <div key={t.id} className="card" style={{ marginBottom: 8 }}>
              <div style={{ fontWeight: 700 }}>{t.name}</div>
              <div className="text-muted" style={{ marginTop: 6 }}>{t.text}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
