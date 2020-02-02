import { style } from "typestyle";
import { useState, useEffect, Fragment } from "react";

export interface HeaderProps {}

const Dots: React.FC<{}> = () => {
  return (
    <Fragment>
      {Array(3)
        .fill(1)
        .map((_item: any, i: number) => (
          <span key={i} className={`dot dot-${i}`}>
            .
          </span>
        ))}
    </Fragment>
  );
};

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
            <Dots />
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
