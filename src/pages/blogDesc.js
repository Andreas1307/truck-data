import React from "react";
import { Link, useParams } from "react-router-dom"
import '../App.css'
import blogContent from "../blogContent";
import BackButton from "../components/backButton";
import Header from "../components/header";

const BlogDesc = () => {
    const { title } = useParams()
    const blog = blogContent.find((el) => el.title.toLowerCase() === title.toLowerCase())
    return (
        <div>
            <Header />
            <div className="blogDiv">
                <BackButton />
                <h1>
                    {blog.title}
                </h1>
                <h3>
                    {blog.description}
                </h3>
                <img src={`.${blog.img}`} />
                <p>{blog.content}</p>
            </div>
        </div>
    )
}

export default BlogDesc