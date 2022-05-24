import { SVGAttributes } from 'react';

const SvgParkingFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M6 3h7a6 6 0 110 12h-3v6H6V3zm4 4v4h3a2 2 0 100-4h-3z" />
  </svg>
);

export default SvgParkingFill;
