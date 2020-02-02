import { NextPage } from "next";
import Head from "next/head";
import { style } from "typestyle";

const Index: NextPage<{}> = () => {
  const h1Style = style({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  });

  const canonical =
    typeof window !== "undefined" && window && window.location.origin;

  return (
    <div>
      <Head>
        <title>Otta &amp; Studio's</title>
        <link rel="canonical" href={canonical as string} />
        <meta
          name="description"
          content="Eclectic design languages for modern era."
        />

        <meta property="og:title" content="Otta & Studio's" />
        <meta name="og:url" content={canonical as string} />
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
      <h1 className={h1Style}>Work in progress</h1>
    </div>
  );
};

export default Index;
