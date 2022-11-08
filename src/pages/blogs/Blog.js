import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AppNavbar from "../../components/Navbar";
import EmptyList from '../../components/EmptyList';
import db from "../../firebase.js";


const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    const getBlogs = async () => {
      const response = db.collection("blogs");
      const data = await response.get();
      const items = [];
      data.docs.forEach((item) => {
        items.push(item.data());
      });
      let blog = items[0].blogs.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setBlog(blog);
      }
    };

    useEffect(() => {
      getBlogs();
    }, [id]);

    return (
      <>
        <AppNavbar />
        <Link
          className="blog-goBack"
          style={{ marginLeft: "20px" }}
          to="/blogs"
        >
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {blog ? (
          <div className="blog-wrap">
            <header>
              <p className="blog-date">Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className="blog-subCategory">
                {blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <p className="chip">{category}</p>
                  </div>
                ))}
              </div>
            </header>
            <img
              src={require("../../images/Blogs/" + blog.cover)}
              alt="cover"
            />
            <p className="blog-desc">{blog.description}</p>
          </div>
        ) : (
          <EmptyList />
        )}
      </>
    );
};

export default Blog;
