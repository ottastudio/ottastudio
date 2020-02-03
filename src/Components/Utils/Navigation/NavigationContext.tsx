import { createContext } from "react";

export interface NavigationProps {
  showContent: boolean;
  setShowContent: Function;
}

export default createContext<NavigationProps>({
  showContent: false,
  setShowContent: () => {}
});
