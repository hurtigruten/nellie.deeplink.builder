import { SVGAttributes } from 'react';

const SvgPriceTagFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 7l8.445-5.63a1 1 0 011.11 0L21 7v14a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm9 4a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

export default SvgPriceTagFill;
