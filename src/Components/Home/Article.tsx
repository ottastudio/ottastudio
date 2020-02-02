import { style, media } from "typestyle";
import useRequest from "../../lib/hooks/useRequest";

const articleStyle = style(
  {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "33.33%"
  },
  media(
    { maxWidth: 1366, minWidth: 768 },
    {
      width: "66.66%"
    }
  ),
  media(
    { maxWidth: 767 },
    { width: "100%", padding: 10, top: 0, transform: "translate(-50%, 0%)" }
  )
);

const h1Style = style({
  margin: 0
});

export interface ArticleProps {
  initialData: any;
}

const Article: React.FC<ArticleProps> = ({ initialData }) => {
  const { data: siteData } = useRequest(
    { url: "/api/v1/sites/data" },
    { initialData: initialData }
  );
  return (
    <article className={articleStyle}>
      <h1 className={h1Style}>{siteData.sites.name.full}</h1>
      <p>
        <q>
          <b>{siteData.sites.info.description[0]}</b>.{" "}
          {siteData.sites.info.description[1]}.
        </q>
      </p>
    </article>
  );
};

export default Article;
