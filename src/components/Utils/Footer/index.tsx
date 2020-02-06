import { style } from "typestyle";
import { useContext } from "react";
import { UIContext } from "../../../lib/store/UIContext";
import Subscribe from "./Subscribe";

const Footer: React.FC<{}> = () => {
  const {
    ui: { footer }
  } = useContext(UIContext);

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
