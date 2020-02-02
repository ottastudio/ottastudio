import { createContext } from "react";

export interface TabProps {
  activeTab: string;
  setTab: Function;
  sites: any;
}

export default createContext<TabProps>({
  activeTab: "",
  setTab: () => {},
  sites: {}
});
