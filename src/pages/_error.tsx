import { NextPage } from "next";
import { useEffect, useContext } from "react";
import { style } from "typestyle";
import Head from "next/head";
import Router from "next/router";

import { useCountDown } from "../lib/hooks/useCountDown";
import Typing from "../components/Utils/Loader/Typing";
import { UIContext } from "../lib/store/UIContext";
import Cube from "../components/Sandbox/Cube";

const Error: NextPage<{ statusCode: number | undefined }> = ({
  statusCode
}) => {
  const { setNotification, setUI } = useContext(UIContext);
  const mainStyle = style({
    $debugName: "error-page",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  });
  const divStyle = style({
    $debugName: "error-message",
    margin: "50vh auto 0px auto",
    width: "100%",
    maxWidth: 360,
    transform: "translateY(-50%)"
  });

  const messages = statusCode
    ? statusCode === 404
      ? `${statusCode} → Page not found.`
      : `${statusCode} → Server error.`
    : "Client error.";

  const { counter } = useCountDown(10);
  counter < 1 ? Router.push("/") : null;
  useEffect(() => {
    setUI({ footer: false });
    setNotification({ message: messages, status: true, type: "error" });

    return () => {
      setNotification({ status: false });
      setUI({ footer: true });
    };
  }, []);

  return (
    <main className={mainStyle}>
      <Head>
        <title>{messages}</title>
      </Head>
      <Cube scale={2.5} color="#f5f5f5" ambient={0.3} />
      <p className={divStyle}>
        <b>{messages}</b>
        <br />
        <small>Will be redirect to Index page in {counter} second(s)</small>
        <Typing />
      </p>
    </main>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
