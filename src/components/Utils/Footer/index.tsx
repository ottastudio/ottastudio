import { useRouter } from "next/router";
import { style } from "typestyle";
import Subscribe from "./Subscribe";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { pathname } = useRouter();
  const footerStyle = style({
    $debugName: "footer",
    position: "relative",
    height: "50vh",
    overflow: "hidden",
    backgroundColor: "transparent",
    color: "inherit",
    display:
      pathname === "/user/dashboard" || pathname === "/user/login"
        ? "none"
        : "block",
  });
  return (
    <footer className={footerStyle}>
      <Subscribe />
    </footer>
  );
};

export default Footer;
