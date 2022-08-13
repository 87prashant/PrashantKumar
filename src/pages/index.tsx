import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React from "react";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import PostCard from "../components/PostCard";
import type { Post } from "contentlayer/generated";
import Intro from "../components/Intro";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProjectCard from "../components/ProjectCard";

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
        <section>
          <div className="flex mb-6 items-center">
            <h1 className="text-lg font-bold">Projects / Open-Source Contributions</h1>
            <div className="flex ml-auto font-bold transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-[#0d0d0d] active:border-black border-2 rounded-lg dark:bg-black dark:text-white text-black dark:border-neutral-900 active:dark:border-white cursor-pointer p-2">
              <Link href="/About#all_projects">
                <div className="flex">
                  Show All
                  <div className="flex items-center justify-center ml-3">
                    <ArrowForwardIcon />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <ProjectCard />
        </section>
        <section className="mb-6">
          <div className="flex mb-4 items-center">
            <h1 className="text-lg font-bold">Recent Posts</h1>
            <div className="flex ml-auto font-bold transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-[#0d0d0d] active:border-black border-2 rounded-lg dark:bg-black dark:text-white text-black dark:border-neutral-900 active:dark:border-white cursor-pointer p-2">
              <Link href="/Post">
                <div className="flex">
                  Show All
                  <div className="flex items-center justify-center ml-3">
                    <ArrowForwardIcon />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {posts.slice(0, 3).map((post, idx) => (
            <PostCard key={idx} post={post} />
          ))}
        </section>
      </Main>
      <Footer />
    </>
  );
}
