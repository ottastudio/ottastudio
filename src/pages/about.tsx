import { NextPage } from "next";
import Head from "next/head";

const Index: NextPage<{}> = () => {
  const canonical =
    typeof window !== "undefined" && window && window.location.origin;

  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="canonical" href={`${canonical}/about`} />
        <meta name="description" content="Mantap about" />
        <meta property="og:title" content="About" />
        <meta name="og:url" content={`${canonical}/about`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="og:description" content="Mantap about" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dpfd7jmay/image/upload/v1567080499/samples/board_hrlzgu.jpg"
        />
      </Head>
      <h1>About</h1>
    </div>
  );
};

export default Index;
