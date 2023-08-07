export const EmailIcon = ({
  size = "36px",
  fill = "#000000",
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 64 64"
    id="Email"
  >
    <rect
      width="33"
      height="47"
      x="15.5"
      y="8.5"
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      rx="2"
      ry="2"
      transform="rotate(-90 32 32)"
      className={className}
    ></rect>
    <polyline
      fill="none"
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      points="9 17 32 33 55 17.5"
    ></polyline>
  </svg>
);
