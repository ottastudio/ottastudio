import TabContext from "./TabContext";
import { useState, ReactElement } from "react";
import useRequest from "../../../../lib/hooks/useRequest";

const TabBar: React.FC<{
  initialTab: string;
  children: ReactElement;
}> = ({ initialTab, children }) => {
  const { data: sites } = useRequest({ url: "/api/v1/sites/data" });
  const [tab, setTab] = useState(initialTab);

  return (
    <TabContext.Provider
      value={{ activeTab: tab, sites: sites?.sites, setTab }}
    >
      {children}
    </TabContext.Provider>
  );
};

export default TabBar;
