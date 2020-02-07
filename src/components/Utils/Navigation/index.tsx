import { useRef, useEffect, useContext } from "react";
import { style, media } from "typestyle";
import Drag from "react-draggable";
import Router from "next/router";

import { useOnClickOutside } from "../../../lib/hooks/useOnClickOutside";

import { NavProvider, NavContext } from "./NavContext";
import Header from "./Header";
import CompoundTab from "./CompoundTab";

const navStyle = style(
  {
    $debugName: "navigation",
    position: "fixed",
    width: 360,
    minHeight: 40,
    border: "1px solid",
    zIndex: 1000,
    backgroundColor: "inherit",
    color: "inherit",
    boxShadow: "10px 10px 10px 0rem rgba(0,0,0,0.1)"
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
const draggableBounds = style(
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

const Navigation: React.FC<{}> = () => {
  const navRef = useRef<HTMLElement>(null);
  const { disable, setShowContent } = useContext(NavContext);
  useOnClickOutside(navRef, () => setShowContent(false));

  useEffect(() => {
    // async simulated to avoid memory leak
    const closeContent = setTimeout(() => {
      Router.events.on("routeChangeComplete", () => setShowContent(false));
    }, 1000);
    return () => clearTimeout(closeContent);
  }, []);

  return (
    <NavProvider>
      <div className={draggableBounds} />
      <Drag
        bounds={`.${draggableBounds}`}
        defaultClassName={navStyle}
        handle=".navigation-header"
        disabled={disable}
      >
        <nav ref={navRef}>
          <Header />
          <CompoundTab />
        </nav>
      </Drag>
    </NavProvider>
  );
};

export default Navigation;
