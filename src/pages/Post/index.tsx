import React from "react";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { allPosts } from "contentlayer/generated";
import useWindowWidth from "src/hooks/useWindowWidth";

const Post = () => {
  return (
    <div>
      <Header windowWidth={useWindowWidth()} />
      <Main>
        <div className="text-4xl font-black mb-14 text-center">All Posts</div>
        {allPosts.map((Post, idx) => (
          <PostCard key={idx} post={Post} />
        ))}
      </Main>
      <Footer />
    </div>
  );
};
export default Post;
