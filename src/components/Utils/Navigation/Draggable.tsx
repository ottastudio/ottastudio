import { useRef } from "react";
import { style, media } from "typestyle";
import Drag from "react-draggable";

import { useNavContext } from "./NavContext";
import { useOnClickOutside } from "../../../lib/hooks/useOnClickOutside";
import Header from "./Header";
import CompoundTab from "./CompoundTab";

export const navStyle = style(
  {
    $debugName: "navigation",
    position: "fixed",
    width: 360,
    minHeight: 40,
    border: "1px solid",
    zIndex: 2000,
    backgroundColor: "inherit",
    color: "inherit",
    boxShadow: "10px 10px 10px 0rem rgba(0,0,0,0.1)",
    touchAction: "auto"
  },
  media(
    { minWidth: 768 },
    {
      top: "calc(50% - 20px)",
      left: "calc(50% - 180px)",
      transform: "translate(-50%, -50%)"
    }
  ),
  media({ maxWidth: 767 }, { width: "calc(100% - 20px)", left: 10, bottom: 10 })
);
export const draggableBounds = style(
  {
    $debugName: "navigation-bounds",
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    padding: 20,
    pointerEvents: "none",
    visibility: "hidden"
  },
  media({ maxWidth: 767 }, { padding: 0 })
);

const Draggable: React.FC<{}> = () => {
  const navRef = useRef<HTMLElement>(null);
  const { setShowContent, disable } = useNavContext();
  useOnClickOutside(navRef, () => setShowContent(false));
  return (
    <Drag
      bounds={`.${draggableBounds}`}
      defaultClassName={navStyle}
      handle=".navigation-header"
      disabled={disable}
    >
      <nav ref={navRef} className={navStyle}>
        <Header />
        <CompoundTab />
      </nav>
    </Drag>
  );
};

export default Draggable;
