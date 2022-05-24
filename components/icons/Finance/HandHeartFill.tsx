import { SVGAttributes } from 'react';

const SvgHandHeartFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M9.33 11.5h2.17A4.5 4.5 0 0116 16H8.999L9 17h8v-1a5.578 5.578 0 00-.886-3H19a5 5 0 014.516 2.851C21.151 18.972 17.322 21 13 21c-2.761 0-5.1-.59-7-1.625v-9.304A6.967 6.967 0 019.33 11.5zM4 9a1 1 0 01.993.883L5 10v9a1 1 0 01-1 1H2a1 1 0 01-1-1v-9a1 1 0 011-1h2zm9.646-5.425L14 3.93l.354-.354a2.5 2.5 0 113.535 3.536L14 11l-3.89-3.89a2.5 2.5 0 113.536-3.535z" />
  </svg>
);

export default SvgHandHeartFill;
