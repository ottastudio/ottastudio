import { NextPage, NextPageContext, NextComponentType } from "next";
import { Fragment } from "react";
import { NextRouter } from "next/router";

import Navigation from "../Components/Utils/Navigation";
import NProgress from "../Components/Utils/Loader/NProgress";

interface AppProps {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Fragment>
      <Navigation />
      <Component {...pageProps} key={router.asPath} />
      <NProgress />

      <style jsx global>{`
        * {
          outline: none;
          box-sizing: border-box;
          user-select: none;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        body {
          padding: 0;
          margin: 0;
          min-height: 100vh;

          background-color: #f5f5f5;
          color: #000000;
          /*background-color: #151515;
          color: lime;*/
          background-color: #808080;
          color: #d4d4d4;

          font-family: "Regio Mono", monospace;
          font-feature-settings: "ss04";
          font-size: 1.5rem;
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        #__next {
          background-color: inherit;
          color: inherit;
        }
        .link {
          touch-action: none;
        }
        .link:hover,
        .link-active {
          text-decoration: underline;
        }
      `}</style>
    </Fragment>
  );
};

export default MyApp;
