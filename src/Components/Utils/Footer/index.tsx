import { style } from "typestyle";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const footerStyle = style({
    $debugName: "footer",
    height: "50vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "inherit",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  });
  return <footer className={footerStyle}>App Footer</footer>;
};

export default Footer;
