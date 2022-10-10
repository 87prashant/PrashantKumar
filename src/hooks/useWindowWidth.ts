import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
