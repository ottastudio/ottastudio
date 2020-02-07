import { useContext } from "react";
import { useRouter } from "next/router";
import { style } from "typestyle";

import { NavContext } from "../NavContext";
import TabBar from "../Tab/TabBar";
import Panels from "./Panels";
import Tabs from "./Tabs";
import Footer from "./Footer";

const CompoundTab: React.FC<{}> = () => {
  const { showContent } = useContext(NavContext);
  const { pathname } = useRouter();
  const activeTab = pathname === "/projects/[name]" ? "projects" : "index";

  const divStyle = (show: boolean) => {
    return style({
      $debugName: "navigation-content",
      position: "relative",
      overflow: "hidden",
      marginTop: -1,
      height: show ? "auto" : 0
    });
  };

  return (
    <TabBar initialTab={activeTab}>
      <div className={divStyle(showContent)}>
        <Tabs />
        <Panels />
        <Footer />
      </div>
    </TabBar>
  );
};

export default CompoundTab;
