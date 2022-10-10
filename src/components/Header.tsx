import Link from "next/link";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BookIcon from "@mui/icons-material/Book";
import useWindowWidth from "../hooks/useWindowWidth";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const styleActivePage = "border-black border-2 dark:border-white";
  const stylePageButton =
    "transition-all duration-200 bg-zinc-200 hover:bg-zinc-300 rounded-lg font-bold dark:hover:bg-[#0d0d0d] dark:bg-black dark:text-white text-black cursor-pointer p-2";
  const isMobile = useWindowWidth() < 700;
  return (
    <div className="flex items-center justify-center sticky w-full h-20 z-10 top-0 backdrop-blur-xl mb-12">
      <div className="container items-center gap-5 px-5 max-w-4xl flex flex-row ">
        <Link href="/">
          <div
            className={`${
              router.pathname == "/" ? styleActivePage : ""
            } ${stylePageButton}`}
          >
            {isMobile ? <HomeIcon /> : "Home"}
          </div>
        </Link>
        <Link href="/About">
          <div
            className={`${
              router.pathname == "/About" ? styleActivePage : ""
            } ${stylePageButton}`}
          >
            {isMobile ? <EmojiPeopleIcon /> : "About"}
          </div>
        </Link>
        <Link href="/Post">
          <div
            className={`${
              router.pathname == "/Post" ? styleActivePage : ""
            } ${stylePageButton}`}
          >
            {isMobile ? <BookIcon /> : "Post"}
          </div>
        </Link>
        <a
          className="ml-auto mr-0 h-10 w-10 rounded-lg transition-all duration-200 dark:bg-black dark:hover:bg-[#0d0d0d] bg-zinc-200 hover:bg-zinc-300 p-2 flex justify-center items-center"
          rel="noreferrer"
          target="_blank"
          href="https://drive.google.com/file/d/1I3sjJ8sWWd-VfDP17Fp6b3dVAyO0PrtK/view?usp=sharing"
        >
          <TextSnippetIcon />
        </a>
        <a
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="cursor-pointer h-10 w-10 transition-all duration-200 dark:bg-black dark:hover:bg-[#0d0d0d] bg-zinc-200 hover:bg-zinc-300 rounded-lg p-2 flex justify-center items-center"
        >
          {theme === "light" ? <DarkModeOutlinedIcon /> : <LightModeIcon />}
        </a>
      </div>
    </div>
  );
};

export default Header;
