import { useRouter } from "next/router";
import { style } from "typestyle";
import Subscribe from "./Subscribe";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { pathname } = useRouter();
  const footerStyle = style({
    $debugName: "footer",
    height: "50vh",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "transparent",
    color: "inherit",
    display: pathname === "/user/dashboard" ? "none" : "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTop: "1px solid"
  });
  return (
    <footer className={footerStyle}>
      <Subscribe />
    </footer>
  );
};

export default Footer;
