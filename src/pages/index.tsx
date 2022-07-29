import Header from '../components/Header'
import Main from "../components/Main"
import React from 'react'
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import PostCard from '../components/PostCard'
import type { Post } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return {props: {posts}}
}

type Props = {
  posts: Post[];
};

export default function Home({posts}: Props) {
  return (
    <div>
      <Header/>
      <Main>
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
      </Main>
    </div>
  );
}
