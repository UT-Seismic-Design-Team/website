import React from 'react';
import BlogItem from './BlogItem';

// UI componenet for the list of blog cards on the Blogs screen
const BlogList = ({ blogs }) => {
    return (
      <div className='blogList-wrap'>
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </div>
    );
  };

export default BlogList;
