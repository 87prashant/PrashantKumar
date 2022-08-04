import Link from "next/link";
// import HomeOutlined from "@mui/icons-material/HomeOutlined";
// import BoyOutlined from "@mui/icons-material/BoyOutlined";
// import ArticleOutlined from "@mui/icons-material/ArticleOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center sticky w-full h-20 z-10 top-0 backdrop-blur-xl mb-12">
      <div className="container items-center gap-5 px-5 max-w-4xl flex flex-row ">
        <Link href="/">
          <div className="transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 rounded-lg font-bold text-black cursor-pointer p-2">
            Home
          </div>
        </Link>
        <Link href="/About">
          <div className="transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 rounded-lg font-bold text-black cursor-pointer p-2">
            About
          </div>
        </Link>
        <Link href="/Post">
          <div className="transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 rounded-lg font-bold text-black cursor-pointer p-2">
            Post
          </div>
        </Link>
        <div className="cursor-pointer ml-auto h-10 w-10 transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 rounded-lg p-2 flex justify-center items-center">
        <DarkModeOutlinedIcon  />
        </div>
      </div>
    </div>
  );
};

export default Header;
