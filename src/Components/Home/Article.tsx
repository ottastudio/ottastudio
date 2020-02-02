import { style, media } from "typestyle";

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
        {Array(3)
          .fill(1)
          .map((_item: any, i: number) => (
            <span key={i} className={`dot dot-${i}`}>
              .
            </span>
          ))}
      </footer>

      <style jsx global>{`
        .dot {
          display: inline-block;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .dot-0 {
          animation: dot-0 1000ms infinite;
        }
        .dot-1 {
          animation: dot-1 1000ms infinite 200ms;
        }
        .dot-2 {
          animation: dot-2 1000ms infinite 400ms;
        }

        @keyframes dot-0 {
          0% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes dot-1 {
          0% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(0%);
          }
        }
        @keyframes dot-2 {
          0% {
            transform: translateY(0%);
          }
          50% {
            transform: translateY(-25%);
          }
          100% {
            transform: translateY(0%);
          }
        }
      `}</style>
    </article>
  );
};

export default Article;