import React from "react";
import ProjectArray from "../Data/Projects/ProjectArray"
interface props {
  key: number,
  Project: typeof ProjectArray[0]
}

const ProjectCard = ({key, Project}: props) => {
  const styleProjectCard =
    "cursor-pointer transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 dark:hover:bg-[#0d0d0d] active:border-black border-2 dark:bg-black dark:border-neutral-900 active:dark:border-white rounded w-full p-4 mb-4";
  const styleProjectHeader = "text-lg font-semibold mb-2 text-blue-700";
  return (
      <div
        key={key}
        data-aos="fade-up"
        data-aos-duration="500"
        className={styleProjectCard}
      >
        <a target="_blank" rel="noopener noreferrer" href={Project?.linkToWork}>
          <div className={styleProjectHeader}>{Project?.title}</div>
          <div className="text-base">{Project?.description}</div>
        </a>
      </div>
  );
};

export default ProjectCard;
