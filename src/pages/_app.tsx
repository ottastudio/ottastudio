import { NextPage, NextPageContext, NextComponentType } from "next";
import { Fragment } from "react";
import { NextRouter } from "next/router";
import { transition } from "../lib/misc";

import Navigation from "../Components/Utils/Navigation";
import NProgress from "../Components/Utils/Loader/NProgress";
import Footer from "../Components/Utils/Footer";

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
      <Footer />

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
          position: relative;

          font-family: "Regio Mono", monospace;
          font-feature-settings: "ss04";
          font-size: 1.5rem;

          /*overscroll-behavior: auto none;*/
          scroll-behavior: smooth;

          background-color: #f5f5f5;
          color: #000000;

          transition: background-color ${transition.main},
            color ${transition.main};
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

        .theme-light {
          background-color: #f5f5f5;
          color: #000000;
        }
        .theme-dark {
          background-color: #808080;
          color: #d4d4d4;
        }

        @media (prefers-color-scheme: light) {
          body,
          .theme-light {
            background-color: #f5f5f5;
            color: #000000;
          }
          .theme-dark {
            background-color: #808080;
            color: #d4d4d4;
          }
        }
        @media (prefers-color-scheme: dark) {
          body,
          .theme-light {
            background-color: #d4d4d4;
            color: #000000;
          }
          .theme-dark {
            background-color: #151515;
            color: #d4d4d4;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default MyApp;
