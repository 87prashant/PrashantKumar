import React from "react";

const ProjectCard = () => {
  return (
    <section className="mb-10">
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="cursor-pointer transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 rounded w-full p-4 mb-4"
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
        className="cursor-pointer transition-all duration-300 bg-zinc-100 hover:bg-zinc-200 rounded w-full p-4 mb-4"
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
    </section>
  );
};

export default ProjectCard;
