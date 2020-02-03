import { useRouter } from "next/router";
import { style } from "typestyle";

import { transition } from "../../../../lib/misc";

import NavigationContext from "../NavigationContext";
import TabBar from "../Tab/TabBar";
import Panels from "./Panels";
import Tabs from "./Tabs";
import Footer from "./Footer";

const CompoundTab: React.FC<{}> = () => {
  const { pathname } = useRouter();
  const activeTab = pathname === "/projects/[name]" ? "projects" : "index";

  const divStyle = (show: boolean) =>
    style({
      $debugName: "navigation-content",
      position: "relative",
      overflow: "hidden",
      marginTop: -1,
      height: show ? "auto" : 0,
      transition: `height ${transition.main}`
    });

  return (
    <NavigationContext.Consumer>
      {({ showContent }) => (
        <TabBar initialTab={activeTab}>
          <div className={divStyle(showContent)}>
            <Tabs />
            <Panels />
            <Footer />
          </div>
        </TabBar>
      )}
    </NavigationContext.Consumer>
  );
};

export default CompoundTab;
