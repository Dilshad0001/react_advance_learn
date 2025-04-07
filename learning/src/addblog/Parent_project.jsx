import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import BlogDetail from './BlogDetail';
import { BlogProvider } from './BlogContext';

function Parent_project() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/createblog" />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default Parent_project;