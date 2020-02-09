import Typing from "../Typing";
import { style } from "typestyle";
import { useUIContext } from "../../../../lib/store/UIContext";

const OnlineIndicator: React.FC<{}> = () => {
  const { loading } = useUIContext();
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
