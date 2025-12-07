import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { fetchPost } from "../api";

export default function Post(){
  const { id } = useParams();
  const [post, setPost] = useState(null);
  useEffect(()=>{ fetchPost(id).then(setPost).catch(()=>{}); },[id]);
  if(!post) return <div className="container"><div className="card">Loading...</div></div>;
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p className="text-muted">{new Date(post.created_at).toLocaleDateString()}</p>
      <div style={{marginTop:12}}>{post.content}</div>
    </div>
  );
}
