export const RadioInputIcon = ({
  size = "36px",
  fill = "#000000",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 30 30"
    id="Date"
  >
    <path
      d="M26 4h-3V2a1 1 0 1 0-2 0v2H9V2a1 1 0 1 0-2 0v2H4C2.346 4 1 5.346 1 7v19c0 1.654 1.346 3 3 3h22c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3zM4 6h3v2a1 1 0 1 0 2 0V6h12v2a1 1 0 1 0 2 0V6h3a1 1 0 0 1 1 1v4H3V7a1 1 0 0 1 1-1zm22 21H4a1 1 0 0 1-1-1V13h24v13a1 1 0 0 1-1 1z"
      fill={fill}
      className={className}
    ></path>
    <path
      d="M20.293 15.293 13 22.586l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4 4a.997.997 0 0 0 1.414 0l8-8a.999.999 0 1 0-1.414-1.414z"
      fill={fill}
      className={className}
    ></path>
  </svg>
);
