import { ReactElement } from "react";

export interface LinkProps {
  link: string;
  children?: ReactElement | ReactElement[] | string;
  className?: string;
  isExternalLink?: boolean;
  label?: string;
  icon?: ReactElement | string;
}
