import NavigationContext from "../../../NavigationContext";
import { toggleContent } from "./..";
import { style, media } from "typestyle";
import { transition } from "../../../../../../lib/misc";

const ToggleContent: React.FC<{}> = () => {
  const parrentStyle = style(
    {
      backgroundColor: "inherit"
    },
    media({ maxWidth: 767 }, { display: "none" })
  );
  const toggleActive = (active: boolean) =>
    style({
      fontSize: "2rem",
      fontWeight: 200,
      paddingBottom: 3,
      cursor: "inherit",
      border: "1px solid",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: active ? "0%" : "100%",
      transform: active ? "rotate(-180deg)" : "rotate(0deg)",
      transition: `transform ${transition.main}, border-radius ${transition.main}`
    });
  return (
    <NavigationContext.Consumer>
      {({ showContent, setShowContent }) => (
        <span
          className={`${toggleContent} ${parrentStyle}`}
          style={{ padding: 1 }}
          onClick={() => setShowContent(!showContent)}
        >
          <label className={`${toggleActive(showContent)}`}>&darr;</label>
        </span>
      )}
    </NavigationContext.Consumer>
  );
};

export default ToggleContent;
