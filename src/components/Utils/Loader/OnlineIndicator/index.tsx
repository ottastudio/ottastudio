import Typing from "../Typing";
import { style } from "typestyle";
import { UIContext } from "../../../../lib/store/UIContext";
import { useContext } from "react";

const OnlineIndicator: React.FC<{}> = () => {
  const { loading } = useContext(UIContext);
  const divStyle = style({
    $debugName: "online-indicator",
    position: "fixed",
    right: 20,
    top: 20,
    zIndex: 1000,
    display: loading ? "block" : "none"
  });

  return loading ? (
    <div className={divStyle}>
      <Typing />
    </div>
  ) : null;
};

export default OnlineIndicator;
