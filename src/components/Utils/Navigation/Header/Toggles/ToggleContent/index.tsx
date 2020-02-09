import { useUIContext } from "../../../../../../lib/store/UIContext";
import { useNavContext } from "../../../NavContext";
import { toggleContent } from "..";
import { style, media } from "typestyle";
import { transition } from "../../../../../../lib/misc";

const ToggleContent: React.FC<{}> = () => {
  const {
    darkModeScheme: { accent }
  } = useUIContext();
  const { showContent, setShowContent, setDisable } = useNavContext();
  const parrentStyle = style(
    {
      $debugName: "toggle-content",
      padding: 1,
      backgroundColor: "inherit"
    },
    media({ maxWidth: 767 }, { display: "none" })
  );
  const toggleActive = (active: boolean) =>
    style({
      $debugName: "toggle-label",
      fontSize: "2rem",
      fontWeight: 200,
      paddingBottom: active ? 5 : 3,
      cursor: "inherit",
      border: "1px solid",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: accent,
      borderRadius: active ? "100%" : "0%",
      transform: active
        ? "rotate(180deg) scale(0.85)"
        : "rotate(0deg) scale(1)",
      transition: `transform ${transition.main}, border-radius ${transition.main}, background-color ${transition.main}, padding-bottom ${transition.main}`,
      $nest: {
        "&:hover": {
          backgroundColor: accent
        }
      }
    });
  return (
    <span
      className={`${toggleContent} ${parrentStyle}`}
      onClick={() => setShowContent(!showContent)}
      onMouseOver={() => setDisable(true)}
      onMouseLeave={() => setDisable(false)}
    >
      <label className={`${toggleActive(showContent)}`}>&darr;</label>
    </span>
  );
};

export default ToggleContent;
