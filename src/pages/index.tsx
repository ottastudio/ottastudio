import { NextPage, NextPageContext } from "next";
import Axios from "axios";
import Head from "next/head";

import { useUrlOnServer } from "../lib/hooks/useUrlOnServer";
import Article from "../Components/Home/Article";

const Index: NextPage<{ initialData: any }> = ({ initialData }) => {
  const canonical =
    typeof window !== "undefined" && window && window.location.origin;

  return (
    <div>
      <Head>
        <title>Otta &amp; Studio's</title>
        <link rel="canonical" href={`${canonical}`} />
        <meta
          name="description"
          content="Eclectic design languages for modern era."
        />

        <meta property="og:title" content="Otta & Studio's" />
        <meta name="og:url" content={`${canonical}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="og:description"
          content="Eclectic design languages for modern era."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpfd7jmay/image/upload/v1567080499/samples/board_hrlzgu.jpg"
        />
      </Head>
      <Article initialData={initialData} />
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
