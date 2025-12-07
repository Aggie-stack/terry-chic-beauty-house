import React from "react";

const images = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543163521-1bf5393b3f6a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop",
];

export default function Gallery(){
  return (
    <div className="container">
      <h1>Gallery</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))", gap:12, marginTop:12}}>
        {images.map((src,i)=>(
          <div key={i} style={{overflow:"hidden", borderRadius:8}}>
            <img src={src} alt={`gallery-${i}`} style={{width:"100%", height:160, objectFit:"cover"}}/>
          </div>
        ))}
      </div>
    </div>
  );
}
