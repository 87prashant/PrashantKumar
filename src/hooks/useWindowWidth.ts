import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<number | undefined>();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return windowWidth;
};

export default useWindowWidth;
