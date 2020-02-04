import { style, media } from "typestyle";
import Typing from "../Loader/Typing";

const articleStyle = (paragraph: boolean) =>
  style(
    {
      position: "absolute",
      top: "calc(50% + 1.7rem)",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: paragraph ? "33.33%" : "25%",
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
  margin: "0rem 0rem 1rem 0rem",
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

const pStyle = style({
  fontSize: "1.35rem",
  fontFamily: `"Helvetica Neue", sans-serif`
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

const Article: React.FC<{
  sites: any;
  header?: string;
  paragraph?: string;
  footer?: boolean;
}> = ({ sites, header, paragraph, footer }) => {
  return (
    <article className={articleStyle(paragraph ? true : false)}>
      <h1 className={quoteStyle}>{header}</h1>
      {paragraph ? (
        <p className={pStyle}>
          {paragraph}
          <Typing />
        </p>
      ) : null}
      {footer ? (
        <footer className={footerStyle}>
          {new Date().getFullYear()} {sites.name.full}. Work in progress
          <Typing />
        </footer>
      ) : null}
    </article>
  );
};

export default Article;
