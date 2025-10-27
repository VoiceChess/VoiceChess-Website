import React from "react";

interface ChessPieceProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const Bishop: React.FC<ChessPieceProps> = ({
  width = 192,
  height = 192,
  color = "#000000",
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 330.65 460.28"
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path
          d="M2467.41-1233.49c-.16,0-.34,0-.50,0a198,198,0,0,0,43-128.62c.84-5.18,5.25-50.57-75.45-137.71l-2.83-3.05-2.47,3.37c-1.32,1.85-32.32,47-31.88,146.26l-38.12,0c.57-18.93,4.63-108.58,30.84-151.85a45.15,45.15,0,0,0,27.49-41.35,45,45,0,0,0-45-45,45,45,0,0,0-44.94,45,44.87,44.87,0,0,0,8.44,26.16c-22,19.46-79.51,74.7-85.65,126.07-2,6.25-25.89,87.32,34.65,160.56-.91.09-1.83.14-2.74.23a73,73,0,0,0-72.74,72.9V-1141a9.83,9.83,0,0,0,9.83,9.83h311a9.83,9.83,0,0,0,9.83-9.83v-19.57A73,73,0,0,0,2467.41-1233.49Z"
          transform="translate(-2209.5 1591.47)"
          fill={color}
        />
      </g>
    </svg>
  );
};
