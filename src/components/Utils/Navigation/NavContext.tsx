import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext
} from "react";
import Router from "next/router";
import { useWindowDimension } from "../../../lib/hooks/useWindowDimension";
import { draggableBounds } from "./Draggable";

export interface NavigationProps {
  showContent: boolean;
  setShowContent: Dispatch<SetStateAction<boolean>>;
  disable: boolean;
  setDisable: Dispatch<SetStateAction<boolean>>;
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
  useEffect(() => {
    Router.events.on("routeChangeComplete", () => setShowContent(false));
  }, []);
  return (
    <NavContext.Provider
      value={{ showContent, setShowContent, disable, setDisable }}
    >
      <div className={draggableBounds} />
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => useContext(NavContext);
