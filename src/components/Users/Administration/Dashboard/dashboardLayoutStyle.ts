import { style } from "typestyle";

export const headerStyle = (backgrounColor: string) =>
  style({
    $debugName: "header-dashboard",
    position: "sticky",
    top: 0,
    marginTop: -1,
    fontSize: "1rem",
    padding: "0px 20px",
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 999,
    backgroundColor: backgrounColor,
    borderBottom: "1px solid",
    borderTop: "1px solid"
  });
export const buttonStyle = style({
  $debugName: "logout-button",
  height: 40,
  background: "none",
  color: "currentColor",
  fontFamily: "inherit",
  fontSize: "inherit",
  cursor: "pointer",
  border: "none",
  padding: 0,
  $nest: {
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
