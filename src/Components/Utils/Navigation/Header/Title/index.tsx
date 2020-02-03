import { useState, useEffect } from "react";
import Typing from "../../../Loader/Typing";
import { style } from "typestyle";

const Title: React.FC<{}> = () => {
  const spanStyle = style({
    $debugName: "navigation-title",
    width: "66.66%"
  });

  const [title, setTitle] = useState("Loading...");
  useEffect(() => {
    setTitle(document.title);
  });

  return (
    <span className={spanStyle}>
      {title.length > 20 ? (
        <span>
          {title.slice(0, 20)}
          <Typing />
        </span>
      ) : (
        title
      )}
    </span>
  );
};

export default Title;
