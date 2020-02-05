import { style, media } from "typestyle";
import Title from "./Title";
import Toggles from "./Toggles";

const Header: React.FC<{}> = () => {
  const headerStyle = style(
    {
      height: 39,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid",
      cursor: "grab",
      fontSize: "1rem",
      padding: "0px 0px 0px 10px",
      backgroundColor: "inherit",
      color: "inherit",
      position: "relative",
      zIndex: 10
    },
    media({ maxWidth: 767 }, { height: 60 })
  );

  return (
    <header className={`navigation-header ${headerStyle}`}>
      <Title />
      <Toggles />
    </header>
  );
};

export default Header;
