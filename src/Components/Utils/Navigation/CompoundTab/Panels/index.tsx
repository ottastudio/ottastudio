import { style } from "typestyle";
import IndexTabPanel from "./IndexTabPanel";
import ProjectsTabPanel from "./ProjectsTabPanel";

const Panels: React.FC<{}> = () => {
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
