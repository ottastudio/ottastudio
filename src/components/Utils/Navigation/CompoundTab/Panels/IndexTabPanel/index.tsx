import { Fragment, useState, useEffect } from "react";
import { style } from "typestyle";
import cookie from "js-cookie";

import { staticLinks, userLinks, adminLinks } from "../../../../../../lib/misc";
import { NavlinkRegular } from "../../../../NavLink";

import TabPanel from "../../../Tab/TabPanel";

export interface IndexTabPanelProps {}

const IndexTabPanel: React.FC<IndexTabPanelProps> = () => {
  const [token, setToken] = useState<string | undefined>();
  const divStyle = style({
    $debugName: "index-panel",
    minHeight: 120,
    padding: "10px 10px 40px 10px",
    backgroundColor: "coral",
    borderTop: "1px solid",
    marginTop: -1
  });

  const linksToMap =
    token === undefined
      ? staticLinks.concat(userLinks)
      : staticLinks.concat(adminLinks);

  useEffect(() => {
    const getCookie = cookie.get("token");
    setToken(getCookie);
  });
  return (
    <TabPanel whenActive="index">
      <div className={divStyle}>
        {linksToMap.map(({ name, to }, i: number) => (
          <Fragment key={i}>
            <NavlinkRegular href={to} activeClassName="link-active">
              <a className="link">{name}</a>
            </NavlinkRegular>
            <span>{i >= linksToMap.length - 1 ? "." : ", "}</span>
          </Fragment>
        ))}
      </div>
    </TabPanel>
  );
};

export default IndexTabPanel;
