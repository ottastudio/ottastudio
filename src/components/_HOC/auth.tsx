import { useEffect } from "react";
import Router from "next/router";
import cookie from "js-cookie";
import nextCookie from "next-cookies";

export const login = ({ token }: any) => {
  cookie.set("token", token, { expires: 1 });
  Router.push("/user/dashboard");
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
  Router.push("/");
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
    const token = auth(ctx);
    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    return { ...componentProps, token };
  };

  return Wrapper;
};
