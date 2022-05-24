import { SVGAttributes } from 'react';

const SvgScanFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M4.257 5.671L12 13.414 13.414 12 5.671 4.257A9.959 9.959 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-2.401.846-4.605 2.257-6.329z" />
  </svg>
);

export default SvgScanFill;
