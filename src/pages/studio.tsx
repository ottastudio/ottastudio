import { NextPage, NextPageContext } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Axios from "axios";
import useRequest from "../lib/hooks/useRequest";
import { style } from "typestyle";
import { useUrlOnServer } from "../lib/hooks/useUrlOnServer";

const Article = dynamic(() => import("../components/Utils/Article"));

const Studio: NextPage<{ initialData: any; BASE_URL: string }> = ({
  initialData,
  BASE_URL
}) => {
  const {
    data: { sites }
  } = useRequest({ url: "/api/v1/sites/data" }, { initialData: initialData });

  const divStyle = style({
    $debugName: "container",
    minHeight: "100vh",
    position: "relative"
  });

  const title = sites.name.full;
  const description = sites.info.description[2];

  return (
    <div className={divStyle}>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={`${BASE_URL}/studio`} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta name="og:url" content={`${BASE_URL}/studio`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:description" content={description} />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpfd7jmay/image/upload/v1567080499/samples/board_hrlzgu.jpg"
        />
      </Head>
      <Article
        sites={sites}
        header="Prologue"
        paragraph={`"${title}", ${description}`}
        footer
      />
    </div>
  );
};

Studio.getInitialProps = async (ctx: NextPageContext) => {
  const { BASE_URL } = await useUrlOnServer(ctx);

  const res = await Axios.get(`${BASE_URL}/api/v1/sites/data`);
  const result = await res.data;

  return {
    initialData: result,
    BASE_URL
  };
};

export default Studio;
