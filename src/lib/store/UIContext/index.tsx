import { useState, createContext } from "react";
import {
  NotificationType,
  UIType,
  SetUIType,
  LoadingType,
  SetLoadingType,
  SetNotificationType
} from "./interfaces";

export interface UIContextProps {
  ui: UIType;
  setUI: SetUIType;
  loading: LoadingType;
  setLoading: SetLoadingType;
  notification: NotificationType;
  setNotification: SetNotificationType;
}

export const UIContext = createContext<UIContextProps>({
  loading: false,
  setLoading: () => {},
  notification: { status: false },
  setNotification: () => {},
  ui: {},
  setUI: () => {}
});

export const UIProvider: React.FC<{}> = ({ children }) => {
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
        setNotification
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const UIConsumer = UIContext.Consumer;
