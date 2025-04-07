
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogContext } from './BlogContext';

import { useNavigate } from 'react-router-dom';

function BlogDetail() {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;
  const nav=useNavigate()

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.body}</p>
      <button onClick={()=>nav ("/createblog")}>create new blog</button>
    </div>
  );
}

export default BlogDetail;
