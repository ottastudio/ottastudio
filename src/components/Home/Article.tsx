import { style, media } from "typestyle";

const divStyle = style({
  backgroundColor: "inherit",
  color: "inherit",
  position: "relative",
  height: "100vh"
});

const articleStyle = style(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    padding: 20,
    backgroundColor: "inherit",
    color: "inherit"
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
    <div className={divStyle}>
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
          <p>
            You could visit our progress on{" "}
            <a
              href="https://dev.ottastudio.com/"
              target="_blank"
              rel="noopener"
            >
              dev.ottastudio.com
            </a>
          </p>
        </footer>
      </article>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        p {
          font-size: 12px;
        }
        p::before {
          content: "*";
          position: absolute;
          left: -0.7rem;
        }
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
    </div>
  );
};

export default Article;
