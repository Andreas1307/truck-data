import React from "react";
import { Link } from "react-router-dom"
import '../App.css'
import blogContent from "../blogContent";

const Blog = () => {
    return (
        <section className="blog">
    <div className="container">
      <h2>Latest from the Blog</h2>
      <div className="blog-grid">
         {blogContent.map((el, index) => (

         
        <div key={index} className="blog-post">
          <img src={el.img} />
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          <Link to={`/blog/${el.title}`} className="btn">Read More</Link>
        </div>
        ))}
      </div>
    </div>
  </section>
    )
}
export default Blog