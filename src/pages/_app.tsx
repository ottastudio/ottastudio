import { NextPage, NextPageContext, NextComponentType } from "next";
import { Fragment } from "react";
import { NextRouter } from "next/router";
import { transition } from "../lib/misc";

import Navigation from "../components/Utils/Navigation";
import NProgress from "../components/Utils/Loader/NProgress";
import Footer from "../components/Utils/Footer";
import OnlineIndicator from "../components/Utils/Loader/OnlineIndicator";

interface AppProps {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
}

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Fragment>
      <OnlineIndicator />
      <Navigation />
      <Component {...pageProps} key={router.asPath} />
      <NProgress />
      <Footer />

      <style jsx global>{`
        @font-face {
          font-family: "Regio Mono";
          src: url("/static/fonts/RegioMono-SemiBold.woff2") format("woff2"),
            url("/static/fonts/RegioMono-SemiBold.woff") format("woff");
          font-weight: 600;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Regio Mono";
          src: url("/static/fonts/RegioMono-ExtraBold.woff2") format("woff2"),
            url("/static/fonts/RegioMono-ExtraBold.woff") format("woff");
          font-weight: 800;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Regio Mono";
          src: url("/static/fonts/MonoHertz-Medium.woff2") format("woff2"),
            url("/static/fonts/MonoHertz-Medium.woff") format("woff");
          font-weight: 500;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Regio Mono";
          src: url("/static/fonts/RegioMono-Regular.woff2") format("woff2"),
            url("/static/fonts/RegioMono-Regular.woff") format("woff");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Regio Mono";
          src: url("/static/fonts/RegioMono-Light.woff2") format("woff2"),
            url("/static/fonts/RegioMono-Light.woff") format("woff");
          font-weight: 300;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Regio Mono";
          src: url("/static/fonts/RegioMono-Bold.woff2") format("woff2"),
            url("/static/fonts/RegioMono-Bold.woff") format("woff");
          font-weight: bold;
          font-style: normal;
          font-display: swap;
        }

        @font-face {
          font-family: "Regio Mono";
          src: url("/static/fonts/RegioMono-UltraLight.woff2") format("woff2"),
            url("/static/fonts/RegioMono-UltraLight.woff") format("woff");
          font-weight: 200;
          font-style: normal;
          font-display: swap;
        }
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
        table {
          border-collapse: collapse;
          width: 100%;
        }
        td,
        th {
          border: 1px solid currentColor;
          text-align: left;
          padding: 10px;
          font-size: 1rem;
          vertical-align: top;
          cursor: pointer;
        }
        th,
        tr:nth-child(even) {
          background-color: coral;
          font-weight: normal;
        }
        tr:hover {
          background-color: rgba(0, 0, 0, 0.3);
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

        @media screen and (max-width: 767px) {
          .link {
            font-size: 2rem;
          }
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
