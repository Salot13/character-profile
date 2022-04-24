import clsx from "clsx";
import Img from "react-imgix";

interface ImageProps {
  src: string;
  sizes?: string;
  lazyload?: boolean;
  className?: string;
  alt: string;
}

export function Image({
  src,
  sizes = "100vw",
  lazyload = true,
  alt,
  className,
}: ImageProps) {
  let attributeConfig: { [key: string]: string } = {};
  const htmlAttributes: { [key: string]: string } = {
    alt: alt || "",
    src: src || "",
  };

  if (lazyload) {
    attributeConfig = {
      src: "data-src",
      srcSet: "data-srcset",
      sizes: "data-sizes",
    };
  }

  return (
    <Img
      src={src || ""}
      sizes={sizes}
      className={clsx(className, lazyload && "lazyload")}
      attributeConfig={attributeConfig}
      htmlAttributes={htmlAttributes}
    />
  );
}
