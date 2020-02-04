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

  const tabStyle = style(
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
      padding: 0,
      filter: isActive ? "blur(0px)" : "blur(1px)",
      textDecoration: isActive ? "underline" : "none",
      $nest: {
        "&:hover": {
          filter: "blur(0px)",
          textDecoration: "underline"
        },
        "&:focus": {
          filter: "blur(0px)",
          textDecoration: "1px solid"
        }
      }
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
