import { SVGAttributes } from 'react';

const SvgDeviceFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M19 6h-8a1 1 0 00-1 1v13H4a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v3zm-6 2h8a1 1 0 011 1v12a1 1 0 01-1 1h-8a1 1 0 01-1-1V9a1 1 0 011-1z" />
  </svg>
);

export default SvgDeviceFill;
