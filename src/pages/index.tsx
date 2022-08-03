import Header from "../components/Header";
import Main from "../components/Main";
import React from "react";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import type { Post } from "contentlayer/generated";
import Intro from "../components/Intro";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { posts } };
}

interface Props {
  key: number;
  posts: Post[];
}

export default function Home({ posts }: Props) {
  return (
    <>
      <Header />
      <Main>
        <Intro />
        {posts.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </Main>
    </>
  );
}
