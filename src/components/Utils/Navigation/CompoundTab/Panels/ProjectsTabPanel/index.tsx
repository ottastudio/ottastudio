import TabPanel from "../../../Tab/TabPanel";
import { panelStyle } from "../panelStyle";
import { useContext } from "react";
import { UIContext } from "../../../../../../lib/store/UIContext";

const ProjectsTabPanel: React.FC<{}> = () => {
  const {
    darkModeScheme: { accent }
  } = useContext(UIContext);
  return (
    <TabPanel whenActive="projects">
      <div className={panelStyle("projects-panel", accent as string)}>
        <a className="link">Projects</a>
      </div>
    </TabPanel>
  );
};

export default ProjectsTabPanel;
