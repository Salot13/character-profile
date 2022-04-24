import { ReactElement } from "react";

export interface LinkProps {
  link: string;
  children?: ReactElement | ReactElement[] | string;
  className?: string;
  isExternalLink?: boolean;
  label?: string;
  icon?: ReactElement | string;
}

export interface IconProps {
  color?: string;
  fillColor?: string;
  rotateDegree?: number;
  width?: number;
  height?: number;
  className?: string;
  isActive?: boolean;
  isLoading?: boolean;
}

export interface AccordionProps {
  title: string;
  content: Array<string>;
}

export interface ButtonProps {
  label: string;
  className?: string;
  type?: "button";
  onClick?: (arg: React.MouseEvent<HTMLElement>) => void;
}

interface currentPaginationDataTypes {
  toCharacterData: number;
  fromCharacterData: number;
}

export interface PaginationProps {
  totalPages: number;
  activePage: number;
  nextButtonClick: () => void;
  prevButtonClick: () => void;
  currentPaginationData: currentPaginationDataTypes;
}
