import { style } from "typestyle";
import TabPanel from "../../../Tab/TabPanel";

const ProjectsTabPanel: React.FC<{}> = () => {
  const divStyle = style({
    $debugName: "projects-panel",
    minHeight: 120,
    padding: "10px 10px 40px 10px",
    backgroundColor: "lightsalmon",
    borderTop: "1px solid",
    marginTop: -1
  });
  return (
    <TabPanel whenActive="projects">
      <div className={divStyle}>
        <a className="link">Projects</a>
      </div>
    </TabPanel>
  );
};

export default ProjectsTabPanel;
