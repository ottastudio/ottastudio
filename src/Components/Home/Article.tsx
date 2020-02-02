import { style, media } from "typestyle";
import Typing from "../Utils/Loader/Typing";

const articleStyle = style(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    padding: 20
  },
  media({ maxWidth: 1366, minWidth: 768 }, { width: "66.66%" }),
  media(
    { maxWidth: 767 },
    { width: "100%", top: 0, transform: "translate(-50%, 0%)" }
  )
);

const quoteStyle = style({
  fontSize: "3rem",
  lineHeight: 0.96,
  margin: "0rem 0rem 2rem 0rem",
  $nest: {
    "&::before": {
      content: `"“"`,
      position: "absolute",
      left: 0,
      fontSize: "2.2rem"
    },
    "&::after": {
      content: `"”"`,
      fontSize: "2.2rem"
    }
  }
});

const footerStyle = style({
  position: "relative",
  fontSize: "1rem",
  $nest: {
    "&::before": {
      content: `"©"`,
      position: "absolute",
      left: "-0.8rem"
    }
  }
});

const Article: React.FC<{ sites: any }> = ({ sites }) => {
  return (
    <article className={articleStyle}>
      <h1 className={quoteStyle}>{sites.info.description[0]}</h1>
      <footer className={footerStyle}>
        {new Date().getFullYear()} {sites.name.full}. Work in progress
        <Typing />
      </footer>
    </article>
  );
};

export default Article;
