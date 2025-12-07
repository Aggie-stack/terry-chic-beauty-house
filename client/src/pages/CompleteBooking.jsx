import React, { useEffect, useState } from "react";

export default function CompleteBooking() {
  const [savedBookings, setSavedBookings] = useState([]);

  // Booking form state
  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
    price: ""
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("incompleteBookings")) || [];
    setSavedBookings(saved);
  }, []);

  // Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit new booking
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Complete Booking</h1>
      <p>Review your saved bookings or create a new one.</p>

      <hr style={{ margin: "20px 0" }} />

      {/* Saved for Later Bookings */}
      {savedBookings.length === 0 ? (
        <p>No saved bookings found.</p>
      ) : (
        <div>
          <h2>Saved for Later</h2>

          {savedBookings.map((booking) => (
            <div
              key={booking.id}
              style={{
                background: "#f3f3f3",
                padding: "12px",
                borderRadius: "8px",
                marginBottom: "12px"
              }}
            >
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Service:</strong> {booking.service}</p>
              <p><strong>Date:</strong> {booking.date}</p>
              <p><strong>Time:</strong> {booking.time}</p>
              <p><strong>Price:</strong> KES {booking.price}</p>

              <button
                className="button"
                onClick={() => {
                  localStorage.setItem(
                    "currentBooking",
                    JSON.stringify(booking)
                  );
                  window.location.href = "/booking"; // send user back
                }}
              >
                Continue Booking
              </button>
            </div>
          ))}
        </div>
      )}

      <hr style={{ margin: "30px 0" }} />

      {/* NEW BOOKING FORM */}
      <h2>Create a New Booking</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          background: "#f9f9f9",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "500px"
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Service</label>
          <input
            type="text"
            name="service"
            value={form.service}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Time</label>
          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Price (KES)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" className="button">
          Submit Booking
        </button>
      </form>
    </div>
  );
}
