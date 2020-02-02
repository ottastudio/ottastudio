import IndexTabPanel from "./IndexTabPanel";
import ProjectsTabPanel from "./ProjectsTabPanel";
import { style } from "typestyle";

export interface PanelsProps {}

const Panels: React.FC<PanelsProps> = () => {
  const divStyle = style({
    padding: "0px 10px",
    minHeight: 80
  });
  return (
    <div className={divStyle}>
      <IndexTabPanel />
      <ProjectsTabPanel />
    </div>
  );
};

export default Panels;
