import { Fragment, useState, useEffect, useContext } from "react";
import cookie from "js-cookie";

import { UIContext } from "../../../../../../lib/store/UIContext";
import { staticLinks, userLinks, adminLinks } from "../../../../../../lib/misc";
import { NavlinkRegular } from "../../../../NavLink";
import { panelStyle } from "../panelStyle";

import TabPanel from "../../../Tab/TabPanel";

export interface IndexTabPanelProps {}

const IndexTabPanel: React.FC<IndexTabPanelProps> = () => {
  const {
    darkModeScheme: { accent }
  } = useContext(UIContext);
  const [token, setToken] = useState<string | undefined>();

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
      <div className={panelStyle("index-panel", accent as string)}>
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
