import Router from "next/router";
import cookie from "js-cookie";
import nextCookie from "next-cookies";
import Axios from "axios";

import { useEffect } from "react";
import { useUrlOnServer } from "../../lib/hooks/useUrlOnServer";

export const login = ({ token }: any) => {
  cookie.set("token", token, { expires: 1 });
  setTimeout(() => {
    Router.push("/user/dashboard");
  }, 1000);
};

export const auth = (ctx: any) => {
  const { token } = nextCookie(ctx);
  if (!token) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/user/login" });
      ctx.res.end();
    } else {
      Router.push("/user/login");
    }
  }
  return token;
};

export const logout = () => {
  cookie.remove("token");
  window.localStorage.setItem("logout", Date.now().toString());
  setTimeout(() => {
    Router.push("/");
  }, 1000);
};

export const withAuthSync = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const syncLogout = (event: any) => {
      if (event.key === "logout") {
        console.log("Logged out from storage!");
        Router.push("/user/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);
      return () => {
        window.removeEventListener("storage", syncLogout);
        window.localStorage.removeItem("logout");
      };
    }, []);

    return <WrappedComponent {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: any) => {
    const { BASE_URL } = await useUrlOnServer(ctx);
    const token = auth(ctx);

    const resUser = await Axios.get(`${BASE_URL}/api/v1/users?token=${token}`);
    const resUsers = await Axios.get(`${BASE_URL}/api/v1/users`);
    const user = await resUser.data.users[0];
    const users = await resUsers.data;

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps, token, user, users };
  };

  return Wrapper;
};
