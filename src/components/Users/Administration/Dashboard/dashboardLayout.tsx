import { Fragment, useContext, useEffect } from "react";
import Axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";

import { UIContext } from "../../../../lib/store/UIContext";
import { SetNotificationType } from "../../../../lib/store/UIContext/interfaces";
import { headerStyle, buttonStyle } from "./dashboardLayoutStyle";

import Typing from "../../../Utils/Loader/Typing";

export const logout = async (
  _id: string,
  name: string,
  setNotification: SetNotificationType
) => {
  setNotification({
    status: true,
    type: "good",
    message: `Logging out ${name}`
  });

  const logoutAction = () => {
    setTimeout(() => {
      setNotification({ status: false });
      Router.push("/");
    }, 1000);
  };

  try {
    const response = await Axios.post(`/api/v1/users/logout`, { _id });
    const result = await response.data;

    if (result.success) {
      cookie.remove("token");
      window.localStorage.setItem("logout", Date.now().toString());
      setNotification({ status: true, type: "cool", message: result.message });
      logoutAction();
    } else {
      setNotification({ status: true, type: "error", message: result.message });
      logoutAction();
    }
  } catch (error) {
    setNotification({ status: true, type: "error", message: error.message });
  }
};

export const DashboardLayout: React.FC<{ globalData?: any }> = ({
  children,
  globalData
}) => {
  const {
    user: { name, _id }
  } = globalData;

  const {
    setNotification,
    setUI,
    darkModeScheme: { accent }
  } = useContext(UIContext);

  useEffect(() => {
    setUI({ footer: false });
    return () => setUI({ footer: true });
  }, []);

  return (
    <Fragment>
      <div className={headerStyle(accent as string)}>
        <span>
          Hello, {name}
          <Typing />
        </span>
        <button
          className={buttonStyle}
          onClick={() => logout(_id, name, setNotification)}
        >
          Logout
        </button>
      </div>
      {children}
    </Fragment>
  );
};
