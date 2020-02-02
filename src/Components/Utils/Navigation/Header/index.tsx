import { style } from "typestyle";
import { useState, useEffect } from "react";
import Typing from "../../Loader/Typing";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const headerStyle = style({
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 10px",
    borderBottom: "1px solid",
    cursor: "grab",
    fontSize: "1rem"
  });

  const [title, setTitle] = useState("Loading...");
  useEffect(() => {
    setTitle(document.title);
  });

  return (
    <header className={`navigation-header ${headerStyle}`}>
      <span>A</span>
      <span>
        {title.length > 20 ? (
          <span>
            {title.slice(0, 20)}
            <Typing />
          </span>
        ) : (
          title
        )}
      </span>
      <span>C</span>
    </header>
  );
};

export default Header;
