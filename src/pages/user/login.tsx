import { NextPage } from "next";
import { useEffect, useContext } from "react";
import { style } from "typestyle";
import Head from "next/head";
import cookie from "js-cookie";
import Router from "next/router";
import dynamic from "next/dynamic";

import { UIContext } from "../../lib/store/UIContext";

const LoginForm = dynamic(() =>
  import("../../components/Users/Administration/Login")
);
const Cube = dynamic(() => import("../../components/Sandbox/Cube"), {
  ssr: false
});

const Login: NextPage<{}> = () => {
  const { setUI } = useContext(UIContext);
  const divStyle = style({
    $debugName: "container-login",
    height: "100vh",
    position: "relative",
    zIndex: 10
  });
  useEffect(() => {
    const getCookie = cookie.get("token");
    typeof getCookie !== undefined && Router.push("/user/dashboard");
  }, []);

  useEffect(() => {
    setUI({ footer: false });
    return () => setUI({ footer: true });
  }, []);

  return (
    <div className={divStyle}>
      <Head>
        <title>Login</title>
      </Head>
      <Cube color="deeppink" ambient={0.5} scale={2} />
      <LoginForm />
    </div>
  );
};

export default Login;
