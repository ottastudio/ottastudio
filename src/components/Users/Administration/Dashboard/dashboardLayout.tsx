import { Fragment } from "react";
import Axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";

import Typing from "../../../Utils/Loader/Typing";
import { headerStyle, buttonStyle } from "./dashboardLayoutStyle";

export interface DashboardLayoutProps {
  globalData?: any;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  globalData
}) => {
  const {
    user: { name, _id }
  } = globalData;

  const logout = (_id: string) => {
    Axios.post(`/api/v1/users/logout`, { _id })
      .then((res: any) => {
        if (res.data.success) {
          cookie.remove("token");
          window.localStorage.setItem("logout", Date.now().toString());
          setTimeout(() => {
            Router.push("/");
          }, 1000);
        }
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Fragment>
      <div className={headerStyle}>
        <span>
          Hello, {name}
          <Typing />
        </span>
        <button className={buttonStyle} onClick={() => logout(_id)}>
          Logout
        </button>
      </div>
      {children}
    </Fragment>
  );
};

export default DashboardLayout;
