import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const { value, setValue } = useLocalStorage("dark-mode");
  const enabled: string = typeof value !== "undefined" ? value : null;

  useEffect(() => {
    const element = document.body;
    if (enabled !== null) {
      element.classList.add(enabled);
    }
    return () => element.classList.remove(enabled);
  }, [value]);

  return { darkMode: enabled, setDarkMode: setValue };
};
