import { allPosts, Post } from "contentlayer/generated";
import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Main from "../../components/Main";
import Header from "../../components/Header";
import Image from "next/image";
import ProfilePic from "../../Data/Images/Profile_Cropped.png";
import { parseISO, format } from "date-fns";
import Footer from "../../components/Footer";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({ params: { url: post.url } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { url: string } }) {
  const post = allPosts.find((post) => post.url === params.url);
  console.log(post);
  return {
    props: {
      post,
    },
  };
}

interface Props {
  post: Post;
  key: number;
}

const PostLayout = ({ post }: Props) => {
  const Component = useMDXComponent(post.body.code);
  return (
    <>
      <Header />
      <Main>
        <div className="text-4xl font-black mb-14 text-center">{post.title}</div>
        <div className="flex mb-8">
          <Image src={ProfilePic} height="10" width="23" />
          <p className="ml-6">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
        </div>
        <div className="text-lg">
          <Component />
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default PostLayout;
