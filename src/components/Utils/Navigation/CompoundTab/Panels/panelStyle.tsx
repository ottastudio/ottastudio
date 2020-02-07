import { style } from "typestyle";

export const panelStyle = (debugName: string, backgroundColor: string) =>
  style({
    $debugName: debugName,
    minHeight: 120,
    padding: "10px 10px 40px 10px",
    backgroundColor: backgroundColor,
    color: "currentColor",
    marginTop: -1
  });
