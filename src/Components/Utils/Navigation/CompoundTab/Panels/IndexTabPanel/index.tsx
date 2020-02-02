import TabPanel from "../../../Tab/TabPanel";
import { NavlinkRegular } from "../../../../NavLink";
import { Fragment } from "react";
import { staticLinks } from "../../../../../../lib/misc";

export interface IndexTabPanelProps {}

const IndexTabPanel: React.FC<IndexTabPanelProps> = () => {
  return (
    <TabPanel whenActive="index">
      <Fragment>
        {staticLinks.map(({ name, to }, i: number) => (
          <Fragment key={i}>
            <NavlinkRegular href={to} activeClassName="link-active">
              <a className="link">{name}</a>
            </NavlinkRegular>
            <span>{i >= staticLinks.length - 1 ? "." : ", "}</span>
          </Fragment>
        ))}
      </Fragment>
    </TabPanel>
  );
};

export default IndexTabPanel;
