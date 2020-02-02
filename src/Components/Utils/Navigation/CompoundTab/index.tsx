import TabBar from "../Tab/TabBar";
import { Fragment } from "react";
import { useRouter } from "next/router";
import Panels from "./Panels";
import Tabs from "./Tabs";
import Footer from "./Footer";

export interface CompoundTabProps {}

const CompoundTab: React.FC<CompoundTabProps> = () => {
  const { pathname } = useRouter();
  const activeTab = pathname === "/projects/[name]" ? "projects" : "index";
  return (
    <TabBar initialTab={activeTab}>
      <Fragment>
        <Tabs />
        <Panels />
        <Footer />
      </Fragment>
    </TabBar>
  );
};

export default CompoundTab;
