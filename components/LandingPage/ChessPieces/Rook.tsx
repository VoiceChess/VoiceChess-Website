import React from "react";

interface ChessPieceProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const Rook: React.FC<ChessPieceProps> = ({
  width = 192,
  height = 192,
  color = "#000000",
  className = "",
}) => {
  return (
    <svg
      viewBox="0 0 339.18 422.28"
      width={width}
      height={height}
      className={className}
    >
      <g>
        <path
          d="M1370.16-1226.65l-22.6-177.73a53.57,53.57,0,0,0,37.13-50.76l5.25-51.68a29.35,29.35,0,0,0-7.41-22.63,29.32,29.32,0,0,0-21.74-9.65h-25.57a17.61,17.61,0,0,0-17.47,14.9l-5.2,32.36-14.37.41-4.57-45.71a13.78,13.78,0,0,0-13.75-12.45h-65.62a13.8,13.8,0,0,0-13.83,13.27l-1.8,45.1-10.42.36-9.79-35.26a17.75,17.75,0,0,0-17.06-13h-28.63a29.37,29.37,0,0,0-21.74,9.65,29.42,29.42,0,0,0-7.41,22.63l5.25,51.68a53.59,53.59,0,0,0,39.3,51.42l-19.78,177.09a65.88,65.88,0,0,0-48.65,63.48v35.84h339.18v-35.84A65.87,65.87,0,0,0,1370.16-1226.65Z"
          transform="translate(-1079.68 1549.59)"
          fill={color}
        />
      </g>
    </svg>
  );
};
