import { SVGAttributes } from 'react';

const SvgPriceTagLine = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M3 7l8.445-5.63a1 1 0 011.11 0L21 7v14a1 1 0 01-1 1H4a1 1 0 01-1-1V7zm2 1.07V20h14V8.07l-7-4.666L5 8.07zM12 11a2 2 0 110-4 2 2 0 010 4z" />
  </svg>
);

export default SvgPriceTagLine;
