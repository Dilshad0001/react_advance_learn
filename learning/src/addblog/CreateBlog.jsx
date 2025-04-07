import React, { useState, useContext } from 'react';
import { BlogContext } from './BlogContext';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { addBlog } = useContext(BlogContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog({ title, body });
    navigate('/blogs');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Blog</h2>
       <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/> {/* onchang->store each when changes */}
      <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateBlog;