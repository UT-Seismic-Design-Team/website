
import React,{ useState } from 'react';
import AppNavbar from "../../components/Navbar";
import BlogList from '../../components/BlogList';
import { blogList } from '../../components/data';
import EmptyList from '../../components/EmptyList.js';
import SearchBar from '../../components/SearchBar';


const Blogs = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setSearchKey] = useState('');

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
        {/* Page Header */}
        <AppNavbar />
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
      </div>
    );
};

export default Blogs;


