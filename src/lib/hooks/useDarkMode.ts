import { useEffect, Dispatch, SetStateAction, useState } from "react";

export type DarkModeType = "theme--light" | "theme--dark";
export type SetDarkModeType = Dispatch<SetStateAction<DarkModeType>>;

export type DarkModeSchemeType = {
  type: DarkModeType;
  color?: string;
  backgroundColor?: string;
  invertColor?: string;
  invertBackground?: string;
  accent?: string;
  danger?: string;
  cool?: string;
};

export const themeLight: DarkModeSchemeType = {
  type: "theme--light",
  color: "#000000",
  backgroundColor: "#f5f5f5",
  invertColor: "#ffffff",
  invertBackground: "#0a0a0a",
  accent: "#00ff00",
  danger: "#ff4500",
  cool: "#00bfff"
  // accent: "#ff7f50"
};
export const themeDark: DarkModeSchemeType = {
  type: "theme--dark",
  color: "#f5f5f5",
  backgroundColor: "#000000",
  invertColor: "#0a0a0a",
  invertBackground: "#ffffff",
  accent: "#ff1493",
  danger: "#ff0000",
  cool: "#0000ff"
};

const darkModeSchemeValues = (type: DarkModeType) => {
  switch (type) {
    case "theme--light":
      return { darkModeScheme: themeLight };
    case "theme--dark":
      return { darkModeScheme: themeDark };
    default:
      return { darkModeScheme: themeLight };
  }
};

const getLocalStorage = (key: string, initial: string) => {
  const item =
    typeof window !== "undefined" &&
    window?.localStorage.getItem(key)?.valueOf();
  const value: string = item ? item : initial;
  return { value };
};

export const useDarkMode = () => {
  const getMediaPrefersColorScheme =
    typeof window !== "undefined" &&
    window?.matchMedia("(prefers-color-scheme: dark)").matches;

  const passInitialTheme: DarkModeType = getMediaPrefersColorScheme
    ? "theme--dark"
    : "theme--light";

  const { value: initialDarkmode } = getLocalStorage(
    "dark-mode",
    passInitialTheme
  );

  const [darkMode, setDarkMode] = useState<DarkModeType>(
    initialDarkmode as DarkModeType
  );
  const { darkModeScheme } = darkModeSchemeValues(darkMode);

  useEffect(() => {
    window.localStorage.setItem("dark-mode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    const body = document.body;
    body.classList.add(darkMode);
    return () => body.classList.remove(darkMode);
  }, [darkMode]);

  return { darkMode, setDarkMode, darkModeScheme };
};
