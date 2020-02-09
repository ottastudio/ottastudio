import { NavProvider } from "./NavContext";
import Draggable from "./Draggable";

const Navigation: React.FC<{}> = () => (
  <NavProvider>
    <Draggable />
  </NavProvider>
);

export default Navigation;
