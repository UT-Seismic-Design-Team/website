
import React,{ useState, useEffect } from 'react';
import AppNavbar from "../../components/Navbar";
import Footer from '../../components/Footer';
import BlogList from '../../components/BlogList';
import EmptyList from '../../components/EmptyList.js';
import SearchBar from '../../components/SearchBar';
import db from '../../firebase.js';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]); // Current state of the blogs (i.e. blogs under a specific fileter)
    const [blogList, setBlogList] = useState([]); // Initial state of the blogs
    const [searchKey, setSearchKey] = useState('');

    // Fetches the blog data from firebase
    const getBlogs = async () => {
      const response = db.collection("blogs");
      const data = await response.get();
      let blogData = data.docs[0].data().blogs;
      setBlogs(blogData)
      setBlogList(blogData);
    };

    useEffect(() => {
      getBlogs();
    }, []);

    // Search submit
    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    // Search for blog by category
    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
            blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };

    // Clear search and show all blogs
    const handleClearSearch = () => {
        setBlogs(blogList);
        setSearchKey('');
    };

    return (
      <div>
        <AppNavbar />

        {/* Page Header */}
        <header className="blog-header">
          <h2>Seismic Design Team</h2>
          <h1>
            <span>“</span> Blog <span>”</span>
          </h1>
          <p>
            Learn more about our team! <br />
          </p>
        </header>

        {/* Search Bar */}
        <SearchBar
          value={searchKey}
          clearSearch={handleClearSearch}
          formSubmit={handleSearchBar}
          handleSearchKey={(e) => setSearchKey(e.target.value)}
        />

        {/* Blog List & Empty View */}
        {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}

        <Footer />
      </div>
    );
};

export default Blogs;
