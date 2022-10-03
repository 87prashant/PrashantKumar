import { useState, useEffect, SetStateAction, Dispatch } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth]: [
    windowWidth: number | undefined,
    setWindowWidth: Dispatch<SetStateAction<number | undefined>>
  ] = useState();
  const { innerWidth: width } = window;

  const handleResize = () => {
    setWindowWidth(() => width);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
};

export default useWindowWidth;
