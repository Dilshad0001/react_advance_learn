// src/project/BlogContext.jsx
import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);

  const addBlog = (blog) => {
    setBlogs((prev) => [...prev, { ...blog, id: Date.now() }]);
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
