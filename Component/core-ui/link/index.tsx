import Link from "next/link";
import { LinkProps } from "../../../types/linkTypes";
import { ternaryConditions } from "../utils/ternaryConditions";

export const Links = ({
  link,
  isExternalLink = false,
  className,
  children,
  icon,
}: LinkProps) => (
  <Link href={link}>
    <a
      className={className}
      href={link}
      target={ternaryConditions(isExternalLink, "_blank", "_self")}
      rel="noreferrer"
    >
      {children}
      {icon}
    </a>
  </Link>
);
