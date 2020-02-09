import { NextPage, NextPageContext, NextComponentType } from "next";
import { NextRouter } from "next/router";
import { transition } from "../lib/misc";
import { Ottastudio } from "../lib/store";
import dynamic from "next/dynamic";

interface AppProps {
  Component: NextComponentType;
  pageProps: NextPageContext;
  router: NextRouter;
}

const Navigation = dynamic(() => import("../components/Utils/Navigation"));
const Footer = dynamic(() => import("../components/Utils/Footer"), {
  ssr: false
});
const OnlineIndicator = dynamic(
  () => import("../components/Utils/Loader/OnlineIndicator"),
  { ssr: false }
);
const NProgress = dynamic(
  () => import("../components/Utils/Loader/NProgress"),
  { ssr: false }
);
const Notification = dynamic(() => import("../components/Utils/Notification"), {
  ssr: false
});

const MyApp: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Ottastudio>
      <OnlineIndicator />
      <Navigation />
      <Component {...pageProps} key={router.asPath} />
      <NProgress />
      <Notification />
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

          user-select: auto;
          touch-action: auto;

          transition: background-color ${transition.main},
            color ${transition.main};
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        button {
          cursor: pointer;
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

        .theme--light,
        .theme--white {
          background-color: #f5f5f5;
          color: #000000;
        }
        .theme--dark {
          background-color: #808080;
          color: #d4d4d4;
        }
        .theme--black {
          background-color: #151515;
          color: #d4d4d4;
        }
        .theme--red {
          background-color: #ff0000;
          color: #000000;
        }
        .theme--blue {
          background-color: #0000ff;
          color: #f5f5f5;
        }

        @media screen and (max-width: 767px) {
          .link {
            font-size: 2rem;
          }
        }

        @media (prefers-color-scheme: light) {
          body,
          .theme--light {
            background-color: #f5f5f5;
            color: #000000;
          }
          .theme--dark {
            background-color: #808080;
            color: #d4d4d4;
          }
        }
        @media (prefers-color-scheme: dark) {
          body,
          .theme--light {
            background-color: #d4d4d4;
            color: #000000;
          }
          .theme--dark {
            background-color: #151515;
            color: #d4d4d4;
          }
        }
      `}</style>
    </Ottastudio>
  );
};

export default MyApp;
