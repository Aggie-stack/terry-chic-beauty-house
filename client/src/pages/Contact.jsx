import React from "react";

export default function Contact(){
  return (
    <div className="container">
      <h1>Contact</h1>
      <p className="text-muted">Phone: <a href="tel:+254701592594">+254 701 592 594</a></p>
      <p className="text-muted">Email: <a href="mailto:rukwaroagatha7@gmail.com">rukwaroagatha7@gmail.com</a></p>

      <div style={{marginTop:12, display:"grid", gridTemplateColumns:"1fr 1fr", gap:12}}>
        <div className="card">
          <h3>Visit us</h3>
          <p className="text-muted">123 High Street, Nairobi</p>
        </div>
        <div className="card">
          <h3>WhatsApp</h3>
          <p className="text-muted"><a href="https://wa.me/254701592594" target="_blank" rel="noreferrer">Chat on WhatsApp</a></p>
        </div>
      </div>
    </div>
  );
}
