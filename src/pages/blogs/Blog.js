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
      <div class="sticky-container">
        <ul class="sticky">
          <li>
            <a href="https://github.com/kaison428" target="_blank">
              <FaInstagramSquare style={{ fontSize: "30px", color: "#0077B5" }} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/siu-kai-cheung/" target="_blank">
              <FaLinkedin style={{ fontSize: "30px", color: "#0077B5" }} />
            </a>
          </li>
          <li>
            <a href="kaisoncheung.me" target="_blank">
              <FaRegIdCard style={{ fontSize: "30px", color: "#0077B5" }} />
            </a>
          </li>
        </ul>
      </div>

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
          1. different sections - DONE
          2. each section would have a title and a list of paragraphs - DONE
          3. make it so the list also has images accompaning the paragraphs - PROGRESS
          4. Add a section for author with the links to his social - DONE
          */}
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
