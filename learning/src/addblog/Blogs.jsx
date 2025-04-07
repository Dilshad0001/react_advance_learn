import React, { useContext } from 'react';
import { BlogContext } from './BlogContext';
import { Link } from 'react-router-dom';

function Blogs() {
  const { blogs } = useContext(BlogContext);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}><h3>{blog.title}</h3></Link>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
