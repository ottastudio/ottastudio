import { useState, createContext, useContext } from "react";
import { UIType, SetUIType, LoadingType, SetLoadingType } from "./interfaces";
import {
  DarkModeType,
  SetDarkModeType,
  useDarkMode,
  DarkModeSchemeType
} from "../../hooks/useDarkMode";

export interface UIContextProps {
  ui: UIType;
  setUI: SetUIType;
  loading: LoadingType;
  setLoading: SetLoadingType;
  darkMode: DarkModeType;
  setDarkMode: SetDarkModeType;
  darkModeScheme: DarkModeSchemeType;
}

export const UIContext = createContext<UIContextProps>({
  loading: false,
  setLoading: () => {},
  ui: {},
  setUI: () => {},
  darkMode: "theme--light",
  setDarkMode: () => {},
  darkModeScheme: { type: "theme--light" }
});

export const UIProvider: React.FC<{}> = ({ children }) => {
  const { darkMode, setDarkMode, darkModeScheme } = useDarkMode();
  const [loading, setLoading] = useState<LoadingType>(false);
  const [ui, setUI] = useState<UIType>({ footer: true });

  return (
    <UIContext.Provider
      value={{
        ui,
        setUI,
        loading,
        setLoading,
        darkMode,
        setDarkMode,
        darkModeScheme
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const UIConsumer = UIContext.Consumer;
export const useUIContext = () => useContext(UIContext);
