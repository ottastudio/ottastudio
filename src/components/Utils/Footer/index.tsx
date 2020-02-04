import { style } from "typestyle";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const footerStyle = style({
    $debugName: "footer",
    height: "50vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#ffffff",
    color: "#000000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    filter: "invert(1)",
    mixBlendMode: "difference"
  });
  return <footer className={footerStyle}>App Footer</footer>;
};

export default Footer;
