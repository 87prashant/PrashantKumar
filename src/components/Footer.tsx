import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="pb-10 mt-6 flex items-center justify-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/87prashant"
        className="mx-5"
      >
        <GitHubIcon className="h-8 w-8 cursor-pointer hover:text-[#6e5494]" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/87KumarPrashant"
        className="mx-5"
      >
        <TwitterIcon className="h-8 w-8 cursor-pointer hover:text-[#1DA1F2]" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/prashant-kumar-bb990317b/"
        className="mx-5"
      >
        <LinkedInIcon className="h-8 w-8 cursor-pointer hover:text-[#0072b1]" />
      </a>
    </div>
  );
};

export default Footer;
