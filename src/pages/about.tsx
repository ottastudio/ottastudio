import { NextPage } from "next";
import Head from "next/head";
import { style } from "typestyle";

const Index: NextPage<{}> = () => {
  const canonical =
    typeof window !== "undefined" && window && window.location.origin;

  const divStyle = style({
    $debugName: "container",
    minHeight: "100vh",
    position: "relative"
  });
  const h1Style = style({
    margin: 0,
    padding: 20
  });

  return (
    <div className={divStyle}>
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
      <h1 className={h1Style}>About</h1>
    </div>
  );
};

export default Index;
