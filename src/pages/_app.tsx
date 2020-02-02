import { NextPage, NextPageContext, NextComponentType } from "next";
import { Fragment } from "react";
import { NextRouter } from "next/router";

interface AppProps {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Fragment>
      <Component {...pageProps} key={router.asPath} />

      <style jsx global>{`
        * {
          outline: none;
          box-sizing: border-box;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          padding: 0;
          margin: 0;

          background-color: #f5f5f5;
          color: #000000;

          font-family: "Regio Mono" !important;
          font-feature-settings: "ss03";
        }
      `}</style>
    </Fragment>
  );
};

export default MyApp;
