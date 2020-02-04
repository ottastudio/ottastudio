import { Fragment } from "react";
import { style } from "typestyle";

import { staticLinks } from "../../../../../../lib/misc";
import { NavlinkRegular } from "../../../../NavLink";

import TabPanel from "../../../Tab/TabPanel";

export interface IndexTabPanelProps {}

const IndexTabPanel: React.FC<IndexTabPanelProps> = () => {
  const divStyle = style({
    $debugName: "index-panel",
    minHeight: 120,
    padding: "10px 10px 40px 10px",
    backgroundColor: "coral",
    borderTop: "1px solid",
    marginTop: -1
  });
  return (
    <TabPanel whenActive="index">
      <div className={divStyle}>
        {staticLinks.map(({ name, to }, i: number) => (
          <Fragment key={i}>
            <NavlinkRegular href={to} activeClassName="link-active">
              <a className="link">{name}</a>
            </NavlinkRegular>
            <span>{i >= staticLinks.length - 1 ? "." : ", "}</span>
          </Fragment>
        ))}
      </div>
    </TabPanel>
  );
};

export default IndexTabPanel;
