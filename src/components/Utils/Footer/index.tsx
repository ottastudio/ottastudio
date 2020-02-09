import { style } from "typestyle";
import { useUIContext } from "../../../lib/store/UIContext";
import Subscribe from "./Subscribe";

const Footer: React.FC<{}> = () => {
  const {
    ui: { footer }
  } = useUIContext();

  const footerStyle = style({
    $debugName: "footer",
    position: "relative",
    height: "50vh",
    overflow: "hidden",
    backgroundColor: "transparent",
    color: "inherit",
    display: footer ? "block" : "none"
  });
  return (
    <footer id="app-footer" className={footerStyle}>
      <Subscribe />
    </footer>
  );
};

export default Footer;
