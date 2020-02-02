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
  return (
    <div>
      <Head>
        <title>Otta &amp; Studio's</title>
        <meta
          name="description"
          content="Eclectic design languages for modern era."
        />
      </Head>
      <h1 className={h1Style}>Work in progress</h1>
    </div>
  );
};

export default Index;
