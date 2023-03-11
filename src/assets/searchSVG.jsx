import * as React from "react";
const SearchSVG = (props) => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill="#616161">
      <path d="m29.174 31.99 2.828-2.829 12.02 12.021-2.828 2.828z" />
      <circle cx={20} cy={20} r={16} />
    </g>
    <path
      fill="#37474F"
      d="m32.448 35.34 2.828-2.828 8.698 8.697-2.829 2.828z"
    />
    <circle fill="#64B5F6" cx={20} cy={20} r={13} />
    <path
      fill="#BBDEFB"
      d="M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-.4.4-.3 1.1.1 1.4.4.4 1.1.3 1.4-.1C16 13.9 17.9 13 20 13s4 .9 5.4 2.5c.2.2.5.4.8.4.2 0 .5-.1.6-.2.4-.4.4-1.1.1-1.5z"
    />
  </svg>
);
export default SearchSVG;
