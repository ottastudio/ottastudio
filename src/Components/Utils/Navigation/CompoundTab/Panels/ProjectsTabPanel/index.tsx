import TabPanel from "../../../Tab/TabPanel";

export interface ProjectsTabPanelProps {}

const ProjectsTabPanel: React.FC<ProjectsTabPanelProps> = () => {
  return (
    <TabPanel whenActive="projects">
      <div>Projects</div>
    </TabPanel>
  );
};

export default ProjectsTabPanel;
