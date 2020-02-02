import { style } from "typestyle";
import TabContext from "../../Tab/TabContext";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const footerStyle = style({
    $debugName: "navigation-footer",
    height: 40,
    display: "flex",
    alignItems: "center",
    padding: "0px 10px",
    fontSize: 12
  });
  return (
    <TabContext.Consumer>
      {({ sites }) => {
        const name = sites ? sites.name.full : "Loading...";
        return (
          <footer className={footerStyle}>
            &copy;2015-{new Date().getFullYear()} {name}.
          </footer>
        );
      }}
    </TabContext.Consumer>
  );
};

export default Footer;