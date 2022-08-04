import React from "react";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { allPosts } from "contentlayer/generated";

const Post = () => {
  return (
    <div>
      <Header />
      <Main>
        <div className="text-xl mb-5 font-bold">All Posts</div>
        {allPosts.map((Post, idx) => (
          <PostCard key={idx} post={Post} />
        ))}
      </Main>
      <Footer />
    </div>
  );
};
export default Post;
