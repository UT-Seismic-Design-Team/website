import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import AppNavbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import EmptyList from '../../components/EmptyList';
import db from "../../firebase.js";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaRegIdCard,
  FaGithubSquare,
} from "react-icons/fa";


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

      {/* Social Links */}
      {blog && (
        <div className="sticky-container">
          <ul className="sticky">
            {blog.authorSocials.map((social, i) => {
              return (
                <li key={i}>
                  <a href={social.link} target="_blank">
                  {
                    social.type === "github" ? (
                      <FaGithubSquare style={{ fontSize: "30px", color: "#0077B5" }} />
                    ) : social.type === "linkedin" ? (
                      <FaLinkedin style={{ fontSize: "30px", color: "#0077B5" }} />
                    ) : social.type === "instagram" ? (
                      <FaInstagramSquare style={{ fontSize: "30px", color: "#0077B5" }} />
                    ) : 
                      <FaRegIdCard style={{ fontSize: "30px", color: "#0077B5" }} />
                  }
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

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
          <img src={blog.cover} alt="cover" />

          {/* Blog Body */}
          <div className="blog-body">
            {blog.sections.map((section, index) => {
              {
                /* Individual Section */
              }
              return (
                <div key={index}>
                  <h1>{section.title}</h1>
                  {section.description.map((block, index) => {
                    return (
                      <p
                        key={index}
                        dangerouslySetInnerHTML={{ __html: block }}
                      />
                    );
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
