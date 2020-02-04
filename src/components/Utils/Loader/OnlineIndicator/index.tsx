import Typing from "../Typing";
import { style } from "typestyle";

const OnlineIndicator: React.FC<{}> = () => {
  const divStyle = style({
    $debugName: "online-indicator",
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 1000
  });
  return (
    <div className={divStyle}>
      <Typing />
    </div>
  );
};

export default OnlineIndicator;
