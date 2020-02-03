import { style } from "typestyle";
import { useDocTitle } from "../../../../../lib/hooks/useDocTitle";
import { useWindowDimension } from "../../../../../lib/hooks/useWindowDimension";

import Typing from "../../../Loader/Typing";
import NavigationContext from "../../NavigationContext";

const Title: React.FC<{}> = () => {
  const spanStyle = style({
    $debugName: "navigation-title",
    width: "66.66%"
  });

  const { title } = useDocTitle();
  const { width } = useWindowDimension();
  const isPhone = width <= 767 ? true : false;

  return (
    <NavigationContext.Consumer>
      {({ setShowContent, showContent }) => (
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
      )}
    </NavigationContext.Consumer>
  );
};

export default Title;
