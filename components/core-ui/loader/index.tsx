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

export default function Loader({
  width = 120,
  height = 120,
  className = "m-auto",
  isLoading,
}: IconProps) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      {isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          width={width}
          height={height}
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="31"
            stroke="#3b82f6"
            strokeWidth="7"
            fill="none"
          ></circle>
          <circle
            cx="50"
            cy="50"
            r="31"
            stroke="#172337"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="2s"
              values="0 50 50;180 50 50;720 50 50"
              keyTimes="0;0.5;1"
            ></animateTransform>
            <animate
              attributeName="stroke-dasharray"
              repeatCount="indefinite"
              dur="2s"
              values="19.477874452256717 175.30087007031045;97.3893722612836 97.38937226128357;19.477874452256717 175.30087007031045"
              keyTimes="0;0.5;1"
            ></animate>
          </circle>
        </svg>
      )}
    </div>
  );
}
