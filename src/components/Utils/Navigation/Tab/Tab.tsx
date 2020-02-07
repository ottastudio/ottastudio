import { useContext, ReactElement } from "react";
import { style, media } from "typestyle";
import { UIContext } from "../../../../lib/store/UIContext";
import TabContext from "./TabContext";

export interface TabProps {
  tab: string;
  tag: any;
  children: string | ReactElement;
}

const Tab: React.FC<TabProps> = ({ tab, children }) => {
  const {
    darkModeScheme: { accent }
  } = useContext(UIContext);
  const tabBarContext = useContext(TabContext);
  const { setTab, activeTab } = tabBarContext;

  let isActive = activeTab === tab;

  const customActive = {
    backgroundColor: isActive ? accent : "inherit"
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
      padding: "0px 0px 0px 10px",
      textAlign: "left",
      color: "currentColor"
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
