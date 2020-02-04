import { useContext, ReactElement } from "react";
import { style, media } from "typestyle";
import TabContext from "./TabContext";

export interface TabProps {
  tab: string;
  tag: any;
  children: string | ReactElement;
}

const Tab: React.FC<TabProps> = ({ tab, children }) => {
  const tabBarContext = useContext(TabContext);
  const { setTab, activeTab } = tabBarContext;

  let isActive = activeTab === tab;

  const customActive = {
    borderLeft:
      isActive && activeTab === "projects"
        ? "1px solid currentColor"
        : "1px solid transparent",
    borderRight:
      isActive && activeTab === "index"
        ? "1px solid currentColor"
        : "1px solid transparent",
    backgroundColor:
      isActive && activeTab === "projects"
        ? "lightsalmon"
        : isActive && activeTab === "index"
        ? "coral"
        : "inherit"
  };

  const tabStyle = style(
    customActive,
    {
      $debugName: "tab",
      width: "50%",
      fontSize: "1rem",
      fontFamily: "inherit",
      background: "none",
      border: "none",
      height: 40,
      cursor: "pointer",
      color: "currentColor",
      padding: "0px 0px 0px 10px",
      textAlign: "left"
    },
    media({ maxWidth: 767 }, { height: 60 })
  );

  return (
    <button
      onClick={() => setTab(tab)}
      className={tabStyle}
      name={tab}
      title={tab}
    >
      {children}
    </button>
  );
};

export default Tab;
