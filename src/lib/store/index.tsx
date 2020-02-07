import { createContext } from "react";
import { UIProvider } from "./UIContext";

const AppContext = createContext({});

export const Ottastudio: React.FC<{}> = ({ children }) => {
  return (
    <AppContext.Provider value={{ lang: "en" }}>
      <UIProvider>{children}</UIProvider>
    </AppContext.Provider>
  );
};
