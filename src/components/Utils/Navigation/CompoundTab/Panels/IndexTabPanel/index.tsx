import { Fragment } from "react";

import { useUIContext } from "../../../../../../lib/store/UIContext";
import { staticLinks, userLinks, adminLinks } from "../../../../../../lib/misc";
import { NavlinkRegular } from "../../../../NavLink";
import { panelStyle } from "../panelStyle";

import TabPanel from "../../../Tab/TabPanel";
import { useAuthContext } from "../../../../../../lib/store/AuthContext";

export interface IndexTabPanelProps {}

const IndexTabPanel: React.FC<IndexTabPanelProps> = () => {
  const { token } = useAuthContext();
  const {
    darkModeScheme: { accent }
  } = useUIContext();

  const linksToMap =
    token === undefined
      ? staticLinks.concat(userLinks)
      : staticLinks.concat(adminLinks);
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
