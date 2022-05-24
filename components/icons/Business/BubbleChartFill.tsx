import { SVGAttributes } from 'react';

const SvgBubbleChartFill = (props: SVGAttributes<SVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M16 16a3 3 0 110 6 3 3 0 010-6zM6 12c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm8.5-10a5.5 5.5 0 110 11 5.5 5.5 0 110-11z" />
  </svg>
);

export default SvgBubbleChartFill;
