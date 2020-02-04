import { ReactElement, Children, cloneElement } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export interface NavlinkProps {
  children: ReactElement;
  activeClassName: string;
  href: string;
}

export const NavlinkRegular: React.FC<NavlinkProps> = ({
  children,
  activeClassName,
  href
}) => {
  const { pathname } = useRouter();
  const child = Children.only(children);

  const className =
    href === pathname
      ? `${child.props.className} ${activeClassName}`
      : child.props.className;

  return <Link href={href}>{cloneElement(child, { className })}</Link>;
};
