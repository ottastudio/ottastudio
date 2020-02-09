import { NextPage } from "next";
import { useEffect } from "react";
import { style } from "typestyle";
import Head from "next/head";
import Router from "next/router";
import dynamic from "next/dynamic";

import { useCountDown } from "../lib/hooks/useCountDown";
import { useUIContext } from "../lib/store/UIContext";
import { useNotificaionContext } from "../lib/store/NotificationContext";

const Typing = dynamic(() => import("../components/Utils/Loader/Typing"));
const Cube = dynamic(() => import("../components/Sandbox/Cube"), {
  ssr: false,
  loading: () => <Typing />
});

const Error: NextPage<{ statusCode: number | undefined }> = ({
  statusCode
}) => {
  const { addNotification } = useNotificaionContext();
  const { setUI } = useUIContext();
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
    addNotification({ message: messages, status: "important", type: "error" });
    return () => {
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
