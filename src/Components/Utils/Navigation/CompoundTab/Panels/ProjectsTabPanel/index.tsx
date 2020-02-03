import TabPanel from "../../../Tab/TabPanel";

const ProjectsTabPanel: React.FC<{}> = () => {
  return (
    <TabPanel whenActive="projects">
      <div style={{ minHeight: 200 }}>Projects</div>
    </TabPanel>
  );
};

export default ProjectsTabPanel;
