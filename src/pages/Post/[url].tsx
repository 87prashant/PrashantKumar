import { allPosts, Post } from "contentlayer/generated";
import React from "react";
import { useMDXComponent } from 'next-contentlayer/hooks';
import Main  from "../../components/Main";
import Header from "../../components/Header"

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({ params: { url: post.url } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { url: string } }) {
  const post = allPosts.find((post) => post.url === params.url);
  console.log(post)
  return {
    props: {
      post,
    },
  };
}

interface Props {
  post: Post
  key: number
}

const PostLayout = ({post}: Props) => {
  const Component = useMDXComponent(post.body.code);
    return (
      <>
        <Main>
          <Header/>
          <Component/>
        </Main>
      </>
    );
  };

export default PostLayout;
