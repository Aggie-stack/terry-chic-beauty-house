import React, {useEffect, useState} from "react";
import { fetchPosts } from "../api";
import { Link } from "react-router-dom";

export default function Blog(){
  const [posts, setPosts] = useState([]);
  useEffect(()=>{ fetchPosts().then(setPosts).catch(()=>{}); },[]);
  return (
    <div className="container">
      <h1>Blog</h1>
      <div style={{marginTop:12}}>
        {posts.length === 0 ? <div className="card">No posts yet</div> : posts.map(p=>(
          <div key={p.id} className="card" style={{marginBottom:8}}>
            <Link to={`/blog/${p.id}`} style={{fontWeight:700}}>{p.title}</Link>
            <div className="text-muted">{p.excerpt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
