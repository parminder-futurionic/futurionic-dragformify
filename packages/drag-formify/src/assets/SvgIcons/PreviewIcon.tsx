export const PreviewIcon = ({
  size = "36px",
  fill = "#333",
  className = "",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    id="preview"
  >
    <path
      d="M12,19C5.526,19,.44,12.9.227,12.634a1,1,0,0,1,0-1.268C.44,11.105,5.526,5,12,5s11.56,6.105,11.773,6.366a1,1,0,0,1,0,1.268C23.56,12.9,18.474,19,12,19ZM2.349,12C3.764,13.472,7.611,17,12,17s8.239-3.525,9.651-5C20.236,10.528,16.389,7,12,7S3.761,10.525,2.349,12Z"
      fill={fill}
      className={className}
    ></path>
    <path
      d="M12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"
      fill={fill}
      className={className}
    ></path>
  </svg>
);
