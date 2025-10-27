import React from "react";

interface ChessPieceProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const King: React.FC<ChessPieceProps> = ({
  width = 192,
  height = 192,
  color = "#000000",
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 433.02 467.1"
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path
          d="M3695.24-1441.2c-49.5-62.93-129-34.94-152.23-24.86a2.35,2.35,0,0,1-2,0,2.36,2.36,0,0,1-1.25-1.59l-6.66-27.67h34.8v-62h-37.27v-39.6h-61.24v39.6h-37.27v62h34.8l-6.66,27.67a2.36,2.36,0,0,1-1.25,1.59,2.35,2.35,0,0,1-2,0c-23.22-10.08-102.73-38.07-152.23,24.86-2.69,3.13-54,64.62,13.16,148l61.59,66.49c-29,9.74-46.81,33-46.81,61.79v21.77a13.34,13.34,0,0,0,13.32,13.32H3653a13.33,13.33,0,0,0,13.32-13.32v-21.77c0-28.46-17.29-51-46.55-61.29l62.2-66.81.16-.18C3749.23-1376.58,3697.93-1438.1,3695.24-1441.2Z"
          transform="translate(-3283.49 1596.95)"
          fill={color}
        />
      </g>
    </svg>
  );
};
