import { useState, useEffect } from "react";

export const useWindowDimension = () => {
  const [windowSize, setWindowSize] = useState(() => ({
    width:
      (typeof window !== "undefined" && window && window.innerWidth) || 1000,
    height:
      (typeof window !== "undefined" && window && window.innerHeight) || 1000
  }));

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  return {
    width: windowSize.width,
    height: windowSize.height
  };
};
