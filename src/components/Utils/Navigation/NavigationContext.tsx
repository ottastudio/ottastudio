import { createContext } from "react";

export interface NavigationProps {
  showContent: boolean;
  setShowContent: Function;
  disable: boolean;
  setDisable: Function;
}

export default createContext<NavigationProps>({
  showContent: false,
  setShowContent: () => {},
  disable: false,
  setDisable: () => {}
});
