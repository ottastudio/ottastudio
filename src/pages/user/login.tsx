import { NextPage } from "next";
import { useEffect, Fragment } from "react";
import { style } from "typestyle";
import Head from "next/head";
import dynamic from "next/dynamic";
import Router from "next/router";

import { useUIContext } from "../../lib/store/UIContext";
import { useAuthContext } from "../../lib/store/AuthContext";

const LoginForm = dynamic(() =>
  import("../../components/Users/Administration/Login")
);
const Cube = dynamic(() => import("../../components/Sandbox/Cube"), {
  ssr: false
});

const Login: NextPage<{}> = () => {
  const { token } = useAuthContext();
  const { setUI } = useUIContext();

  const divStyle = style({
    $debugName: "container-login",
    height: "100vh",
    position: "relative",
    zIndex: 10
  });

  useEffect(() => {
    if (token !== undefined) {
      Router.push("/user/dashboard");
    }
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
      {token !== undefined ? null : (
        <Fragment>
          <Cube color="deeppink" ambient={0.5} scale={2} />
          <LoginForm />
        </Fragment>
      )}
    </div>
  );
};

export default Login;
