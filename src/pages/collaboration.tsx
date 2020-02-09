import { style } from "typestyle";
import Head from "next/head";

const Collaboration: React.FC<{}> = () => {
  const mainStyle = style({
    $debugName: "collaboration-container",
    minHeight: "100vh",
    position: "relative"
  });
  return (
    <main className={mainStyle}>
      <Head>
        <title>Collaboration?</title>
      </Head>
      Collaboration
    </main>
  );
};

export default Collaboration;
