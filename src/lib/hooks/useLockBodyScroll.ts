import { useEffect } from "react";

export const useLockBodyScroll = () => {
  useEffect(() => {
    const originalScroll =
      typeof window !== "undefined" &&
      window?.window.getComputedStyle(document.body).overflow;

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalScroll as string;
    };
  }, []);
};
