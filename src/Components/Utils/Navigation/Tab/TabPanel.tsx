import { useContext, ReactElement } from "react";
import TabContext from "./TabContext";

const TabPanel: React.FC<{ whenActive: string; children: ReactElement }> = ({
  whenActive,
  children
}) => {
  const tabBarContext = useContext(TabContext);
  const { activeTab } = tabBarContext;
  return whenActive === activeTab ? children : null;
};

export default TabPanel;
