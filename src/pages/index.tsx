import { NextPage, NextPageContext } from "next";
import Axios from "axios";
import Head from "next/head";

import { useUrlOnServer } from "../lib/hooks/useUrlOnServer";
import useRequest from "../lib/hooks/useRequest";

import Article from "../Components/Home/Article";

const Index: NextPage<{ initialData: any }> = ({ initialData }) => {
  const {
    data: { sites }
  } = useRequest({ url: "/api/v1/sites/data" }, { initialData: initialData });

  const canonical =
    typeof window !== "undefined" && window && window.location.origin;

  return (
    <div>
      <Head>
        <title>{sites.info.description[0]}</title>
        <link rel="canonical" href={`${canonical}`} />
        <meta name="description" content={sites.info.description[1]} />
        <meta property="og:title" content={sites.info.description[0]} />
        <meta name="og:url" content={`${canonical}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:description" content={sites.info.description[1]} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpfd7jmay/image/upload/v1567080499/samples/board_hrlzgu.jpg"
        />
      </Head>
      <Article sites={sites} />
    </div>
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
