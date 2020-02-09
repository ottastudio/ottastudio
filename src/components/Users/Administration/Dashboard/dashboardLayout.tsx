import { Fragment, useEffect } from "react";
import Axios from "axios";
import Router from "next/router";
import cookie from "js-cookie";

import {
  SetTokenType,
  useAuthContext
} from "../../../../lib/store/AuthContext";
import { useUIContext } from "../../../../lib/store/UIContext";
import { headerStyle, buttonStyle } from "./dashboardLayoutStyle";

import Typing from "../../../Utils/Loader/Typing";
import {
  useNotificaionContext,
  AddNotificationType,
  NotificationType
} from "../../../../lib/store/NotificationContext";

export const logout = async (
  _id: string,
  name: string,
  setToken: SetTokenType,
  addNotification: AddNotificationType
) => {
  addNotification({
    status: "response",
    message: `Logging out from ${name}`,
    type: "waiting"
  });

  const logoutAction = ({ status, message, type }: NotificationType) => {
    addNotification({ status, message, type });
    setTimeout(() => {
      Router.push("/");
    }, 1000);
  };

  try {
    const response = await Axios.post(`/api/v1/users/logout`, { _id });
    const result = await response.data;

    if (result.success) {
      cookie.remove("token");
      window.localStorage.setItem("logout", Date.now().toString());
      setToken(undefined);
      logoutAction({
        status: "dismissable",
        message: result.message,
        type: "great"
      });
    } else {
      logoutAction({
        status: "important",
        message: result.message,
        type: "error"
      });
    }
  } catch (error) {
    addNotification({
      status: "important",
      message: error.message,
      type: "error"
    });
  }
};

export const DashboardLayout: React.FC<{ globalData?: any }> = ({
  children,
  globalData
}) => {
  const {
    user: { name, _id }
  } = globalData;
  const { setToken } = useAuthContext();
  const { addNotification } = useNotificaionContext();
  const {
    setUI,
    darkModeScheme: { accent }
  } = useUIContext();

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
          onClick={() => logout(_id, name, setToken, addNotification)}
        >
          Logout
        </button>
      </div>
      {children}
    </Fragment>
  );
};
