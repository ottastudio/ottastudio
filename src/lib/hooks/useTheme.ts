import { useState, Dispatch, SetStateAction, useEffect } from "react";

export type themeWhite = "theme--white";
export type themeRed = "theme--red";
export type themeBlack = "theme--black";
export type themeBlue = "theme--blue";
export type ThemeType = themeWhite | themeRed | themeBlack | themeBlue;
export type SetThemeType = Dispatch<SetStateAction<ThemeType>>;

export type ColorSchemeType = {
  type: ThemeType;
  color?: string;
  backgroundColor?: string;
  invertColor?: string;
  invertBackground?: string;
};

export const themeWhite: ColorSchemeType = {
  type: "theme--white",
  color: "#000000",
  backgroundColor: "#f5f5f5",
  invertColor: "#ffffff",
  invertBackground: "#0a0a0a"
};
export const themeBlack: ColorSchemeType = {
  type: "theme--black",
  color: "#f5f5f5",
  backgroundColor: "#000000",
  invertColor: "#0a0a0a",
  invertBackground: "#ffffff"
};
export const themeRed: ColorSchemeType = {
  type: "theme--red",
  color: "#000000",
  backgroundColor: "#ff0000",
  invertColor: "#ffffff",
  invertBackground: "#00ffff"
};
export const themeBlue: ColorSchemeType = {
  type: "theme--blue",
  color: "#ffffff",
  backgroundColor: "#0000ff",
  invertColor: "#000000",
  invertBackground: "#ffff00"
};

const colorSchemeValues = (type: ThemeType) => {
  switch (type) {
    case "theme--white":
      return { colorScheme: themeWhite };
    case "theme--black":
      return { colorScheme: themeBlack };
    case "theme--red":
      return { colorScheme: themeRed };
    case "theme--blue":
      return { colorScheme: themeBlue };
    default:
      return { colorScheme: themeWhite };
  }
};

const getLocalStorage = (key: string, initial: string) => {
  const item =
    typeof window !== "undefined" &&
    window?.localStorage.getItem(key)?.valueOf();

  const value: string = item ? item : initial;

  return { value };
};

export const useTheme = () => {
  const { value: initialTheme } = getLocalStorage("theme", "theme--white");

  const [theme, setTheme] = useState<ThemeType>(initialTheme as ThemeType);
  const { colorScheme } = colorSchemeValues(theme);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const body = document.body;
    body.classList.add(theme);
    return () => body.classList.remove(theme);
  });

  return { theme, setTheme, colorScheme };
};
