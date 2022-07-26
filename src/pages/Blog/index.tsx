import React from "react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";

const Blog = () => {
  return (
    <div>
      <Header />
      <div className="flex mx-auto flex-column container max-w-4xl px-4">
        <BlogCard/>
      </div>
    </div>
  )
}
export default Blog;
