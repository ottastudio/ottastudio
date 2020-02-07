import { useContext } from "react";
import { style } from "typestyle";
import { useDocTitle } from "../../../../../lib/hooks/useDocTitle";
import { useWindowDimension } from "../../../../../lib/hooks/useWindowDimension";
import { NavContext } from "../../NavContext";

import Typing from "../../../Loader/Typing";

const Title: React.FC<{}> = () => {
  const { setShowContent, showContent } = useContext(NavContext);
  const { title } = useDocTitle();
  const { width } = useWindowDimension();
  const isPhone = width <= 767 ? true : false;

  const spanStyle = style({
    $debugName: "navigation-title",
    width: "66.66%"
  });

  return (
    <span
      className={spanStyle}
      onClick={isPhone ? () => setShowContent(!showContent) : undefined}
    >
      {!title ? (
        <span>
          Loading
          <Typing />
        </span>
      ) : title.length > 20 ? (
        <span>
          {title.slice(0, 20)}
          <Typing />
        </span>
      ) : (
        `${title}.`
      )}
    </span>
  );
};

export default Title;
