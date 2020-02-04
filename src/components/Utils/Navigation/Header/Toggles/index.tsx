import { style } from "typestyle";
import ToggleContent from "./ToggleContent";
import ToggleTheme from "./ToggleTheme";

export interface TogglesProps {}

export const toggleContent = style({
  $debugName: "toggle",
  cursor: "pointer",
  minWidth: 40,
  height: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderLeft: "1px solid",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "inherit",
  color: "inherit"
});

const Toggles: React.FC<TogglesProps> = () => {
  const togglesStyle = style({
    $debugName: "toggles",
    width: "33.33%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "inherit",
    color: "inherit"
  });
  return (
    <span className={togglesStyle}>
      <ToggleTheme />
      <ToggleContent />
    </span>
  );
};

export default Toggles;
