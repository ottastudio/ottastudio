import Tab from "../../Tab/Tab";
import TabContext from "../../Tab/TabContext";
import Typing from "../../../Loader/Typing";
import { style } from "typestyle";

const Tabs: React.FC<{}> = () => {
  const divStyle = style({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start"
  });
  return (
    <TabContext.Consumer>
      {({ sites }) => {
        const name = sites ? sites.name.full : null;
        const tabs = [
          { tab: "index", label: name },
          { tab: "projects", label: "Projects" }
        ];
        return (
          <div className={divStyle}>
            {tabs.map(({ tab, label }) => (
              <Tab key={tab} tab={tab} tag="span">
                {label === null ? (
                  <span>
                    Loading
                    <Typing />
                  </span>
                ) : (
                  label
                )}
              </Tab>
            ))}
          </div>
        );
      }}
    </TabContext.Consumer>
  );
};

export default Tabs;
