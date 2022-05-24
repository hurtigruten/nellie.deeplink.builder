import { SVGAttributes } from 'react';

const SvgTempColdFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M8 10.255V5a4 4 0 118 0v5.255a7 7 0 11-8 0zM8 16a4 4 0 108 0H8z" />
  </svg>
);

export default SvgTempColdFill;
