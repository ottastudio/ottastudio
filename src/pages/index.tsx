import { NextPage, NextPageContext } from "next";
import { Fragment } from "react";
import Axios from "axios";
import Head from "next/head";
import dynamic from "next/dynamic";

import { useUrlOnServer } from "../lib/hooks/useUrlOnServer";
import useRequest from "../lib/hooks/useRequest";

import Article from "../components/Home/Article";

const Cube = dynamic(() => import("../components/Sandbox/Cube"), {
  ssr: false
});

const Index: NextPage<{ initialData: any }> = ({ initialData }) => {
  const {
    data: { sites }
  } = useRequest({ url: "/api/v1/sites/data" }, { initialData: initialData });

  const description = `${sites.info.description[0]}. ${sites.info.description[1]}`;

  const canonical =
    typeof window !== "undefined" && window && window.location.origin;

  return (
    <Fragment>
      <Head>
        <title>{sites.name.full}</title>
        <link rel="canonical" href={`${canonical}`} />
        <meta name="description" content={description} />
        <meta property="og:title" content="Otta & Studio's" />
        <meta name="og:url" content={`${canonical}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:description" content={description} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpfd7jmay/image/upload/v1567080499/samples/board_hrlzgu.jpg"
        />
      </Head>
      <Article sites={sites} />
      <Cube />
    </Fragment>
  );
};

Index.getInitialProps = async (ctx: NextPageContext) => {
  const { BASE_URL } = await useUrlOnServer(ctx);

  const res = await Axios.get(`${BASE_URL}/api/v1/sites/data`);
  const result = await res.data;

  return {
    initialData: result
  };
};

export default Index;
