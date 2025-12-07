import React, { useState, useEffect } from "react";
import { createBooking } from "../api";
import SavedBookings from "./SavedBookings";

export default function Booking() {
  // Load form from localStorage if resuming or start empty
  const savedForm = JSON.parse(localStorage.getItem("currentBooking")) || {
    id: null,
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    price: "",
    notes: "",
  };

  const [form, setForm] = useState(savedForm);
  const [status, setStatus] = useState(null);

  // Save form live for resume
  useEffect(() => {
    localStorage.setItem("currentBooking", JSON.stringify(form));
  }, [form]);

  // Handle inputs
  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // PAY → THEN SUBMIT BOOKING
async function handlePayment() {
  if (!form.name || !form.phone || !form.service || !form.date || !form.time || !form.price) {
    setStatus({ error: "Please fill all required fields including price." });
    return;
  }

  try {
    const datetime = `${form.date}T${form.time}`;
    const res = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, datetime }),
    });

    // Check response status first
    if (!res.ok) {
      const text = await res.text(); // get raw response if not JSON
      throw new Error(`Server error ${res.status}: ${text}`);
    }

    // Try parsing JSON safely
    const data = await res.json();

    if (data.payment_url) {
      window.location.href = data.payment_url;
    } else {
      setStatus({ error: "Server did not return a payment URL." });
    }

  } catch (err) {
    setStatus({ error: "Payment error: " + err.message });
  }
}


  // Save for later
  function handleSaveForLater() {
    const id = form.id || Date.now();
    const savedForms = JSON.parse(localStorage.getItem("incompleteBookings")) || [];
    const formToSave = { ...form, id };

    const filtered = savedForms.filter(f => f.id !== id);
    filtered.push(formToSave);
    localStorage.setItem("incompleteBookings", JSON.stringify(filtered));

    setForm({ ...formToSave, id });
    setStatus({ success: "Saved for later!" });
    setTimeout(() => setStatus(null), 3000);
  }

  // Time options
  const timeOptions = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, "0")}:00`);

  return (
    <div className="container">
      <h1>Book an Appointment</h1>
      <p className="text-muted">Fill the form, pay, and your booking will be confirmed instantly.</p>

      <form className="form" style={{ marginTop: 12 }} onSubmit={(e) => e.preventDefault()}>
        <label>Full name</label>
        <input className="input" name="name" value={form.name} onChange={handleChange} />

        <label>Email address</label>
        <input className="input" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />

        <label>Phone number</label>
        <input className="input" name="phone" value={form.phone} onChange={handleChange} placeholder="+2547..." />

        <label>Service</label>
        <select className="input" name="service" value={form.service} onChange={handleChange}>
          <option value="">Select service</option>
          <option>Women's Haircut</option>
          <option>Men's Haircut</option>
          <option>Hair Color</option>
          <option>Blowout</option>
          <option>Deep Treatment</option>
        </select>

        <label>Date</label>
        <input className="input" type="date" name="date" value={form.date} onChange={handleChange} />

        <label>Time</label>
        <select className="input" name="time" value={form.time} onChange={handleChange}>
          <option value="">Select time</option>
          {timeOptions.map(t => <option key={t} value={t}>{t}</option>)}
        </select>

        <label>Price (KES)</label>
        <input className="input" type="text" name="price" value={form.price} onChange={handleChange} placeholder="e.g. 800" />

        <label>Notes (optional)</label>
        <textarea className="input" rows="4" name="notes" value={form.notes} onChange={handleChange}></textarea>

        <div style={{ marginTop: 8 }}>
          <button type="button" className="button" onClick={handlePayment}>Pay & Book</button>
          <button type="button" className="button" style={{ marginLeft: 8 }} onClick={handleSaveForLater}>
            Save for Later
          </button>
        </div>

        {status?.error && <div style={{ marginTop: 8, color: "crimson" }}>{status.error}</div>}
        {status?.success && <div style={{ marginTop: 8, color: "green" }}>{status.success}</div>}
      </form>

      <hr style={{ margin: "20px 0" }} />
    </div>
  );
}
