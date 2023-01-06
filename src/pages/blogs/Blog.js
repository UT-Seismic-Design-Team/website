import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AppNavbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import EmptyList from '../../components/EmptyList';
import db from "../../firebase.js";


const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  // Get a specific blog from Firebase with the corresponding id
  const getBlogs = async () => {
    const response = db.collection("blogs");
    const data = await response.get();
    let blogsData = data.docs[0].data().blogs;
    let blog = blogsData.find((blog) => blog.id === parseInt(id));
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

      {/* Back Button (Routes to the Blogs page) */}
      <Link className="blog-goBack" style={{ marginLeft: "20px" }} to="/blogs">
        <span> &#8592;</span> <span>Go Back</span>
      </Link>

      {/* Blog Data & Empty View */}
      {blog ? (
        <div className="blog-wrap">
          {/* Blog Header */}
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

          {/* Blog Cover Image */}
          <img src={require("../../images/Blogs/" + blog.cover)} alt="cover" />

          {/* Blog Body */}

          {/* TODO: Add more customizability like  
          1. different sections - PROGRESS
          2. each section would have a title and a list of paragraphs - DONE
          3. make it so the list also has images accompaning the paragraphs - PROGRESS
          4. Add a section for author with the links to his social - NOT STARTED

          PROGRESS:
          1. Added functionality of rendering sections which are basically a title followed by list of paragraphs
          */}
          <div className="blog-body">
            {blog.description.map((section) => {
              return (
                <div>
                  <h1>{section.title}</h1>
                  {section.description.map((block) => {
                    return <p className="blog-desc">{block}</p>;
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <EmptyList />
      )}

      <Footer />
    </>
  );
};

export default Blog;
