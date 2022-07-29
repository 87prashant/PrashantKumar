import Link from "next/link";
import { HomeOutlined, BoyOutlined, ArticleOutlined, DarkModeOutlined } from "@mui/icons-material";
import React from "react"

const Header = () => {
  return (
    <div className="flex items-center border-4 border-black-800 justify-center sticky w-full h-20 z-10 top-0 backdrop-blur-xl mb-12">
      <div className="container gap-5 px-5 max-w-4xl flex flex-row ">
        <Link href="/">
          <HomeOutlined className="cursor-pointer h-6 w-6" />
        </Link>
        <Link href="/About">
          <BoyOutlined className="cursor-pointer h-6 w-6" />
        </Link>
        <Link href="/Post">
          <ArticleOutlined className="cursor-pointer h-6 w-6" />
        </Link>
        <DarkModeOutlined className="cursor-pointer ml-auto h-6 w-6" />
      </div>
    </div>
  );
};

export default Header;
