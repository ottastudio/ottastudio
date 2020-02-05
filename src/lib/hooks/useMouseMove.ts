import { useCallback, useRef } from "react";

export const useMouseMove = () => {
  const mouse = useRef([0, 0]);
  const onMouseMove = useCallback(({ clientX: x, clientY: y }) => {
    mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
  }, []);

  return { onMouseMove };
};
