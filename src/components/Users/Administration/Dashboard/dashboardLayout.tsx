import { Fragment } from "react";
import { style } from "typestyle";
import { logout } from "../../../_HOC/auth";
import { transition } from "../../../../lib/misc";
import Typing from "../../../Utils/Loader/Typing";

export interface DashboardLayoutProps {
  globalData?: any;
}
const headerStyle = style({
  $debugName: "header-dashboard",
  position: "sticky",
  top: 0,
  padding: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  zIndex: 999
});
const buttonStyle = style({
  $debugName: "logout-button",
  height: 40,
  background: "none",
  color: "currentColor",
  fontFamily: "inherit",
  fontSize: "inherit",
  cursor: "pointer",
  border: "none",
  padding: "0px 15px",
  transition: `background-color ${transition.main}`,
  $nest: {
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  globalData
}) => {
  const {
    user: { name }
  } = globalData;
  return (
    <Fragment>
      <div className={headerStyle}>
        <span>
          Hello, {name}
          <Typing />
        </span>
        <button className={buttonStyle} onClick={logout}>
          Logout
        </button>
      </div>
      {children}
    </Fragment>
  );
};

export default DashboardLayout;
