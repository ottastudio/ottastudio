import { useState, createContext } from "react";
import {
  NotificationType,
  UIType,
  SetUIType,
  LoadingType,
  SetLoadingType,
  SetNotificationType
} from "./interfaces";
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
  notification: NotificationType;
  setNotification: SetNotificationType;
  darkMode: DarkModeType;
  setDarkMode: SetDarkModeType;
  darkModeScheme: DarkModeSchemeType;
}

export const UIContext = createContext<UIContextProps>({
  loading: false,
  setLoading: () => {},
  notification: { status: false },
  setNotification: () => {},
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
  const [notification, setNotification] = useState<NotificationType>({
    message: null,
    status: false,
    type: null
  });

  return (
    <UIContext.Provider
      value={{
        ui,
        setUI,
        loading,
        setLoading,
        notification,
        setNotification,
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
