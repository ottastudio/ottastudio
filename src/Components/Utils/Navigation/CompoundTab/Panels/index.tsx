import IndexTabPanel from "./IndexTabPanel";
import ProjectsTabPanel from "./ProjectsTabPanel";
import { Fragment } from "react";

const Panels: React.FC<{}> = () => {
  return (
    <Fragment>
      <IndexTabPanel />
      <ProjectsTabPanel />
    </Fragment>
  );
};

export default Panels;
