// import { allPosts, Post } from "contentlayer/generated";
import React from "react";
// import { useMDXComponent } from 'next-contentlayer/hooks';
import Main  from "../../components/Main";

// export async function getStaticPaths() {
//   const paths = allPosts.map((post) => ({ params: { url: post.slug } }));
//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params }: { params: { slug: string } }) {
//   const post = allPosts.find((post) => post.slug === params.slug);
//   console.log(post)
//   return {
//     props: {
//       post,
//     },
//   };
// }

const PostLayout = () => {
  // const Component = useMDXComponent(post.body.code);
    return (
      <>
        <Main>
          {/* <Component/> */}
          My name is Prashant Kumar
        </Main>
      </>
    );
  };

export default PostLayout;
