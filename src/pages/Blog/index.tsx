import React from "react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import Main from '../../components/Main'

const Blog = () => {
  return (
    <div>
      <Header />
      <Main>
        <BlogCard/>
      </Main>
    </div>
  )
}
export default Blog;
