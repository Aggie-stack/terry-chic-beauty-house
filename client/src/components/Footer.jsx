import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex", justifyContent:"space-between", gap:"1rem", flexWrap:"wrap"}}>
        <div>
          <div style={{fontWeight:700}}>Terry Chic Beauty House</div>
          <div className="text-muted">Expert stylists.</div>
        </div>
        <div className="small">
          Phone: <a href="tel:+254701592594">+254 701 592 594</a><br/>
          Email: rukwaroagatha7@gmail.com
        </div>
        <div className="small">© {new Date().getFullYear()} Terry Chic Beauty House</div>
      </div>
    </footer>
  );
}
