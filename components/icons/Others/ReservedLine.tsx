import { SVGAttributes } from 'react';

const SvgReservedLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M13 15v4h3v2H8v-2h3v-4H4a1 1 0 01-1-1V4a1 1 0 011-1h16a1 1 0 011 1v10a1 1 0 01-1 1h-7zm-8-2h14V5H5v8zm3-5h8v2H8V8z" />
  </svg>
);

export default SvgReservedLine;
