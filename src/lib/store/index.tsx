import { createContext } from "react";
import { AuthProvider } from "./AuthContext";
import { UIProvider } from "./UIContext";
import { NotificationProvider } from "./NotificationContext";

const AppContext = createContext({});

export const Ottastudio: React.FC<{}> = ({ children }) => {
  return (
    <AppContext.Provider value={{ lang: "en" }}>
      <AuthProvider>
        <UIProvider>
          <NotificationProvider>{children}</NotificationProvider>
        </UIProvider>
      </AuthProvider>
    </AppContext.Provider>
  );
};
