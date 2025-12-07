import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <h1>Your best look starts here</h1>
            <p>Professional stylists, warm atmosphere. Book a cut, color, or treatment today.</p>
            <div style={{marginTop:"1rem"}}>
              <Link to="/booking" className="button">Book Now</Link>
              <Link to="/services" style={{marginLeft:"0.6rem"}}>Our Services</Link>
            </div>
          </div>
          <div className="hero-right">
            <div style={{borderRadius:10, overflow:"hidden"}}>
              <img src="/images/image.jpg" alt="Salon" style={{width:"50%", height:500, objectFit:"cover"}}/>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{paddingTop: "2rem"}}>
        <h2>Popular Services</h2>
        <div className="grid grid-3" style={{marginTop:"1rem"}}>
          <div className="card">
            <h3>Women's Haircut</h3>
            <p className="text-muted">From basic trim to complete restyle</p>
            <img src="/images/women-cut.jpg" alt="Welcome" style={{width:"100", height:300}}/>
            <div style={{marginTop:8, fontWeight:700}}>KSh 800</div>
             <Link to="/booking" className="button">Book Now</Link>
          </div>
          <div className="card">
            <h3>Hair Color</h3>
            <p className="text-muted">Highlights, full color, and gloss</p>
            <img src="/images/hair-color.jpg" alt="Welcome" style={{width:"200", height:300}}/>
            <div style={{marginTop:8, fontWeight:700}}>KSh 2500+</div>
             <Link to="/booking" className="button">Book Now</Link>
          </div>
          <div className="card">
            <h3>Blowout & Styling</h3>
            <p className="text-muted">Event ready hair</p>
            <img src="images/blowing-styling.jpg" alt="Welcome" style={{width:"100", height:300}}/>
            <div style={{marginTop:8, fontWeight:700}}>KSh 700</div>
             <Link to="/booking" className="button">Book Now</Link>
          </div>
        </div>
      </section>
    </>
  );
}
