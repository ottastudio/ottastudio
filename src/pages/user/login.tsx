import { NextPage } from "next";
import { useEffect, useContext } from "react";
import { style } from "typestyle";
import Head from "next/head";
import cookie from "js-cookie";
import Router from "next/router";
import dynamic from "next/dynamic";

import Typing from "../../components/Utils/Loader/Typing";
import LoginForm from "../../components/Users/Administration/Login";
import { UIContext } from "../../lib/store/UIContext";

const Loader = () => <Typing />;

const Cube = dynamic(() => import("../../components/Sandbox/Cube"), {
  ssr: false,
  loading: Loader
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
