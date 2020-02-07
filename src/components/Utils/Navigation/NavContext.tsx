import { createContext, useState } from "react";
import { useWindowDimension } from "../../../lib/hooks/useWindowDimension";

export interface NavigationProps {
  showContent: boolean;
  setShowContent: Function;
  disable: boolean;
  setDisable: Function;
}

export const NavContext = createContext<NavigationProps>({
  showContent: false,
  setShowContent: () => {},
  disable: false,
  setDisable: () => {}
});

export const NavProvider: React.FC<{}> = ({ children }) => {
  const { width } = useWindowDimension();

  const isPhone = width <= 767 ? true : false;

  const [disable, setDisable] = useState(isPhone);
  const [showContent, setShowContent] = useState(false);

  return (
    <NavContext.Provider
      value={{ showContent, setShowContent, disable, setDisable }}
    >
      {children}
    </NavContext.Provider>
  );
};
