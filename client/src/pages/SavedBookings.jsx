import React, { useState, useEffect } from "react";

export default function SavedBookings({ onResume }) {
  const [savedForms, setSavedForms] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("incompleteBookings")) || [];
    setSavedForms(saved);
  }, []);

  const handleResume = (form) => {
    onResume(form); // load into Booking page
    window.scrollTo(0,0); // scroll to top
  };

  const handleDelete = (id) => {
    const updated = savedForms.filter(f => f.id !== id);
    localStorage.setItem("incompleteBookings", JSON.stringify(updated));
    setSavedForms(updated);
  };

  if (savedForms.length === 0) {
    return <div><h3>No saved bookings.</h3></div>;
  }

  return (
    <div>
      <h2>Saved Bookings</h2>
      {savedForms.map(f => (
        <div key={f.id} className="card" style={{marginBottom: 8, padding: 8}}>
          <div><strong>Name:</strong> {f.name}</div>
          <div><strong>Email:</strong> {f.email}</div>
          <div><strong>Phone:</strong> {f.phone}</div>
          <div><strong>Service:</strong> {f.service}</div>
          <div><strong>Date & Time:</strong> {f.date} {f.time}</div>
          <div style={{marginTop: 4}}>
            <button className="button" onClick={() => handleResume(f)}>Resume</button>
            <button className="button" style={{marginLeft: 4}} onClick={() => handleDelete(f.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
