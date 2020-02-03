import { style } from "typestyle";
import Title from "./Title";
import Toggles from "./Toggles";

const Header: React.FC<{}> = () => {
  const headerStyle = style({
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid",
    cursor: "grab",
    fontSize: "1rem",
    padding: "0px 0px 0px 10px"
  });

  return (
    <header className={`navigation-header ${headerStyle}`}>
      <Title />
      <Toggles />
    </header>
  );
};

export default Header;
