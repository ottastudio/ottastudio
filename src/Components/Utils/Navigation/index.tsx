import { useState, useRef } from "react";
import { style } from "typestyle";
import Drag from "react-draggable";

import { useOnClickOutside } from "../../../lib/hooks/useOnClickOutside";

import NavigationContext from "./NavigationContext";
import Header from "./Header";
import CompoundTab from "./CompoundTab";

const navStyle = style({
  $debugName: "navigation",
  position: "fixed",
  top: "calc(50% - 40px)",
  left: "calc(50% - 180px)",
  transform: "translate(-50%, -50%)",

  width: 360,
  minHeight: 40,
  border: "1px solid",
  zIndex: 1000,

  backgroundColor: "inherit",
  color: "inherit",
  boxShadow: "10px 10px 10px 0rem rgba(0,0,0,0.1)"
});
const draggableBounds = style({
  $debugName: "navigation-bounds",
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  padding: 20,
  pointerEvents: "none",
  visibility: "hidden"
});

const Navigation: React.FC<{}> = () => {
  const navRef = useRef<HTMLElement>(null);

  const [showContent, setShowContent] = useState(false);
  useOnClickOutside(navRef, () => setShowContent(false));

  return (
    <NavigationContext.Provider value={{ showContent, setShowContent }}>
      <div className={draggableBounds} />
      <Drag
        bounds={`.${draggableBounds}`}
        defaultClassName={navStyle}
        handle=".navigation-header"
      >
        <nav ref={navRef}>
          <Header />
          <CompoundTab />
        </nav>
      </Drag>
    </NavigationContext.Provider>
  );
};

export default Navigation;
