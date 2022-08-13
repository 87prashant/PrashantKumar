import React from "react";
import { useRouter } from "next/router";

const ProjectCard = () => {
    //Todo: make define className with below repeated property and use it to remove repetition.
    //Todo: make separate array of projects to replace hardcoded code.

  const router = useRouter();
  return (
    <section className="mb-10">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="cursor-pointer transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-[#0d0d0d] active:border-black border-2 dark:bg-black dark:border-neutral-900 active:dark:border-white rounded w-full p-4 mb-4"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/87prashant/PrashantKumar"
        >
          <div className="text-lg font-semibold mb-2 text-blue-700">
            Personal Website
          </div>
          <div className="text-base">
            Portfolio with blog/post functionality
          </div>
        </a>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="cursor-pointer transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-[#0d0d0d] active:border-black dark:bg-black border-2 dark:border-neutral-900 active:dark:border-white rounded w-full p-4 mb-4"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ParabolInc/parabol/pull/6910"
        >
          <div className="text-lg font-semibold mb-2 text-blue-700">
            Parabol
          </div>
          <div className="text-base">
            Fixed issues and added frontend features
          </div>
        </a>
      </div>
      {router.pathname === "/About" && <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="cursor-pointer transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-[#0d0d0d] active:border-black border-2 dark:bg-black dark:border-neutral-900 active:dark:border-white rounded w-full p-4 mb-4"
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/87prashant/Minor-Pojects"
        >
          <div className="text-lg font-semibold mb-2 text-blue-700">
            Minor Project
          </div>
          <div className="text-base">
            Basic projects with HTML, CSS and JavaScript
          </div>
        </a>
      </div>}
    </section>
  );
};

export default ProjectCard;
