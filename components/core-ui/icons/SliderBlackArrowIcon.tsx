import { IconProps } from "../loader";

export default function SliderBlackArrowIcon({
  width = 30,
  height = 30,
  color = "black",
  className = "transform rotate-180",
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 39 9"
      fill="none"
      className={className}
    >
      <path
        d="M38.0833 4.49992L30.25 0.333252V3.45825H0.875V5.54159H30.25V8.66659L38.0833 4.49992Z"
        fill={color}
      />
    </svg>
  );
}
