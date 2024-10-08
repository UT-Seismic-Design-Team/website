import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({
    blog: {
      sections,
      title,
      createdAt,
      authorName,
      authorAvatar,
      cover,
      category,
      id,
    },
  }) => {
    return (
      <div className="blogItem-wrap">
        {/* Cover Image */}
        <img
          className="blogItem-cover"
          src={cover}
          alt="cover"
        />

        {/* Category */}
        <p className="chip">{category}</p>

        {/* Title and short description */}
        <h3>{title}</h3>
        <p
          className="blogItem-desc"
          dangerouslySetInnerHTML={{ __html: sections[0].description }}
        />

        {/* Card Footer */}
        <footer>
          <div className="blogItem-author">
            <img
              src={authorAvatar}
              alt="avatar"
            />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link className="blogItem-link" to={`/blog/${id}`}>
            ➝
          </Link>
        </footer>
      </div>
    );
  };

export default BlogItem;
