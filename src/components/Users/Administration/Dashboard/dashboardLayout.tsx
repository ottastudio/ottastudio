import { style } from "typestyle";
import { logout } from "../../../_HOC/auth";
import { transition } from "../../../../lib/misc";

export interface DashboardLayoutProps {}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const divStyle = style({
    minHeight: "100vh"
  });
  const headerStyle = style({
    position: "sticky",
    top: 0,
    padding: 20
  });
  const buttonStyle = style({
    $debugName: "logout-button",
    height: 40,
    background: "none",
    color: "currentColor",
    fontFamily: "inherit",
    fontSize: "inherit",
    cursor: "pointer",
    borderRadius: 50,
    padding: "0px 15px",
    transition: `background-color ${transition.main}`,
    $nest: {
      "&:hover": {
        backgroundColor: "coral"
      }
    }
  });
  return (
    <div className={divStyle}>
      <header className={headerStyle}>
        <button className={buttonStyle} onClick={logout}>
          Logout
        </button>
      </header>
      {children}
    </div>
  );
};

export default DashboardLayout;
