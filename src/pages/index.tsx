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
import ProjectArray from "../Data/Projects/ProjectArray";
import useWindowWidth from "src/hooks/useWindowWidth";

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
  const styleShowAll =
    "font-bold w-[120px] transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-[#0d0d0d] active:border-black border-2 rounded-lg dark:bg-black dark:text-white text-black dark:border-neutral-900 active:dark:border-white cursor-pointer p-2";
  const SomeProjects = ProjectArray.slice(0, 2).map((Project, idx) => {
    return <ProjectCard key={idx} Project={Project} />;
  });
  return (
    <div>
      <Header windowWidth={useWindowWidth()} />
      <Main>
        <Intro />
        <section>
          <div className="flex mb-6 items-center justify-between">
            <div className="text-lg font-bold">
              Projects / Open-Source Contributions
            </div>
            <div className="flex items-end justify-end w-[50%]">
              <div className={styleShowAll}>
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
          </div>
          <section className="mb-10">{SomeProjects}</section>
        </section>
        <section className="mb-6">
          <div className="flex mb-4 items-center justify-between">
            <div className="text-lg font-bold">Recent Posts</div>
            <div className={styleShowAll}>
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
    </div>
  );
}
