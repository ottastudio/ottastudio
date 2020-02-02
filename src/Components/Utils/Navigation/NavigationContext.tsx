import { createContext } from "react";

export interface NavigationProps {
  sites: any;
}

export default createContext<NavigationProps>({
  sites: ""
});
