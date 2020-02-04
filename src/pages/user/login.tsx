import { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import cookie from "js-cookie";
import Router from "next/router";

import LoginForm from "../../components/Users/Administration/Login";
import { style } from "typestyle";

const Login: NextPage<{}> = () => {
  const divStyle = style({
    $debugName: "container-login",
    height: "100vh",
    position: "relative"
  });
  useEffect(() => {
    const getCookie = cookie.get("token");
    typeof getCookie !== undefined && Router.push("/user/dashboard");
  }, []);
  return (
    <div className={divStyle}>
      <Head>
        <title>Login</title>
      </Head>
      <LoginForm />
    </div>
  );
};

export default Login;
