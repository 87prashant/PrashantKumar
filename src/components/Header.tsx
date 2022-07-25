import Link from "next/link";
import { Home, Boy, Article, DarkMode } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="flex items-center border-4 border-black-800 justify-center sticky w-full h-20 z-50 top-0 mb-8 backdrop-blur-xl">
      <div className="container gap-3 px-5 max-w-5xl flex flex-row justify-end">
        <DarkMode className="cursor-pointer absolute mr-1200" />
        <Link href="/">
          <Home className="cursor-pointer" />
        </Link>
        <Link href="/About">
          <Boy className="cursor-pointer" />
        </Link>
        <Link href="/Blog">
          <Article />
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default Header;
