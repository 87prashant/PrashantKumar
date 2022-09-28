import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className="pb-10 mt-6 flex items-center justify-center">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/87prashant"
        className="mx-5"
      >
        <div className="h-8 w-8 cursor-pointer hover:text-[#6e5494]">
          <GitHubIcon />
        </div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/87KumarPrashant"
        className="mx-5"
      >
        <div className="h-8 w-8 cursor-pointer hover:text-[#1DA1F2]">
          <TwitterIcon />
        </div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/prashant-kumar-bb990317b/"
        className="mx-5"
      >
        <div className="h-8 w-8 cursor-pointer hover:text-[#0072b1]">
          <LinkedInIcon />
        </div>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:87KumarPrashant@gmail.com"
        className="mx-5"
      >
        <div className="h-8 w-8 cursor-pointer hover:text-green-700">
          <EmailIcon />
        </div>
      </a>
      
    </div>
  );
};

export default Footer;
